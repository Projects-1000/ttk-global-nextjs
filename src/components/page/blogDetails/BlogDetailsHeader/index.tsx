'use client';
import Breadcrumbs from '@/components/ui/Breadcrumb';
import PromoteBannerCard from '@/components/ui/Card/PromoteBannerCard';
import CustomTag from '@/components/ui/CustomTag';
import BlogInfoTag from '@/components/ui/CustomTag/BlogInfoTag';
import '@/styles/scss/_typography.scss';
import { BlogModelProps } from '@/types/model.type';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ContentTable from '../ContentTable';
import '../ContentTable/index.scss';

export interface Heading {
  id: string;
  text: string;
  tag: 'H2' | 'H3';
  children?: Heading[];
}

interface BlogDetailsHeaderProps extends BlogModelProps {}

const BlogDetailsHeader = (blogDetails: BlogDetailsHeaderProps) => {
  const { title, createdBy: author, tags, createdAtIsoFormat: publishDate, coverImage, content } = blogDetails;
  const [nestedHeadings, setNestedHeadings] = useState<Heading[]>([]);
  const [loadingHeadings, setLoadingHeadings] = useState(false);
  const [convertedContent, setConvertedContent] = useState<string>(content || '');

  useEffect(() => {
    if (content) {
      setLoadingHeadings(true);
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');

      const headings: Heading[] = [];
      let currentH2: Heading | null = null;

      doc.querySelectorAll('h2, h3').forEach((heading) => {
        const text = heading.textContent?.trim() || '';

        if (text) {
          const id = removeVietnameseTones(text);
          const tag = heading.tagName as 'H2' | 'H3';

          if (tag === 'H2') {
            currentH2 = { id, text, tag, children: [] };
            headings.push(currentH2);
          } else if (tag === 'H3' && currentH2) {
            currentH2.children?.push({ id, text, tag });
          }

          heading.setAttribute('id', id);
          (heading as HTMLElement).style.scrollMarginTop = window.innerWidth >= 1024 ? '100px' : '20px';
        }
      });

      setNestedHeadings(headings);
      setLoadingHeadings(false);
      setConvertedContent(doc.body.innerHTML);
    }
  }, [content]);

  const removeVietnameseTones = (str: string): string => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  };
  useEffect(() => {
    if (convertedContent) {
      const headings = document.querySelectorAll('h2[id], h3[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              window.history.replaceState(null, '', `#${id}`);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -50% 0px'
        }
      );

      headings.forEach((heading) => {
        observer.observe(heading);
      });

      return () => {
        headings.forEach((heading) => {
          observer.unobserve(heading);
        });
        observer.disconnect();
      };
    }
  }, [convertedContent]);
  return (
    <div className="flex w-full flex-col items-start justify-start px-2xl laptop:flex-row laptop:px-[60px]">
      <ContentTable
        loadingHeadings={loadingHeadings}
        nestedHeadings={nestedHeadings}
        className="relative w-full laptop:sticky laptop:top-[120px] laptop:col-span-2 laptop:max-w-[17%]"
      />

      <section className="grid grid-cols-1 py-mobile_section_padding laptop:grid-cols-12 laptop:gap-x-3xl laptop:!px-[60px] desktop:gap-x-3xl">
        <div className="col-span-1 laptop:col-span-12">
          <div className="blog-post mx-auto flex w-full flex-col items-center justify-start laptop:gap-3xl">
            <Breadcrumbs customColor="text-black" customEndPoint={title} textCenter />
            <div className="flex w-full flex-col items-center justify-start gap-2xl text-center laptop:gap-3xl">
              <h1 className="text-primary-default headline-bold tablet:body-bold laptop:h1-bold">{title}</h1>
              <div className={`flex flex-wrap gap-s`}>
                {tags?.map((tag, index) => {
                  return <CustomTag key={index} tagName={tag} type="outline" />;
                })}
              </div>
              <BlogInfoTag createdAtIsoFormat={publishDate} createdBy={author} className="!w-fit" />
              {/* <div className={`w-full overflow-hidden rounded-m`}>
                <Image
                  title={title}
                  src={coverImage || ''}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full object-contain"
                />
              </div> */}
            </div>

            <div dangerouslySetInnerHTML={{ __html: convertedContent as string }} className="blog-content" />
          </div>
        </div>
      </section>
      <div className="sticky top-[120px] hidden w-full laptop:col-span-2 laptop:block laptop:max-w-[17%]">
        <PromoteBannerCard />
      </div>
    </div>
  );
};

export default BlogDetailsHeader;
