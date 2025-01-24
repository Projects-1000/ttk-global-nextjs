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

// export async function generateStaticParams() {
//   const params: GetBlogsRequest = {
//     sortedDate: true,
//     filterTags: null,
//     limit: 20,
//     page: 1,
//     isHighlight: null,
//     searchTitle: ''
//   };
//   const url = new URL(`http://localhost:5000/api/v1/blog/get-blogs`);
//   (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) =>
//     url.searchParams.append(key, params[key] as string)
//   );
//   const posts = await fetch(url.href, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const res = (await posts.json()) as GetBlogsResponse[];
//   console.log('>>>', res);
//   // if (res.length <= 20) return res.map((post) => ({ slug: post.slug }));
//   // else
//   //   return res?.slice(0, 20).map((post) => ({
//   //     slug: post.slug
//   //   }));
//   return ['1', '2'];
// }

export default BlogDetails;
