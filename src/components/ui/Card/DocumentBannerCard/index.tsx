'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../Button/Button';
import DocumnentBannerImage from '@/assets/document-banner-img.png';
import '@/styles/scss/_helper.scss';
import paths from '@/utils/paths';

const DocumentBannerCard = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="document-banner-border-gradient overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex w-full flex-col items-center justify-between gap-4xl overflow-hidden rounded-m bg-blue-10 p-3xl laptop:flex-row laptop:p-4xl">
        <motion.div
          className="flex w-full tablet:basis-1/2 laptop:basis-[60%] desktop:basis-[50%]"
          variants={textContainerVariants} // Parent controls sequential animation
        >
          <motion.div className="flex flex-col items-start gap-l tablet:gap-2xl laptop:w-[100%] laptop:gap-3xl">
            <motion.h4
              className="headline-bold tablet:h4-bold laptop:w-[85%] laptop:h3-bold"
              variants={textVariants} // Title animates first
            >
              Bạn cần <span className="text-secondary-default">tìm hiểu thêm</span> về gian hàng trên Amazon?
            </motion.h4>
            <motion.p
              className="subtitle-regular laptop:body-regular"
              variants={textVariants} // Description animates second
            >
              Khám phá cơ hội kinh doanh toàn cầu với Amazon - nền tảng thương mại điện tử hàng đầu thế giới. Tìm hiểu
              cách xây dựng thương hiệu, tối ưu sản phẩm và tiếp cận hàng triệu khách hàng tiềm năng.
            </motion.p>
            <motion.div variants={textVariants}>
              <Button
                color="primary"
                href={paths.DOCUMENT}
                variant="contained"
                classCustom="tablet:btn__medium btn__small w-full tablet:w-fit"
              >
                Truy cập tài liệu miễn phí
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="h-auto w-full tablet:w-2/3 laptop:basis-[40%] desktop:basis-[50%]"
          variants={imageVariants}
        >
          <Image
            src={DocumnentBannerImage}
            width={0}
            height={0}
            sizes="100vw"
            alt="document-banner"
            className="h-full w-full object-contain object-center"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DocumentBannerCard;
