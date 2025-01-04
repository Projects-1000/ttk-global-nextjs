import Button from '@/components/ui/Button/Button';
import React from 'react';
import triangleVector from '@/assets/triangle-vector.png';
import smallTriangleVector from '@/assets/small-triangle-vector.png';
import Image from 'next/image';
const DocumentSection = () => {
  const description =
    'Khám phá cơ hội kinh doanh toàn cầu với Amazon - nền tảng thương mại điện tử hàng đầu thế giới. Tìm hiểu cách xây dựng thương hiệu, tối ưu sản phẩm và tiếp cận hàng triệu khách hàng tiềm năng.';
  return (
    <section className="container w-full max-w-[1440px]">
      <div className="mx-auto mt-xl tablet:mt-2xl laptop:mt-3xl laptop:px-4xl">
        <div className="flex flex-col justify-between gap-y-3xl rounded-m border-[1px] border-solid border-blue-200 p-3xl laptop:flex-row laptop:gap-4xl laptop:p-4xl">
          <div className="flex max-w-[640px] flex-col gap-l laptop:gap-3xl">
            <DocumentTitle />
            <span className="subtitle-regular laptop:body-regular">{description}</span>
            <Button classCustom="w-fit" size="medium" text="Truy cập tài liệu miễn phí" />
          </div>
          <div className="flex w-full flex-none items-center justify-center laptop:w-[252px]">
            <div className="relative w-2/3 tablet:w-1/3 laptop:w-full">
              <Image
                src={triangleVector}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
              <Image
                src={smallTriangleVector}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="absolute bottom-[-5%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const DocumentTitle = () => (
  <span className="h3-bold laptop:h1-bold">
    Bạn cần <span className="text-secondary-label">tìm hiểu thêm </span>về gian hàng trên Amazon?
  </span>
);
export default DocumentSection;
