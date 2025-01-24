import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/page/blogs/BlogList';
import DocumentSection from '@/components/page/blogs/Document';
import HighlightBlog from '@/components/page/blogs/HighlightBlog';
import { TFunction } from '@/i18n/types';
import { GetBlogsRequest, GetBlogsResponse } from '@/types/api.type';
import { LocaleRouteParams } from '@/types/routeParams';
import { getTranslations } from 'next-intl/server';

const fetchMainBlogs = async () => {
  const params: GetBlogsRequest = {
    sortedDate: true,
    filterTags: null,
    limit: 4,
    page: 1,
    isHighlight: true,
    searchTitle: ''
  };
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-blogs`);
  (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) =>
    url.searchParams.append(key, params[key] as string)
  );
  const res = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const mainBlogs = (await res.json()) as GetBlogsResponse;

  return mainBlogs.data;
};

const Blogs = async ({ params }: LocaleRouteParams) => {
  const highLightBlog = await fetchMainBlogs();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <PageHeader title="BLOG" />
      <HighlightBlog highLightBlog={highLightBlog} />
      <DocumentSection />
      <BlogList />
    </div>
  );
};

// export async function generateStaticParams() {
//   const params: GetBlogsRequest = {
//     sortedDate: true,
//     filterTags: null,
//     limit: 20,
//     page: 1,
//     isHighlight: null,
//     searchTitle: ''
//   };
//   const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-blogs`);
//   (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) =>
//     url.searchParams.append(key, params[key] as string)
//   );
//   const res = await fetch(url.href, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const mainBlogs = (await res.json()) as GetBlogsResponse;
//   return mainBlogs.data.map((blog) => blog.slug);
// }

export async function generateMetadata({ params }: LocaleRouteParams) {
  const { locale } = await params;
  const t = (await getTranslations({ locale })) as TFunction;
  return {
    title: t('BlogsPage.title'),
    description: t('BlogsPage.description')
  };
}
export default Blogs;
