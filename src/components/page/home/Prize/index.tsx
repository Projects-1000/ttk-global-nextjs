'use client';
import SectionCard from '@/components/ui/Card/SectionCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  containerVariants,
  descriptionVariants,
  imagesContainerVariants,
  imageVariants,
  textVariants,
  titleVariants
} from './PrizeAnimationVariants';

const prize = {
  id: 0,
  title: '',
  description: '',
  image: ['/assets/demo/prize-1.png', '/assets/demo/prize-2.png']
};

const Prize = () => {
  return (
    <SectionCard title={SectionTitle}>
      <motion.div
        className="flex container flex-col items-start gap-2xl tablet:items-center tablet:gap-2xl laptop:gap-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-start gap-l tablet:items-center tablet:gap-xl laptop:gap-2xl"
          variants={textVariants}
        >
          <motion.h3 className="text-black headline-bold laptop:h3-bold" variants={titleVariants}>
            Giải tiên phong khỏi nghiệp xanh - Tuổi Trẻ Startup Award 2024
          </motion.h3>
          <motion.p
            className="text-start text-black subtitle-regular tablet:text-center tablet:body-regular"
            variants={descriptionVariants}
          >
            {`TTK Global Ventures tự hào được vinh danh là 1 trong 10 doanh nghiệp xuất sắc nhất tại Giải thưởng "Tuổi Trẻ
            Start-up Award 2024" do báo Tuổi Trẻ tổ chức vào tháng 10/2024, ghi nhận những nỗ lực của chúng tôi trong
            việc kiến tạo nên một hệ sinh thái TMĐT xuyên biên giới bền vững, giúp doanh nghiệp Việt vươn tầm quốc tế.`}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-start justify-between gap-l overflow-hidden rounded-s tablet:flex-row tablet:gap-2xl laptop:gap-3xl"
          variants={imagesContainerVariants}
        >
          {prize.image.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              custom={index}
              className="h-auto w-full object-contain object-center"
            >
              <Image
                alt={prize.title}
                src={image}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full object-contain object-center"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p>
    <span className="text-secondary-label"> GIẢI THƯỞNG</span>
    <br className="tablet:hidden" /> NỔI BẬT
  </p>
);

export default Prize;
