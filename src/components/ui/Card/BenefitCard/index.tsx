import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  image: string;
  isReverse?: boolean;
}

const BenefitCard = ({ title, description, image, isReverse = false }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex h-full mobile:flex-col laptop:flex-row ${isReverse ? 'laptop:flex-row-reverse' : 'laptop:flex-row'} w-full items-center justify-between gap-l`}
      >
        <div className="flex flex-1 mobile:tablet:items-center basis-2/5 flex-col items-start gap-l tablet:gap-xl laptop:gap-2xl">
          <p className="text-primary-label h4-bold tablet:h3-bold laptop:h2-bold">{title}</p>
          <p className="text-black subtitle-regular laptop:body-regular">{description}</p>
        </div>
        <div className="w-full basis-3/5">
          <Image
            alt={title}
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full object-contain object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
