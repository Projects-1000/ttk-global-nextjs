'use client';
import { breadcrumbsConfig } from '@/utils/breadcrumb';
import { NavigateNext } from '@mui/icons-material';
import { Link, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const Breadcrumbs = () => {
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

    return [{ label: breadcrumbsConfig['/'] || 'Home', path: '/' }, ...crumbs];
  }, [currentPath]);
  console.log(breadcrumbs);
  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="medium" className="text-greyscale-negative" />}
    >
      {breadcrumbs.map((breadcrumb, index) =>
        breadcrumb.path ? (
          <Link
            key={index}
            href={breadcrumb.path}
            className="text-greyscale-negative subtitle-regular laptop:headline-regular"
            underline="hover"
          >
            {breadcrumb.label}
          </Link>
        ) : (
          <p key={index} className="text-greyscale-negative subtitle-bold laptop:headline-bold">
            {breadcrumb.label}
          </p>
        )
      )}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
