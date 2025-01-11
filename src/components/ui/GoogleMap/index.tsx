'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface GoogleMapProps {
  iframeUrl: string;
  customClassName?: string;
}
const GoogleMap: React.FC<GoogleMapProps> = ({ iframeUrl, customClassName }) => {
  const mapVariants = {
    hidden: { opacity: 0, scaleX: 0.5 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  return (
    <motion.iframe
      className={`min-h-[240px] w-full rounded-m border-none tablet:min-h-[360px] laptop:h-[480px] ${customClassName}`}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={iframeUrl}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={mapVariants}
    ></motion.iframe>
  );
};

export default GoogleMap;
