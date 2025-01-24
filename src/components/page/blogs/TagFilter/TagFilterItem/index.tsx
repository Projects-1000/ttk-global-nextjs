import { TagModelProps } from '@/types/model.type';
import { DetailedHTMLProps, HTMLAttributes, MouseEvent, useContext, useEffect, useState } from 'react';
import { BlogListContext } from '../../BlogList';
import { TagFilterProps } from '..';

interface TagFilterItemProps extends TagModelProps, TagFilterProps {}

const TagFilterItem = ({ tag, blogAmount, isMobile = false }: TagFilterItemProps) => {
  const { setSelectedTags, selectedTags, defaultTags, allTagId, setQueryParam } = useContext(BlogListContext);
  const [isActive, setIsActive] = useState<boolean>((selectedTags ?? []).includes(tag));

  useEffect(() => {
    setIsActive((selectedTags ?? ['']).includes(tag));
  }, [selectedTags]);

  const handleTagClick = (e: MouseEvent<HTMLDivElement>, currentTag: string) => {
    setSelectedTags((prev) => {
      return getSelectedTags(prev ?? [], currentTag);
    });
    if (!isMobile) {
      const updatedTags = getSelectedTags(selectedTags ?? [], tag);
      setQueryParam((prev) => ({ ...prev, filterTags: updatedTags ?? null, page: 1 }));
    }

    setIsActive(!isActive);
  };

  const getSelectedTags = (prevTags: string[], currentTag: string) => {
    if (currentTag === allTagId) {
      //select all
      return prevTags.includes(allTagId) ? [] : [allTagId];
    } else {
      const currentTags = prevTags.filter((tag) => tag !== allTagId);
      const isTagSelected = currentTags.includes(currentTag);

      if (isTagSelected) {
        //select new tags
        const updatedTags = currentTags.filter((tag) => tag !== currentTag);
        if (updatedTags.length === 0) {
          return [allTagId];
        }
        return updatedTags;
      } else {
        //unselect tags
        return [...currentTags, currentTag];
      }
    }
  };

  // if (!tag) return null;
  return (
    <div
      onClick={(e) => handleTagClick(e, tag)}
      className={`${isActive ? 'bg-primary-default laptop:hover:bg-primary-darker' : 'bg-white laptop:hover:bg-primary-subtle'} smooth-transition group flex w-full cursor-pointer flex-row items-center justify-between overflow-hidden rounded-xs px-m py-xs`}
    >
      <p className={`${isActive ? 'text-greyscale-negative' : 'text-black'} body-bold`}>{tag === allTagId ? "All" :tag}</p>
      <div
        className={`flex items-center rounded-full px-xs py-3xs pt-[3px] leading-[12px] footnote-bold ${isActive ? 'bg-white text-black' : 'bg-primary-default text-white'}`}
      >
        {blogAmount || 0}
      </div>
    </div>
  );
};

export default TagFilterItem;
