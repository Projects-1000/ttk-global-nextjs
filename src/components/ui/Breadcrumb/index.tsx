'use client';
import { breadcrumbsConfig } from '@/utils/breadcrumb';
import { NavigateNext } from '@mui/icons-material';
import { Link, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
type BreadcrumbProps = {
  customEndPoint?: string;
  customColor?: string;
};
const Breadcrumbs: React.FC<BreadcrumbProps> = ({ customEndPoint, customColor = 'text-greyscale-negative' }) => {
  const pathname = usePathname();
  const currentPath = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    pathSegments.shift();
    return `/${pathSegments.join('/')}`;
  }, [pathname]);

  const breadcrumbs = useMemo(() => {
    const segments = currentPath.split('/').filter(Boolean);
    let accumulatedPath = '';
    const crumbs = segments.map((segment, index) => {
      accumulatedPath += `/${segment}`;
      return {
        label: breadcrumbsConfig[accumulatedPath] || segment,
        path: index === segments.length - 1 ? null : accumulatedPath
      };
    });
    if (customEndPoint) {
      crumbs.pop();
      crumbs.push({ label: customEndPoint, path: null });
    }
    return [{ label: breadcrumbsConfig['/'] || 'Home', path: '/' }, ...crumbs];
  }, [currentPath]);

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="medium" className={`${customColor} mx-xs laptop:mx-m`} />}
      className={`${customColor} `}
    >
      {breadcrumbs.map((breadcrumb, index) =>
        breadcrumb.path ? (
          <Link key={index} href={breadcrumb.path} className={`${customColor}`} underline="hover">
            {breadcrumb.label}
          </Link>
        ) : (
          <p key={index} className="subtitle-bold laptop:headline-bold">
            {breadcrumb.label}
          </p>
        )
      )}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
