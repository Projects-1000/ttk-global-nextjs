'use client';
import graphic from '@/assets/howitwork/hero/Graphic.png';
import mobileGraphic from '@/assets/howitwork/hero/mobile-graphic.png';
import combineVector from '@/assets/yellow-blue-vector.png';
import Button from '@/components/ui/Button/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { buttonVariants, containerVariants, videoVariants } from './animation';
import HeroList from './components/HeroList';
import HeroTitle from './components/HeroTitle';

const HowItWorkHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="container flex w-full max-w-[1440px] flex-col gap-4xl py-mobile_section_padding laptop:py-desktop_section_padding laptop:pt-10"
    >
      <HeroTitle />
      <motion.div className="relative flex flex-col gap-y-[60px] laptop:flex-row laptop:gap-x-3xl">
        <div className="absolute bottom-0 left-0 w-full translate-x-[3.5%] translate-y-[16%] scale-110 mobile:max-tablet:hidden">
          <Image src={graphic} alt="" width={0} height={0} sizes="100vw" className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col gap-2xl laptop:gap-3xl">
          <HeroList />
          <div className="flex items-center gap-l">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Button
                text="Đặt lịch meeting"
                classCustom="w-full tablet:w-fit btn__small tablet:btn__medium laptop:btn__large"
              />
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Button
                text="Tính lợi nhuận"
                color="secondary"
                classCustom="w-full tablet:w-fit btn__small tablet:btn__medium laptop:btn__large"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-auto w-full laptop:max-w-[50%] laptop:px-3xl"
        >
          {!isPlaying && (
            // <div>
            //   <CirclePlay
            //     className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 text-white shadow-md backdrop-blur-md"
            //     size={40}
            //     onClick={handlePlayPause}
            //   />
            // </div>
            <Button
              onClick={handlePlayPause}
              iconPosition="only"
              color="primary"
              classCustom="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-1 "
              icon={<Play />}
            />
          )}
          <div className="relative">
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-m bg-black opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              )}
            </AnimatePresence>

            <video
              ref={videoRef}
              className="h-full w-full rounded-m object-contain"
              onClick={handleVideoClick}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            >
              <source src="/assets/howitwork-video/howitwork-video.mp4" type="video/mp4" />
              <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute bottom-0 left-0 -z-10 flex w-full translate-x-[3.5%] translate-y-[15%] rotate-[18deg] scale-[2] opacity-30 mobile:max-tablet:hidden">
            <Image
              src={combineVector}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex w-full translate-x-[3%] scale-[1.65] opacity-30 tablet:hidden">
            <Image
              src={mobileGraphic}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex w-full translate-x-[3%] scale-[2] opacity-30 tablet:hidden">
            <Image
              src={combineVector}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorkHero;
