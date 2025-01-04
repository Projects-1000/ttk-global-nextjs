import BlogDetailsHeader from '@/components/page/blogDetails/BlogDetailsHeader';
import RelatedBlog from '@/components/page/blogDetails/RelatedBlog';
import SectionCard from '@/components/ui/Card/SectionCard';

const BlogDetails = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <BlogDetailsHeader />
      <RelatedBlog />
    </div>
  );
};

export default BlogDetails;
