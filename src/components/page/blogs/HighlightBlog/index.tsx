import Blog from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { blogList } from '@/utils/mockDB';

export const HighlightBlog = () => {
  const highLightBlog = blogList.filter((blog) => blog.isHighlight).slice(0, 4);
  return (
    <SectionCard title={SectionTitle}>
      <div className="container grid grid-flow-row auto-rows-min grid-cols-1 gap-y-3xl laptop:grid-flow-col laptop:grid-cols-2 laptop:gap-x-16 laptop:gap-y-xl desktop:gap-x-24">
        {highLightBlog.map((blog, index) => {
          return (
            <div
              key={blog.id}
              className={`${index === 0 ? `col-span-1 laptop:row-span-3` : `col-span-1 laptop:row-auto`}`}
            >
              <Blog
                title={blog.title}
                description={blog.description}
                publishDate={blog.publishDate}
                coverImage={blog.coverImage}
                direction={index === 0 ? 'column' : 'row'}
                isShowContentMobile={index === 0}
                author={blog.author}
                tags={blog.tags}
                slug={blog.slug}
              />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

const SectionTitle = (
  <>
    BÀI VIẾT <span className="text-secondary-default">NỔI BẬT</span>
  </>
);
