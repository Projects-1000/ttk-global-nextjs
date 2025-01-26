import { Skeleton } from '@mui/material';
import React from 'react';

const BlogItemSkeleton = () => (
  <div className="flex flex-col gap-l">
    <Skeleton variant="rectangular" height={210} animation="wave" className="rounded-m" />
    <div className="flex flex-col gap-s">
      <Skeleton animation="wave" width={100} height={20} />
      <div>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </div>
      <div className="grid grid-cols-6 gap-s">
        <Skeleton animation="wave" className="col-span-3" height={40} />
        <Skeleton animation="wave" className="col-span-2" height={40} />
        <Skeleton animation="wave" className="col-span-1" height={40} />
      </div>
    </div>
  </div>
);

BlogItemSkeleton.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Responsive blog item skeleton',
  filename: 'BlogItemSkeleton'
};

export default BlogItemSkeleton;
