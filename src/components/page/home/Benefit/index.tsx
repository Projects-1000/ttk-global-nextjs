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
      <div className="flex h-full w-full flex-col items-center py-[60px]">
        {benefits.map(({ id, title, image, description }, index) => {
          const isReverse = index % 2 !== 0;
          return <BenefitCard key={id} title={title} description={description} image={image} isReverse={isReverse} />;
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p>
    <span className="text-secondary-label">LỢI ÍCH</span> KHI LỰA CHỌN CHÚNG TÔI
  </p>
);

export default Benefit;
