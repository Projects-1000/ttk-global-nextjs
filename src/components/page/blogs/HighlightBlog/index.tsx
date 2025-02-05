'use client';
import Blog from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import { GetBlogsResponse } from '@/types/api.type';
import { motion } from 'framer-motion';

interface HighlightBlogProps {
  highLightBlog: GetBlogsResponse['data'];
}
const HighlightBlog = ({ highLightBlog }: HighlightBlogProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Animates children sequentially
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <SectionCard title={SectionTitle}>
      <motion.div
        className="grid grid-flow-row auto-rows-min grid-cols-1 gap-y-3xl laptop:grid-flow-col laptop:grid-cols-2 laptop:gap-x-16 laptop:gap-y-xl desktop:gap-x-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {highLightBlog.map((blog, index) => {
          return (
            <motion.div
              key={blog.id}
              className={`${index === 0 ? `col-span-1 laptop:row-span-3` : `col-span-1 laptop:row-auto`}`}
              variants={itemVariants}
            >
              <Blog
                title={blog.title}
                description={blog.description}
                isMainBlog
                createdAtIsoFormat={blog.createdAtIsoFormat}
                coverImage={blog.coverImage}
                direction={index === 0 ? 'column' : 'row'}
                isShowContentMobile={index === 0}
                createdBy={blog.createdBy}
                tags={blog.tags}
                slug={blog.slug}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionCard>
  );
};

const SectionTitle = (
  <p className="w-full text-left">
    BÀI VIẾT <span className="text-secondary-default">NỔI BẬT</span>
  </p>
);

export default HighlightBlog;
