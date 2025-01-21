import Breadcrumbs from '@/components/ui/Breadcrumb';
import SectionCard from '@/components/ui/Card/SectionCard';
import CustomTag from '@/components/ui/CustomTag';
import BlogInfoTag from '@/components/ui/CustomTag/BlogInfoTag';
import '@/styles/scss/_typography.scss';
import { blogList } from '@/utils/mockDB';
import Image from 'next/image';
import ContentTable from '../ContentTable';
import PromoteBannerCard from '@/components/ui/Card/PromoteBannerCard';

const BlogDetailsHeader = () => {
  const { title, author, tags, publishDate, coverImage, description, content } = blogList[0];

  return (
    <>
      <section className="container grid grid-cols-1 py-mobile_section_padding laptop:grid-cols-12 laptop:gap-x-3xl laptop:!px-[60px] desktop:gap-x-3xl desktop:py-desktop_section_padding">
        {/* <div className="relative hidden laptop:col-span-2 laptop:block overflow-scroll">
          <ContentTable
            content={content || ''}
            className="fixed left-[60px] top-[calc(var(--desktop-section-paddingY))] w-[calc((1440px-2*(2.5rem+var(--desktop-container-padding-x)))/6)]"
          />
        </div> */}
        <ContentTable content={content || ''} className="col-span-1 laptop:col-span-2" />

        <div className="col-span-1 laptop:col-span-8">
          <div className="blog-post mx-auto flex w-full flex-col items-center justify-start">
            <Breadcrumbs />
            <div className="flex w-full flex-col items-center justify-start gap-2xl text-center laptop:gap-3xl">
              <h1 className="text-primary-default headline-bold tablet:body-bold laptop:h1-bold">{title}</h1>
              <div className={`flex flex-wrap gap-s`}>
                {tags?.map((tag) => {
                  return <CustomTag key={tag.id} tagName={tag.name} type="outline" />;
                })}
              </div>
              <BlogInfoTag publishDate={publishDate} author={author} className="!w-fit" />
              <div className={`w-full overflow-hidden rounded-m`}>
                <Image
                  title={title}
                  src={coverImage || ''}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: content as string }} className="blog-content mt-[120px]" />
          </div>
        </div>
        <div className="col-span-1 laptop:col-span-2 w-full">
          <PromoteBannerCard />
        </div>
        {/* <ContentTable content={content || ''} className="col-span-1 laptop:col-span-2" /> */}
      </section>
    </>
  );
};

export default BlogDetailsHeader;
;

export default BlogDetailsHeader;
