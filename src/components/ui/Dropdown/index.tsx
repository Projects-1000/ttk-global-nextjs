'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { PropsWithChildren, ReactNode, useState } from 'react';

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
      className={`flex cursor-pointer flex-col overflow-hidden border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-primary-default laptop:py-3xl ${classCustom}`}
    >
      <div
        className={`flex w-full items-center justify-between laptop:p-3xl laptop:py-0 ${
          isOpenState ? 'bg-primary-subtle' : ''
        } p-xl text-left font-bold text-black duration-300 laptop:bg-transparent`}
        onClick={toggleDropdown}
      >
        <span className="subtitle-bold laptop:body-bold">{title}</span>
        <span>{isOpenState ? <ArrowUp /> : <ArrowDown />}</span>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={{ height: isOpenState ? 'auto' : 0, opacity: isOpenState ? 1 : 0, marginTop: isOpenState ? 24 : 0 }}
        exit={{ height: 0, opacity: 0, marginTop: 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden`}
      >
        <p className="p-xl subtitle-regular laptop:px-3xl laptop:py-0 laptop:body-regular">{children}</p>
      </motion.div>
    </div>
  );
};

export default Dropdown;
