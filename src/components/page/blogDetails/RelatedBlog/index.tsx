import BlogCard from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { GetBlogsRequest, GetBlogsResponse } from '@/types/api.type';
import { BlogModelProps } from '@/types/model.type';

interface RelatedBlogProps extends Pick<BlogModelProps, 'tags' | 'slug'> {}
const RelatedBlog = async ({ tags, slug }: RelatedBlogProps) => {
  const blogList = await fetchRelatedBlogs(
    {
      isHighlight: null,
      searchTitle: '',
      sortedDate: true,
      filterTags: tags ? tags : null,
      limit: 6,
      page: 1
    },
    slug
  );

  return (
    <SectionCard title={SectionTitle}>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-2xl gap-y-xl tablet:gap-x-3xl tablet:gap-y-2xl laptop:grid-cols-3 laptop:gap-x-4xl laptop:gap-y-3xl">
        {blogList.map((blog) => {
          return (
            <div key={blog.slug} className="col-span-1 row-span-1">
              <BlogCard {...blog} isMainBlog={false} isCustomLink />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export async function fetchRelatedBlogs(params: GetBlogsRequest, slug: BlogModelProps['slug']) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-blogs`);
  (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) => {
    const value = params[key];
    if (Array.isArray(value)) {
      if (!value?.includes('')) url.searchParams.append(key, JSON.stringify(value));
      else url.searchParams.append(key, String(null));
    } else {
      url.searchParams.append(key, String(value));
    }
  });
  const res = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const blogs = (await res.json()) as GetBlogsResponse;
  return blogs.data.filter((blog) => blog.slug !== slug);
}

const SectionTitle = (
  <p className="uppercase">
    BÀI VIẾT <span className="text-secondary-default"> liên Quan</span>
  </p>
);

export default RelatedBlog;
