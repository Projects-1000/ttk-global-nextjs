import TagFilterItem from './TagFilterItem';
import { useContext, useEffect, useState } from 'react';
import { TagModelProps } from '@/types/model.type';
import { BlogListContext } from '../BlogList';
import { tagList } from '@/utils/mockDB';

interface TagFilterProps {}

const TagFilter = ({}: TagFilterProps) => {
  const [tags, setTags] = useState<TagModelProps[]>([]);
  const { allTagId } = useContext(BlogListContext);

  useEffect(() => {
    setTags(tagList);
  }, []);

  const totalBlogs = tags.reduce((sum, tag) => sum + tag.blogAmount, 0);

  return (
    <div className="flex w-full flex-col items-start gap-2xl laptop:gap-3xl">
      <p className="text-primary-default body-bold laptop:block laptop:text-black">Tag</p>
      <div className="flex w-full min-w-full flex-col items-start gap-l laptop:gap-s">
        <div className="hidden w-full laptop:block">
          <TagFilterItem key={allTagId} blogAmount={totalBlogs} name="All" id={allTagId} />
        </div>
        {tags.map((tag) => {
          return <TagFilterItem key={tag.id} {...tag} />;
        })}
      </div>
    </div>
  );
};

export default TagFilter;
