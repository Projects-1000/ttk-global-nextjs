import React from 'react';
type CustomTagProps = {
  tagName: string;
  type: 'active' | 'outline';
};
const CustomTag: React.FC<CustomTagProps> = ({ tagName, type }) => {
  return (
    <div
      className={`footnote-bold cursor-pointer rounded-full px-3 py-1 ${type === 'active' ? 'bg-primary-darker text-white' : 'border border-primary-default bg-primary-subtle text-primary-label'}`}
    >
      {tagName}
    </div>
  );
};

export default CustomTag;
