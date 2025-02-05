import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, HtmlHTMLAttributes } from 'react';
import './index.scss';

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
      className={`${customClass} partner-card group w-full`}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center">
        <Image
          alt={name}
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          className="smooth-transition h-[34px] w-full object-contain object-center tablet:h-[40px] laptop:h-[54px] laptop:group-hover:scale-105 desktop:h-[78px]"
          loading="lazy"
        />
      </div>
    </Link>
  );
};
