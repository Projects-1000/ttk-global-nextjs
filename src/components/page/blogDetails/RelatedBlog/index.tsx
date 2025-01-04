import BlogCard from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { blogList } from '@/utils/mockDB';

const RelatedBlog = () => {
  return (
    <SectionCard title={SectionTitle}>
      <div className="container grid grid-cols-2 grid-rows-2 gap-x-2xl gap-y-xl tablet:gap-x-3xl tablet:gap-y-2xl laptop:grid-cols-3 laptop:gap-x-4xl laptop:gap-y-3xl">
        {blogList.map((blog) => {
          return (
            <div className="col-span-1 row-span-1">
              <BlogCard {...blog} />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p className="uppercase">
    BÀI VIẾT <span className="text-secondary-default"> liên Quan</span>
  </p>
);

export default RelatedBlog;
