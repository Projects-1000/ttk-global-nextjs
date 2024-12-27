import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, HtmlHTMLAttributes } from 'react';

interface LogoCardProps {
  src: string;
  name: string;
  href?: string;
  customClass?: HtmlHTMLAttributes<HTMLAnchorElement>['className'];
  props?: Omit<HTMLAttributes<HTMLAnchorElement>, 'className' | 'href'>;
}
export const LogoCard = ({ src, name, href, customClass, props }: LogoCardProps) => {
  return (
    <Link
      target="_blank"
      title={`${name}`}
      href={href || '#'}
      className={`${customClass} hover:smooth-transition group w-full rounded-s border border-solid border-greyscale-surface-default bg-blue-10 p-xl no-underline hover:border-primary-default`}
      {...props}
    >
      <Image
        alt={name}
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className="smooth-transition h-auto w-full max-w-[120px ] object-contain object-center group-hover:scale-105"
        loading="lazy"
      />
    </Link>
  );
};
