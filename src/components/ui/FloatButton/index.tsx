'use client';
import { Facebook, Instagram } from '@mui/icons-material';
import { ArrowUp, Phone } from 'lucide-react';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ZaloIcon from '@/assets/logo/zalo';
import Link from 'next/link';
import FaceBookIcon from '@/assets/logo/facebook';
const FloatButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Show/hide based on scroll position and direction
    setShow(prevScrollPos > currentScrollPos || currentScrollPos < 100);
    setIsVisible(currentScrollPos > 100);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]); // Add prevScrollPos as dependency

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible && show ? 1 : 0,
        x: isVisible && show ? 0 : 20,
        y: show ? 0 : 20
      }}
      transition={{ duration: 0.2 }}
      className="fixed -right-4 bottom-4 z-10 laptop:bottom-8 laptop:right-0"
    >
      <div className="flex flex-col items-center gap-s laptop:gap-m">
        <div className="flex flex-col items-center gap-s laptop:gap-m">
          <Button
            color="secondary"
            classCustom="rotate-90 subtitle-bold laptop:body-bold btn__small laptop:btn__medium"
            text="Liên hệ"
            href="/contact"
            isPill
          />
          <div className="mt-2xl h-[12px] w-[4px] rounded-full bg-primary-default laptop:mt-3xl"></div>
          <Button
            onClick={scrollToTop}
            classCustom="rounded-full laptop:!p-s !p-xs btn__small laptop:btn__medium"
            isPill
            color="secondary"
            href="tel:0559075545"
            icon={<Phone />}
            iconPosition="only"
          />
          <Link href="https://www.facebook.com/ttkglobalventuresllc/" target="_blank">
            <FaceBookIcon />
          </Link>
          <Link href="https://zalo.me/0559075545" target="_blank">
            <ZaloIcon />
          </Link>
        </div>
        <div className="">
          <Button
            onClick={scrollToTop}
            classCustom="rounded-full laptop:!p-s !p-xs btn__small laptop:btn__medium"
            isPill
            icon={<ArrowUp />}
            iconPosition="only"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FloatButton;
