import CustomTag from '@/components/ui/CustomTag';
import Image from 'next/image';
import React from 'react';

export interface CaseStudyCardProps {
  projectName: string;
  description: string;
  tags: string[];
  postRevenue: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ projectName, description, tags, postRevenue, image }) => {
  return (
    <div className="border-card flex items-center space-x-4 rounded-xl border-solid bg-white/40 backdrop-blur-xl mobile:flex-col mobile:p-l tablet:flex-row tablet:p-4xl">
      <div className="flex flex-col gap-3xl laptop:w-1/3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <CustomTag key={index} tagName={tag} type="outline" />
          ))}
        </div>
        <h2 className="text-primary-label h4-bold laptop:h2-bold">{projectName}</h2>
        <p className="subtitle-regular laptop:body-regular">{description}</p>

        <p className="text-primary-label body-bold laptop:h4-bold">{postRevenue}</p>
      </div>

      <div className="flex flex-1 items-center justify-center laptop:h-[340px] laptop:w-1/3">
        {image ? (
          // <img src={image} alt="casestudyCard-image" className="md:w-1/3 flex h-[340px] w-full" />
          <Image src={image} alt="casestudyCard-image" className="flex w-full" width={500} height={340} />
        ) : (
          <div className="rounded-lg flex w-full items-center justify-center laptop:h-[340px] laptop:w-1/3">
            <span className="text-gray-400">Image/Placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
