// import { YellowVector } from '@/assets/yellow-vector';
import './index.scss';
import SectionCard from '@/components/ui/Card/SectionCard';
const INFO_CARDS = [
  {
    title: '200+',
    subtitle: 'Đối tác thành công'
  },
  {
    title: '50.000',
    subtitle: 'Doanh thu trung bình của mỗi gian hàng tính theo USD'
  },
  {
    title: '24/7',
    subtitle: 'Hệ thống vận hành không ngừng trên Amazon'
  }
];
const About = () => {
  const description =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dignissim nibh. Pellentesque habitant morbitristique senectus et netus et malesuada fames ac turpis egestas.';
  return (
    <SectionCard title={SectionTitle} description={description}>
      {/* <div className="absolute right-[-50%] top-[10px] z-0 overflow-hidden">
        <YellowVector />
      </div> */}
      <div className="grid grid-cols-3">
        {INFO_CARDS.map((card, i) => {
          return <InfoCard key={i} title={card.title} subtitle={card.subtitle} isLast={i === INFO_CARDS.length - 1} />;
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p className="h1-bold">
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
    <div className={`flex items-center justify-center p-4xl ${!isLast ? 'pr-0' : ''}`}>
      <div
        className={`flex w-full flex-col items-center justify-center gap-l text-center ${
          !isLast ? 'border-b-0 border-l-0 border-r-[1px] border-t-0 border-solid border-blue-200 pr-4xl' : ''
        }`}
      >
        <p className="text-blue-500 h1-bold">{title}</p>
        <span className="headline-bold">{subtitle}</span>
      </div>
    </div>
  );
};

export default About;
