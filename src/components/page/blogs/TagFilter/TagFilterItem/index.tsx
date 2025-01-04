import { TagModelProps } from '@/types/model.type';
import { useContext, useEffect, useState } from 'react';
import { BlogListContext } from '../../BlogList';

interface TagFilterItemProps extends TagModelProps {}
const TagFilterItem = ({ id, name, blogAmount }: TagFilterItemProps) => {
  const { setSelectedTags, selectedTags, allTagId } = useContext(BlogListContext);
  const [isActive, setIsActive] = useState<boolean>(selectedTags.includes(id));

  useEffect(() => {
    setIsActive(selectedTags.includes(id));
  }, [selectedTags]);

  const handleTagClick = () => {
    setSelectedTags((prev) => {
      if (id === allTagId) {
        return prev.includes(allTagId) ? [] : [allTagId];
      } else {
        const updatedTags = prev.filter((tag) => tag !== allTagId);
        if (updatedTags.includes(id)) {
          return updatedTags.filter((tag) => tag !== id);
        } else {
          return [...updatedTags, id];
        }
      }
    });

    setIsActive(!isActive);
  };

  if (!id) return null;
  return (
    <div
      onClick={handleTagClick}
      className={`${isActive ? 'bg-primary-default laptop:hover:bg-primary-darker' : 'bg-white laptop:hover:bg-primary-subtle'} smooth-transition group flex w-full cursor-pointer flex-row items-center justify-between overflow-hidden rounded-xs px-m py-xs`}
    >
      <p className={`${isActive ? 'text-greyscale-negative' : 'text-black'} body-bold`}>{name}</p>
      <div
        className={`flex items-center rounded-full px-xs py-3xs pt-[3px] leading-[12px] footnote-bold ${isActive ? 'bg-white text-black' : 'bg-primary-default text-white'}`}
      >
        {blogAmount || 0}
      </div>
    </div>
  );
};

export default TagFilterItem;
