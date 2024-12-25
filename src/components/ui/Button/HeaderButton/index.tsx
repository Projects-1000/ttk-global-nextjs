'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface HeaderButtonProps {
  title: string;
  link: string;
}

export const HeaderButton = ({ title, link }: HeaderButtonProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === link;
  return (
    <Link
      href={link}
      className={`${isActive ? 'border-b-2 border-primary-default text-primary-label' : ''} body-semibold h-full content-center bg-transparent px-m text-black no-underline hover:bg-[#C7C8D1]/15`}
      style={{ borderBottomStyle: isActive ? 'solid' : 'none' }}
    >
      {title}
    </Link>
  );
};
