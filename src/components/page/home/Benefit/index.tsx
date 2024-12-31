'use client';
import BenefitCard from '@/components/ui/Card/BenefitCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import RoadmapLine from '@/components/ui/RoadmapLine';
import ScrollTriggered from '@/components/ui/ScrollTriggered';

const Benefit = () => {
  const benefits = [
    {
      id: 0,
      title: 'Không cần mặt bằng',
      description:
        'Dự án vận hành hoàn toàn trực tuyến trên nền tảng Amazon, giúp bạn tiết kiệm chi phí và linh hoạt kinh doanh ở bất kỳ đâu.',
      image: '/assets/demo/benefit-no-field.png'
    },
    {
      id: 1,
      title: 'Không nhân sự',
      description:
        'TTK GV đảm nhận toàn bộ quy trình vận hành với đội ngũ chuyên gia có 10+ năm kinh nghiệm trong lĩnh vực TMĐT Quốc tế.',
      image: '/assets/demo/benefit-no-employee.png'
    },
    {
      id: 2,
      title: 'Doanh thu ổn định',
      description:
        'Áp dụng phương pháp vận hành đã được chứng minh về hiệu quả qua hơn 200+ dự án (doanh số trung bình hằng tháng ~ 50.000 USD).',
      image: '/assets/demo/benefit-stable-revenue.png'
    }
  ];
  return (
    <SectionCard title={SectionTitle}>
      <div className="container flex h-full w-full flex-col items-center laptop:py-[60px]">
        {benefits.map(({ id, title, image, description }, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div key={id} className="flex flex-col items-center">
              <ScrollTriggered index={index}>
                <BenefitCard key={id} title={title} description={description} image={image} isReverse={isReverse} />
              </ScrollTriggered>
              {index !== benefits.length - 1 && <RoadmapLine isReverse={isReverse} />}
            </div>
          );
        })}
      </div>
      {/* <ScrollTriggered /> */}
    </SectionCard>
  );
};

const SectionTitle = (
  <p>
    <span className="text-secondary-label">LỢI ÍCH</span> KHI LỰA CHỌN CHÚNG TÔI
  </p>
);

export default Benefit;
