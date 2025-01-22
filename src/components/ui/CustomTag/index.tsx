import React, { HTMLAttributes } from 'react';
interface CustomTagProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  tagName: string;
  type: 'active' | 'outline';
}
const CustomTag: React.FC<CustomTagProps> = ({ tagName, type, className }) => {
  return (
    <div
      className={`rounded-full px-3 py-1 uppercase footnote-bold ${type === 'active' ? 'bg-primary-darker text-white' : 'border border-solid border-primary-default bg-primary-subtle text-primary-label'} ${className}`}
    >
      {tagName}
    </div>
  );
};

export default CustomTag;
