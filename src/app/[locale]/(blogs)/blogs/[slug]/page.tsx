import BlogDetailsHeader from '@/components/page/blogDetails/BlogDetailsHeader';
import RelatedBlog from '@/components/page/blogDetails/RelatedBlog';
import { LocaleProps } from '@/types/locale.type';
import { BlogModelProps } from '@/types/model.type';

interface FetchBlogDetailProps {
  slug: BlogModelProps['slug'];
  locale: LocaleProps;
}
interface BlogDetailPageProps {
  params: Promise<FetchBlogDetailProps>;
}

const fetchBlogDetail = async ({ slug }: FetchBlogDetailProps) => {
  const blogDetails: BlogModelProps = await fetch(`http://localhost:5000/api/v1/blog/get-blog/${slug}`).then((res) =>
    res.json()
  );
  return blogDetails;
};

const BlogDetails = async ({ params }: BlogDetailPageProps) => {
  const { slug, locale } = await params;
  const details = await fetchBlogDetail({ locale, slug });
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <BlogDetailsHeader {...details} />
      <RelatedBlog tags={details.tags} slug={slug} />
    </div>
  );
};

export default BlogDetails;
