import React from 'react';
type CustomTagProps = {
  tagName: string;
  type: 'active' | 'outline';
};
const CustomTag: React.FC<CustomTagProps> = ({ tagName, type }) => {
  return (
    <div
      className={`cursor-pointer rounded-full px-3 py-1 uppercase footnote-bold ${type === 'active' ? 'bg-primary-darker text-white' : 'border border-solid border-primary-default bg-primary-subtle text-primary-label'}`}
    >
      {tagName}
    </div>
  );
};

export default CustomTag;
