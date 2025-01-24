'use client';
import { BlogModelProps } from '@/types/model.type';
import Image from 'next/image';
import Link from 'next/link';
import CustomTag from '../../CustomTag';
import BlogInfo from '../../CustomTag/BlogInfoTag';
import './index.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TooltipButton from '../../Button/TooltipButton';
import { Tooltip } from '@mui/material';

interface BlogCardProps extends Omit<BlogModelProps, 'id' | 'isMainBlog' | 'createdAtReadableFormat' | 'content'> {
  direction?: 'row' | 'column';
  isShowContentMobile?: boolean;
}

const BlogCard = ({
  coverImage,
  description,
  createdAtIsoFormat: publishDate,
  title,
  direction = 'column',
  tags,
  createdBy: author,
  isShowContentMobile = false,
  slug
}: BlogCardProps) => {
  const pathname = usePathname();
  const tagContainerRef = useRef<HTMLDivElement>(null);
  const moreTagRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState(tags);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (tagContainerRef.current && tags) {
      const container = tagContainerRef.current;
      const containerWidth = container.offsetWidth;
      const estimatedMoreTagWidth = 70; // Width estimation for `+X`
      let usedWidth = estimatedMoreTagWidth;
      let visibleTagsTemp: BlogModelProps['tags'] = [];
      let hiddenTagsTemp = 0;

      tags.forEach((tag, index) => {
        const tagElement = container.children[index] as HTMLElement;
        const tagWidth = tagElement?.offsetWidth;

        // Check if adding the current tag and `+X more` exceeds the container width
        console.log(usedWidth + tagWidth <= containerWidth);
        if (usedWidth + tagWidth <= containerWidth) {
          visibleTagsTemp.push(tag);
          usedWidth += tagWidth;
        } else {
          hiddenTagsTemp++;
        }
      });

      setVisibleTags(visibleTagsTemp);
      setHiddenCount(hiddenTagsTemp);
    }
  }, [tags]);
  console.log('>>>', tags);
  return (
    <article className={`blog ${direction === 'column' ? 'blog__column gap-l' : 'blog__row gap-xl'}`}>
      <Link href={`${pathname}/${slug}` || '#'} className={`w-full ${direction === 'row' ? 'basis-2/5' : ''}`}>
        <div className={`w-full overflow-hidden rounded-m`}>
          {/* <Image
            title={title}
            src={coverImage || ''}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="smooth-transition h-auto w-full object-contain hover:scale-105"
          /> */}
        </div>
      </Link>
      <div className={`blog-body ${direction === 'row' ? 'basis-3/5' : ''}`}>
        <BlogInfo createdBy={author} createdAtIsoFormat={publishDate} />
        <Link
          href={`${pathname}/${slug}` || '#'}
          className="smooth-transition text-black no-underline hover:text-secondary-default"
        >
          <header>
            <h2
              title={title}
              className={`${isShowContentMobile && direction === 'column' ? 'mobile:max-tablet:body-bold' : ''} ${direction === 'column' ? 'subtitle-bold tablet:line-clamp-3 tablet:headline-bold' : 'line-clamp-4 subtitle-bold tablet:line-clamp-3 tablet:headline-bold'}`}
            >
              {title}
            </h2>
          </header>
        </Link>
        <p
          className={`${direction === 'column' ? 'line-clamp-5 body-regular tablet:line-clamp-3' : 'line-clamp-3 subtitle-regular'} ${isShowContentMobile ? '' : 'mobile:max-tablet:hidden'} `}
        >
          {description}
        </p>
        {tags?.length && (
          <div
            ref={tagContainerRef}
            className={`flex w-full flex-wrap gap-s ${isShowContentMobile ? '' : 'mobile:max-tablet:hidden'}`}
          >
            {visibleTags?.map((tag, index) => {
              return <CustomTag key={index} tagName={tag} type="outline" />;
            })}
            {hiddenCount > 0 && (
              <Tooltip
                title={tags?.map((tag, index) => (
                  <CustomTag key={index} tagName={tag} type="outline" className="w-fit" />
                ))}
              >
                <div ref={moreTagRef} className="inline-block">
                  <CustomTag tagName={`+${hiddenCount}`} type="outline" />
                </div>
              </Tooltip>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
