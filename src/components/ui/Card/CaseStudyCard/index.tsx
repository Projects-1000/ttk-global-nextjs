import CustomTag from '@/components/ui/CustomTag';
import '@/styles/scss/_helper.scss';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export interface CaseStudyCardProps {
  projectName: string;
  description: string | ReactNode;
  tags: string[];
  postRevenue: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ projectName, description, tags, postRevenue, image }) => {
  return (
    <div className="card-border-gradient h-full min-h-full overflow-hidden">
      <div className="flex h-full min-h-full flex-col items-center justify-between gap-l rounded-xl bg-white/40 p-l backdrop-blur-xl laptop:flex-row laptop:gap-0 laptop:p-4xl">
        <div className="flex w-full flex-col items-start gap-l laptop:basis-[45%] laptop:gap-3xl">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <CustomTag key={index} tagName={tag} type="outline" />
            ))}
          </div>
          <h2 className="text-primary-label headline-bold tablet:h4-bold laptop:h3-bold">{projectName}</h2>
          <p className="subtitle-regular laptop:body-regular">{description}</p>

          <div className="text-primary-label body-bold laptop:h4-bold">
            <p>Doanh thu trong năm 2024:</p>
            {postRevenue}
          </div>
        </div>

        <div className="flex h-auto w-full flex-1 items-center justify-center laptop:h-[340px] laptop:basis-[50%]">
          {image ? (
            <Image
              src={image}
              alt="casestudyCard-image"
              className="flex h-fit w-full object-contain"
              width={500}
              height={340}
            />
          ) : (
            <div className="rounded-lg flex w-full items-center justify-center laptop:h-[340px] laptop:w-1/3">
              <span className="text-gray-400">Image/Placeholder</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
