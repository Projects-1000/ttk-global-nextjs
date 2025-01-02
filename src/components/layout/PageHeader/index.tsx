import pageHeadingBG from '@/assets/page-heading-bg.png';
import React, { HTMLAttributes } from 'react';
import Breadcrumbs from '../../ui/Breadcrumb';
import './index.scss';
interface PageHeaderProps {
  title: string;
  wrapperClass?: HTMLAttributes<HTMLDivElement>['className'];
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, wrapperClass, ...props }) => {
  return (
    <section
      className={`container page-header-bg flex h-[200px] w-full flex-col items-center justify-center gap-y-l laptop:h-[360px] ${wrapperClass}`}
      style={{
        backgroundImage: `url(${pageHeadingBG.src})`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        position: 'relative'
      }}
      {...props}
    >
      <h1 className="uppercase text-greyscale-negative h3-bold laptop:h1-bold">{title}</h1>
      <Breadcrumbs text-greyscale-negative />
    </section>
  );
};

export default PageHeader;
