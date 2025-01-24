import { TagModelProps } from '@/types/model.type';
import { useContext, useEffect, useState } from 'react';
import { BlogListContext } from '../BlogList';
import TagFilterItem from './TagFilterItem';
import { Skeleton } from '@mui/material';

export interface TagFilterProps {
  isMobile?: boolean;
}

const fetchTags = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-full-tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data: TagModelProps[] = await response.json();
  return data;
};

const TagFilter = ({ isMobile }: TagFilterProps) => {
  const [tags, setTags] = useState<TagModelProps[]>([]);
  const { allTagId } = useContext(BlogListContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getTags = async () => {
      setIsLoading(true);
      const res = await fetchTags();
      if (res?.length) {
        setTags(res);
      }
      setIsLoading(false);
    };
    getTags();
  }, []);

  const totalBlogs = tags.reduce((sum, tag) => sum + tag.blogAmount, 0);

  return (
    <div className="flex w-full flex-col items-start gap-2xl laptop:gap-3xl">
      <p className="text-primary-default body-bold laptop:block laptop:text-black">Tag</p>
      <div className="flex w-full min-w-full flex-col items-start gap-l laptop:gap-s">
        <div className="hidden w-full laptop:block">
          <TagFilterItem key={allTagId} blogAmount={totalBlogs} tag={allTagId} />
        </div>
        {isLoading ? (
          <div className="w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} height={40} />
            ))}
          </div>
        ) : (
          tags.map((tag, index) => {
            return <TagFilterItem key={index} {...tag} isMobile={isMobile} />;
          })
        )}
      </div>
    </div>
  );
};

export default TagFilter;
