import { BlogModelProps } from '@/types/model.type';
import { Divider } from '@mui/material';
import { DetailedHTMLProps } from 'react';

interface BlogInfoProps
  extends Pick<BlogModelProps, 'author' | 'publishDate'>,
    Pick<DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'className'> {}

const BlogInfoTag = ({ author, publishDate, className }: BlogInfoProps) => {
  return (
    <ul
      className={`flex w-full list-none flex-row items-center gap-s footnote-bold tablet:subtitle-regular ${className}`}
    >
      {author && (
        <>
          <li>{author}</li>
          <Divider orientation="vertical" flexItem className="border-r border-r-black" />
        </>
      )}
      {publishDate && <li> {publishDate}</li>}
    </ul>
  );
};

export default BlogInfoTag;
