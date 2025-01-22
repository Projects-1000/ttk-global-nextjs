import BlogDetailsHeader from '@/components/page/blogDetails/BlogDetailsHeader';
import RelatedBlog from '@/components/page/blogDetails/RelatedBlog';
import { LocaleProps } from '@/types/locale.type';
import { BlogModelProps } from '@/types/model.type';
import { LocaleRouteParams } from '@/types/routeParams';
 
interface BlogDetailPageProps extends LocaleRouteParams {}
interface fetchBlogDetailProps {
  slug: BlogModelProps['slug'];
  locale: LocaleProps;
}

const fetchBlogDetail = async ({ slug }: fetchBlogDetailProps) => {
  const blogDetails = await fetch(`http://localhost:5000/api/v1/blog/get-blog/${slug}`).then((res) => res.json());
  console.log('>>>>', blogDetails);
  return blogDetails;
};

const BlogDetails = async ({ params }: LocaleRouteParams) => {
  // const { locale } = await params;
  // const details = await fetchBlogDetail({ locale, slug: '1' });
  // console.log('??', details);
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <BlogDetailsHeader />
      <RelatedBlog />
    </div>
  );
};

export default BlogDetails;
