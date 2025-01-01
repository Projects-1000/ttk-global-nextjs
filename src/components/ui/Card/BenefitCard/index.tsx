import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  image: string;
  isReverse?: boolean;
}

const BenefitCard = ({ title, description, image, isReverse = false }: BenefitCardProps) => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <div
        className={`flex h-full mobile:flex-col laptop:flex-row ${isReverse ? 'laptop:flex-row-reverse' : 'laptop:flex-row'} w-full items-center justify-between gap-l tablet:gap-xl laptop:gap-2xl desktop:gap-3xl`}
      >
        <div className="flex flex-1 basis-1/2 flex-col items-start gap-l tablet:gap-xl laptop:gap-2xl">
          <p className="text-primary-label headline-bold tablet:h3-bold laptop:h2-bold">{title}</p>
          <p className="text-black subtitle-regular laptop:body-regular">{description}</p>
        </div>
        <div className="w-full basis-1/2">
          <Image
            alt={title}
            src={image}
            title={title}
            width="0"
            height="0"
            sizes="100vw"
            className="mobile-max-tablet:max-h-[176px] h-full w-full object-contain object-center tablet:max-laptop:max-h-[230px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
