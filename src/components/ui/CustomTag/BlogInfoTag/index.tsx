import { BlogModelProps } from '@/types/model.type';
import { convertISODate } from '@/utils/helpers';
import { Divider } from '@mui/material';
import { DetailedHTMLProps } from 'react';

interface BlogInfoProps
  extends Pick<BlogModelProps, 'createdBy' | 'createdAtIsoFormat'>,
    Pick<DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'className'> {}

const BlogInfoTag = ({ createdBy: author, createdAtIsoFormat: publishDate, className }: BlogInfoProps) => {
  return (
    <ul
      className={`flex w-full list-none flex-row items-center gap-s footnote-bold mobile:max-tablet:hidden tablet:subtitle-regular ${className}`}
    >
      {author && (
        <>
          <li>{author}</li>
          <Divider orientation="vertical" flexItem className="border-r border-r-black" />
        </>
      )}
      {publishDate && <li> {convertISODate(publishDate)}</li>}
    </ul>
  );
};

export default BlogInfoTag;
