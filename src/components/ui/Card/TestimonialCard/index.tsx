import { Avatar } from '@mui/material';
import React from 'react';

interface TestimonialProps {
  content: string;
  customerName: string;
  customerPosition: string;
  customerImage: string;
}
const TestimonialCard: React.FC<TestimonialProps> = ({ content, customerName, customerPosition, customerImage }) => {
  return (
    <div className="flex w-full flex-col gap-l rounded-s border-[1px] border-solid border-blue-200 p-xl laptop:gap-3xl laptop:p-4xl">
      <p className="body-regular">{content}</p>
      <div className="flex items-center gap-l">
        <Avatar src={customerImage} alt="customerImage" sx={{ width: 70, height: 70 }} />
        <div className="flex flex-col justify-between text-black">
          <p className="body-bold">{customerName}</p>
          <p className="body-regular">{customerPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
