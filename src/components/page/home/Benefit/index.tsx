import BenefitCard from '@/components/ui/Card/BenefitCard';
import SectionCard from '@/components/ui/Card/SectionCard';

const Benefit = () => {
  const benefits = [
    {
      id: 0,
      title: 'Không cần mặt bằng',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: '/assets/demo/carousel-so-lieu-2024.png'
    },
    {
      id: 1,
      title: 'Không nhân sự',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: '/assets/demo/carousel-so-lieu-2024.png'
    },
    {
      id: 2,
      title: 'Doanh thu ổn định',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: '/assets/demo/carousel-so-lieu-2024.png'
    }
  ];
  return (
    <SectionCard title={SectionTitle}>
      <div className="flex h-full w-full flex-col items-center laptop:py-[60px]">
        {benefits.map(({ id, title, image, description }, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div key={id} className="flex flex-col items-center">
              <BenefitCard key={id} title={title} description={description} image={image} isReverse={isReverse} />
              {index !== benefits.length - 1 && <RoadmapLine isReverse={isReverse} />}
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

// type : 1=> left to right, 2=> right to left
const RoadmapLine: React.FC<{ isReverse: boolean }> = ({ isReverse }) => {
  return (
    <div className="flex w-[50%] flex-col">
      <div
        className={`relative h-[100px] w-full border-[2px] border-b-0 border-t-0 border-dashed border-primary-lighter ${isReverse ? 'border-l-[2px] border-r-0' : 'border-l-0 border-r-[2px]'}`}
      >
        <div
          className={`absolute -top-2 h-2/3 w-[20px] ${isReverse ? '-left-[10px]' : '-right-[10px]'}`}
          style={{
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
            filter: 'blur(5px)'
          }}
        ></div>
      </div>
      <div className="h-[2px] w-full border-[2px] border-l-0 border-r-0 border-t-0 border-dashed border-primary-lighter"></div>
      <div
        className={`relative h-[100px] w-full border-[2px] border-b-0 border-t-0 border-dashed border-primary-lighter ${!isReverse ? 'border-l-[2px] border-r-0' : 'border-l-0 border-r-[2px]'}`}
      >
        <div
          className={`absolute -bottom-2 h-2/3 w-[20px] ${!isReverse ? '-left-[10px]' : '-right-[10px]'}`}
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
            filter: 'blur(5px)'
          }}
        ></div>
      </div>
    </div>
  );
};

const SectionTitle = (
  <p>
    <span className="text-secondary-label">LỢI ÍCH</span> KHI LỰA CHỌN CHÚNG TÔI
  </p>
);

export default Benefit;
