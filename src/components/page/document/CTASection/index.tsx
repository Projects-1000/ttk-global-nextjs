'use client';
import GridBackground from '@/assets/GridBackground';
import Button from '@/components/ui/Button/Button';
import SectionCard from '@/components/ui/Card/SectionCard';

const CTASection = () => {
  const description = (
    <span className="text-center">
      Chúng tôi luôn tìm kiếm đối tác chia sẻ tầm nhìn phát triển bền vững. Với kinh nghiệm và nguồn lực sẵn có, chúng
      tôi cam kết mang lại giá trị cho mọi dự án hợp tác.
    </span>
  );
  return (
    <SectionCard title={<CTASectionTitle />} description={description}>
      <div className="flex flex-col gap-2xl laptop:gap-3xl">
        <div className="flex w-full justify-center">
          <Button size="medium" text="Cộng tác ngay" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/3 z-[-1] translate-x-[-50%] translate-y-[-40%] tablet:translate-y-[-30%] laptop:translate-y-[-28%]">
        <GridBackground className="scale-[3] tablet:scale-[2] laptop:scale-[1.2]" />
      </div>
    </SectionCard>
  );
};
const CTASectionTitle = () => (
  <span className="inline-block w-full text-center uppercase">
    Bạn muốn
    <span className="text-secondary-label"> hợp tác </span>
    với chúng tôi?
  </span>
);

export default CTASection;
