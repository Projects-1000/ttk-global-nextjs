import Link from 'next/link';
import Button from '../../Button/Button';
import Image from 'next/image';
import PromoteBannerImage from '@/assets/promate-banner-img.png';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface PromoteBannerCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
const PromoteBannerCard = ({ className, ...props }: PromoteBannerCardProps) => {
  return (
    <aside
      className={`flex w-full h-auto flex-col rounded-s overflow-hidden ${className}`}
      role="complementary"
      aria-label="Promote Banner Card"
      {...props}
    >
      <Link href="" className="">
        <Image
          src={PromoteBannerImage}
          width={0}
          height={0}
          sizes="100vw"
          alt="promote banner"
          className="h-auto w-full"
        />
      </Link>
      <div className="flex flex-col gap-xl bg-primary-default p-l text-white">
        <h4 className='h3-bold'>Kết Nối Thế Giới Kinh Doanh</h4>
        <p className='body-regular'>Với sứ mệnh làm cho thương mại điện tử trở nên dễ dàng.</p>
        <Button size="medium" classCustom='!bg-white text-black'>Liên hệ ngay</Button>
      </div>
    </aside>
  );
};

export default PromoteBannerCard;
