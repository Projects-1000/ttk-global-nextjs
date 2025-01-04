import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import './index.scss';
import CustomTag from '../../CustomTag';
import { BlogModelProps } from '@/types/model.type';
import { Divider } from '@mui/material';

interface BlogCardProps extends Omit<BlogModelProps, 'id' | 'isHighlight'> {
  direction?: 'row' | 'column';
  isShowContentMobile?: boolean;
}
const BlogCard = ({
  coverImage,
  description,
  publishDate,
  title,
  direction = 'column',
  tags,
  author,
  isShowContentMobile = false
}: BlogCardProps) => {
  return (
    <article className={`blog ${direction === 'column' ? 'blog__column gap-l' : 'blog__row gap-xl'}`}>
      <Link href="/" className={`w-full ${direction === 'row' ? 'basis-2/5' : ''}`}>
        <div className={`w-full overflow-hidden rounded-m`}>
          <Image
            title={title}
            src={coverImage || ''}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="smooth-transition h-auto w-full object-contain hover:scale-105"
          />
        </div>
      </Link>
      <div className={`blog-body ${direction === 'row' ? 'basis-3/5' : ''}`}>
        <ul
          className={`${isShowContentMobile ? '' : 'hidden'} w-full list-none flex-row items-center gap-s footnote-bold tablet:flex tablet:subtitle-regular`}
        >
          {author && (
            <>
              <li>{author}</li>
              <Divider orientation="vertical" flexItem className="border-r border-r-black" />
            </>
          )}
          {publishDate && <li> {publishDate}</li>}
        </ul>
        <Link href="/" className="smooth-transition text-black no-underline hover:text-primary-default">
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
          <div className={`flex flex-wrap gap-s ${isShowContentMobile ? '' : 'mobile:max-tablet:hidden'}`}>
            {tags?.map((tag) => {
              return <CustomTag key={tag.id} tagName={tag.name} type="active" />;
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
