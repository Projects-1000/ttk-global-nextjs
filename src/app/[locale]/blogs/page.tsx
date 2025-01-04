import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/page/blogs/BlogList';
import DocumentSection from '@/components/page/blogs/Document';
import { HighlightBlog } from '@/components/page/blogs/HighlightBlog';

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

export default Blogs;
