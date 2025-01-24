import { TagModelProps } from '@/types/model.type';
import { useContext, useEffect, useState } from 'react';
import { BlogListContext } from '../BlogList';
import TagFilterItem from './TagFilterItem';

export interface TagFilterProps {
  isMobile?: boolean;
}

const fetchTags = async () => {
  const response = await fetch('http://localhost:5000/api/v1/blog/get-full-tags', {
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

  useEffect(() => {
    const getTags = async () => {
      const res = await fetchTags();
      if (res?.length) {
        setTags(res);
      }
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
        {tags.map((tag, index) => {
          return <TagFilterItem key={index} {...tag} isMobile={isMobile} />;
        })}
      </div>
    </div>
  );
};

export default TagFilter;
