'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

export interface AddressProps {
  city: string;
  address: string;
  phone: string;
  email: string;
}

const Address: React.FC<{ address: AddressProps }> = ({ address }) => {
  const addressVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="flex flex-col gap-s laptop:gap-m"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={addressVariants}
    >
      <motion.span variants={itemVariants} className="body-bold laptop:headline-bold">
        {address.city}
      </motion.span>
      <motion.div variants={itemVariants} className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
        <MapPin />
        <span>{address.address}</span>
      </motion.div>
      <motion.div variants={itemVariants} className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
        <Phone />
        <span>{address.phone}</span>
      </motion.div>
      <motion.div variants={itemVariants} className="flex gap-m subtitle-regular laptop:gap-l laptop:body-regular">
        <Mail />
        <span>{address.email}</span>
      </motion.div>
    </motion.div>
  );
};

export default Address;
