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
      className={`block flex-col overflow-hidden border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-primary-default ${classCustom}`}
    >
      <div
        className={`flex w-full cursor-pointer items-center justify-between laptop:p-3xl ${
          isOpenState ? 'bg-primary-subtle' : ''
        } p-xl text-left font-bold text-black duration-300 laptop:bg-transparent ${isOpenState ? 'laptop:pb-2xl' : 'hover:laptop:bg-primary-subtle'}`}
        onClick={toggleDropdown}
      >
        <span className="subtitle-bold laptop:body-bold">{title}</span>
        <ArrowDown className={`${isOpenState ? '-rotate-180' : ''} size-5 laptop:size-6 smooth-transition`} />
      </div>

      <motion.div
        initial={{ opacity: 0, marginTop: 0, height: 0 }}
        animate={{
          height: isOpenState ? 'fit-content' : 0,
          opacity: isOpenState ? 1 : 0
        }}
        exit={{ opacity: 0, marginTop: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden`}
      >
        <p
          className={`p-xl subtitle-regular laptop:px-3xl laptop:py-0 laptop:body-regular ${isOpenState ? 'laptop:pb-3xl' : 'min-h-0'}`}
        >
          {children}
        </p>
      </motion.div>
    </div>
  );
};

export default Dropdown;
