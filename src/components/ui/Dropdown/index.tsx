'use client';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { PropsWithChildren, ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  isOpen?: boolean;
  title: string | ReactNode;
  classCustom?: string;
}

const Dropdown: React.FC<PropsWithChildren<DropdownProps>> = ({ children, isOpen, title, classCustom }) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(!!isOpen);
  const toggleDropdown = () => setIsOpenState(!isOpenState);

  return (
    <div
      className={`flex cursor-pointer flex-col border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-primary-default laptop:py-3xl ${classCustom}`}
    >
      <div
        className={`flex w-full items-center justify-between laptop:p-3xl laptop:py-0 ${isOpenState && 'bg-primary-subtle'} p-xl text-left font-bold text-black duration-300 laptop:bg-transparent`}
        onClick={toggleDropdown}
      >
        <span className="subtitle-bold laptop:body-bold">{title}</span>
        <span>{isOpenState ? <ArrowUp /> : <ArrowDown />}</span>
      </div>
      <AnimatePresence>
        {isOpenState && (
          <motion.div
            className="p-xl subtitle-regular laptop:mt-2xl laptop:p-3xl laptop:py-0 laptop:body-regular"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, padding: 0 }}
            transition={{ duration: 0.2, type: 'spring' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
