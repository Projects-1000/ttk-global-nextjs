import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/page/blogs/BlogList';
import DocumentSection from '@/components/page/blogs/Document';
import { HighlightBlog } from '@/components/page/blogs/HighlightBlog';
import { TFunction } from '@/i18n/types';
import { LocaleRouteParams } from '@/types/routeParams';
import { getTranslations } from 'next-intl/server';

const Blogs = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <PageHeader title="BLOG" />
      <HighlightBlog />
      <DocumentSection />
      <BlogList />
    </div>
  );
};
export async function generateMetadata({ params }: LocaleRouteParams) {
  const { locale } = await params;
  const t = (await getTranslations({ locale })) as TFunction;
  return {
    title: t('BlogsPage.title'),
    description: t('BlogsPage.description')
  };
}
export default Blogs;
