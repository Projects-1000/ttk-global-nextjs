import CustomTag from '@/components/ui/CustomTag';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import '@/styles/scss/_helper.scss';

export interface CaseStudyCardProps {
  projectName: string;
  description: string;
  tags: string[];
  postRevenue: string;
  image?: StaticImageData;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ projectName, description, tags, postRevenue, image }) => {
  return (
    <div className="card-border-gradient h-full min-h-full overflow-hidden">
      <div className="flex h-full min-h-full flex-col items-center justify-between gap-l rounded-xl bg-white/40 p-l backdrop-blur-xl laptop:flex-row laptop:gap-0 laptop:p-4xl">
        <div className="flex w-full flex-col items-start gap-1 laptop:w-1/3 laptop:gap-3xl">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <CustomTag key={index} tagName={tag} type="outline" />
            ))}
          </div>
          <h2 className="text-primary-label h4-bold laptop:h2-bold">{projectName}</h2>
          <p className="subtitle-regular laptop:body-regular">{description}</p>

          <p className="text-primary-label body-bold laptop:h4-bold">{postRevenue}</p>
        </div>

        <div className="flex h-auto w-full flex-1 items-center justify-center laptop:h-[340px] laptop:w-1/3">
          {image ? (
            // <img src={image} alt="casestudyCard-image" className="md:w-1/3 flex h-[340px] w-full" />
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
