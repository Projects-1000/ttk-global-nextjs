'use client';
import SectionCard from '@/components/ui/Card/SectionCard';
import './index.scss';
import NumberCounter from '@/components/ui/NumberCounter';
import { motion } from 'framer-motion';
import { cardVariants, containerVariants, textVariants } from './AboutAnimationVariants';

const INFO_CARDS = [
  {
    titleValue: 200,
    afterTitle: '+',
    subtitle: 'Đối tác thành công'
  },
  {
    titleValue: 50000,
    subtitle: 'Doanh thu trung bình của mỗi gian hàng tính theo USD'
  },
  {
    titleValue: 24,
    afterTitle: '/7',
    subtitle: 'Hệ thống vận hành không ngừng trên Amazon'
  }
];

const About = () => {
  const description =
    'Nhà phát triển Thương mại điện tử Quốc tế hàng đầu tại Việt Nam, cung cấp hệ sinh thái dịch vụ đa dạng và toàn diện, hỗ trợ doanh nghiệp Việt bán hàng xuyên biên giới.';

  return (
    <SectionCard title={SectionTitle} description={description}>
      <motion.div
        className="grid grid-cols-1 gap-y-l tablet:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants} // Apply container variants
      >
        {INFO_CARDS.map((card, i) => {
          return (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants} // Apply individual card variants
              className="info-card-wrapper"
            >
              <InfoCard
                title={
                  <span>
                    <NumberCounter value={card.titleValue} direction="up" />
                    <motion.span variants={textVariants} className="w-fit">
                      {card.afterTitle}
                    </motion.span>
                  </span>
                }
                subtitle={card.subtitle}
                isLast={i === INFO_CARDS.length - 1}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p className="">
    VỀ <span className="text-secondary-label">TTK GLOBAL VENTURES</span>
  </p>
);

interface InfoCardProps {
  title: React.ReactNode; // Accept title as a ReactNode
  subtitle: string;
  isLast?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, isLast }) => {
  return (
    <div
      className={`flex items-start justify-center gap-l rounded-[12px] bg-blue-50 p-xl tablet:rounded-[0] tablet:bg-transparent tablet:p-4xl ${!isLast ? 'border-b-0 border-l-0 border-t-0 border-none border-blue-200 pr-0 tablet:border-r-[1px] tablet:border-solid tablet:pr-4xl' : ''}`}
    >
      <div className={`flex w-full flex-col items-center justify-center gap-l text-center ${!isLast ? '' : ''}`}>
        <p className="text-blue-500 h3-bold tablet:h2-bold laptop:h1-bold">{title}</p>{' '}
        <span className="subtitle-bold laptop:headline-bold">{subtitle}</span>
      </div>
    </div>
  );
};

export default About;
