import Breadcrumbs from '@/components/ui/Breadcrumb';
import SectionCard from '@/components/ui/Card/SectionCard';
import CustomTag from '@/components/ui/CustomTag';
import BlogInfoTag from '@/components/ui/CustomTag/BlogInfoTag';
import { blogList } from '@/utils/mockDB';
import Image from 'next/image';
const BlogDetailsHeader = () => {
  const { title, author, tags, publishDate, coverImage, description, content } = blogList[0];
  return (
    <SectionCard>
      <div className="container flex w-full flex-col items-center justify-start">
        <Breadcrumbs customEndPoint={title} customColor="text-black" />
        <div className="flex w-full flex-col items-center justify-start gap-2xl text-center laptop:gap-3xl">
          <h1 className="text-primary-default headline-bold tablet:body-bold laptop:h1-bold">{title}</h1>
          <div className={`flex flex-wrap gap-s`}>
            {tags?.map((tag) => {
              return <CustomTag key={tag.id} tagName={tag.name} type="outline" />;
            })}
          </div>
          <BlogInfoTag publishDate={publishDate} author={author} className="!w-fit" />
          <div className={`w-full overflow-hidden rounded-m`}>
            <Image
              title={title}
              src={coverImage || ''}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        {/* replace desctiption with content */}
        <div dangerouslySetInnerHTML={{ __html: content as string }} className="mt-[120px]" />
      </div>
    </SectionCard>
  );
};

export default BlogDetailsHeader;
