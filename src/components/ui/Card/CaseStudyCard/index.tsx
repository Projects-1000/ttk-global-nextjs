import CustomTag from '@/components/ui/CustomTag';
import Image from 'next/image';
import React from 'react';

export interface CaseStudyCardProps {
  projectName: string;
  description: string;
  tags: string[];
  previousRevenue: string;
  postRevenue: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  projectName,
  description,
  tags,
  previousRevenue,
  postRevenue,
  image
}) => {
  return (
    <div className="flex items-center space-x-4 rounded-xl border-solid border-blue-200 bg-white p-4xl">
      <div className="flex w-1/3 flex-col gap-3xl">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <CustomTag key={index} tagName={tag} type="outline" />
          ))}
        </div>
        <h2 className="h2-bold">{projectName}</h2>
        <p className="body-regular">{description}</p>
        <p className="body-regular">
          Doanh thu trước hợp tác: <span>{previousRevenue}</span>
        </p>
        <p className="h4-bold">
          Doanh thu sau hợp tác: <span>{postRevenue}</span>
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        {image ? (
          // <img src={image} alt="casestudyCard-image" className="md:w-1/3 flex h-[340px] w-full" />
          <Image
            src={image}
            alt="casestudyCard-image"
            className="md:w-1/3 flex h-[340px] w-full"
            width={500}
            height={340}
          />
        ) : (
          <div className="md:w-1/3 rounded-lg flex h-[340px] w-full items-center justify-center">
            <span className="text-gray-400">Image/Placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
