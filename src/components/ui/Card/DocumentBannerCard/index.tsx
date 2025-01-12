import Image from 'next/image';
import Button from '../../Button/Button';
import DocumnentBannerImage from '@/assets/document-banner-img.png';
import '@/styles/scss/_helper.scss';
import paths from '@/utils/paths';

const DocumentBannerCard = () => {
  return (
    <div className="document-banner-border-gradient overflow-hidden">
      <div className="flex w-full flex-col items-center justify-between gap-4xl overflow-hidden rounded-m bg-blue-10 p-3xl laptop:flex-row laptop:p-4xl">
        <div className="flex w-full tablet:basis-1/2 laptop:basis-[60%] desktop:basis-[50%]">
          <div className="flex flex-col items-start gap-l tablet:gap-2xl laptop:w-[100%] laptop:gap-3xl">
            <h4 className="headline-bold tablet:h4-bold laptop:w-[85%] laptop:h3-bold">
              Bạn cần <span className="text-secondary-default">tìm hiểu thêm</span> về gian hàng trên Amazon?
            </h4>
            <p className="subtitle-regular laptop:body-regular">
              Khám phá cơ hội kinh doanh toàn cầu với Amazon - nền tảng thương mại điện tử hàng đầu thế giới. Tìm hiểu
              cách xây dựng thương hiệu, tối ưu sản phẩm và tiếp cận hàng triệu khách hàng tiềm năng.
            </p>
            <Button
              color="primary"
              variant="contained"
              href={paths.DOCUMENT}
              classCustom="tablet:btn__medium btn__small w-full tablet:w-fit"
            >
              Truy cập tài liệu miễn phí
            </Button>
          </div>
        </div>
        <div className="h-auto w-full tablet:w-2/3 laptop:basis-[40%] desktop:basis-[50%]">
          <Image
            src={DocumnentBannerImage}
            width={0}
            height={0}
            sizes="100vw"
            alt="document-banner"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentBannerCard;
