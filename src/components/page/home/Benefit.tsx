import React from 'react';

const Benefit = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[120px]">
      <h1 className="h1-bold">
        <span className="text-secondary-label">LỢI ÍCH</span> KHI LỰA CHỌN CHÚNG TÔI
      </h1>
      <div className="flex min-w-full items-center justify-center px-4xl py-12">
        <div className="flex w-[70%] flex-col">
          <div className="h-[100px] w-full border-[2px] border-b-0 border-l-0 border-t-0 border-dashed border-blue-200"></div>
          <div className="h-[2px] w-full border-[2px] border-l-0 border-r-0 border-t-0 border-dashed border-blue-200"></div>
          <div className="h-[100px] w-full border-[2px] border-b-0 border-r-0 border-t-0 border-dashed border-blue-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
