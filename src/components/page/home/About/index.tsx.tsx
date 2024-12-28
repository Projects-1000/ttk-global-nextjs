// import { YellowVector } from '@/assets/yellow-vector';
import './index.scss';
import SectionCard from '@/components/ui/Card/SectionCard';
const INFO_CARDS = [
  {
    title: '200+',
    subtitle: 'Đối tác thành công'
  },
  {
    title: '50,000',
    subtitle: 'Doanh thu trung bình của mỗi gian hàng tính theo USD'
  },
  {
    title: '24/7',
    subtitle: 'Hệ thống vận hành không ngừng trên Amazon'
  }
];
const About = () => {
  const description =
    'Nhà phát triển Thương mại điện tử Quốc tế hàng đầu tại Việt Nam, cung cấp hệ sinh thái dịch vụ đa dạng và toàn diện, hỗ trợ doanh nghiệp Việt bán hàng xuyên biên giới.';
  return (
    <SectionCard title={SectionTitle} description={description}>
      {/* <div className="absolute right-[-50%] top-[10px] z-0 overflow-hidden">
        <YellowVector />
      </div> */}
      <div className="grid mobile:grid-cols-1 mobile:gap-y-l tablet:grid-cols-3">
        {INFO_CARDS.map((card, i) => {
          return <InfoCard key={i} title={card.title} subtitle={card.subtitle} isLast={i === INFO_CARDS.length - 1} />;
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p className="">
    VỀ <span className="text-secondary-label">TTK GLOBAL VENTURES</span>
  </p>
);

interface InfoCardProps {
  title: string;
  subtitle: string;
  isLast?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, isLast }) => {
  return (
    <div
      className={`flex items-start justify-center mobile:gap-l mobile:rounded-[12px] mobile:bg-blue-50 mobile:p-xl tablet:rounded-[0] tablet:bg-transparent tablet:p-4xl ${!isLast ? 'border-b-0 border-l-0 border-t-0 border-blue-200 pr-0 mobile:border-none tablet:border-r-[1px] tablet:border-solid tablet:pr-4xl' : ''}`}
    >
      <div className={`flex w-full flex-col items-center justify-center gap-l text-center ${!isLast ? '' : ''}`}>
        <p className="text-blue-500 mobile:h3-bold laptop:h1-bold">{title}</p>
        <span className="mobile:subtitle-bold laptop:headline-bold">{subtitle}</span>
      </div>
    </div>
  );
};

export default About;
