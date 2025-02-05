'use client';
import Button from '@/components/ui/Button/Button';
import BlogPost from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import CustomPagination from '@/components/ui/CustomPagination';
import { TagFilterIcon } from '@/components/ui/icons/TagFilterIcon';
import ControlledInput from '@/components/ui/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { GetBlogsRequest, GetBlogsResponse } from '@/types/api.type';
import { BlogModelProps } from '@/types/model.type';
import { Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { SwipeableDrawer } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChangeEvent, createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import SortSelector from '../../../ui/Selector/SortSelector';
import TagFilter from '../TagFilter';

import Empty from '@/components/ui/Empty';
import BlogItemSkeleton from '@/components/ui/Skeleton/BlogSkeleton';
interface BlogListContextProps {
  selectedTags: BlogModelProps['tags'];
  setSelectedTags: Dispatch<SetStateAction<BlogModelProps['tags']>>;
  allTagId: string;
  fetchData: (queryParam: GetBlogsRequest) => Promise<void>;
  queryParam: GetBlogsRequest;
  setQueryParam: Dispatch<SetStateAction<GetBlogsRequest>>;
  defaultTags: BlogModelProps['tags'];
}

export const BlogListContext = createContext<BlogListContextProps>({} as BlogListContextProps);

const getBlogs = async (params: GetBlogsRequest, allTagId: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/blog/get-blogs`);
  console.log('>>>>', params);
  (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) => {
    const value = params[key];
    if (Array.isArray(value)) {
      if (!value?.includes(allTagId)) url.searchParams.append(key, JSON.stringify(value));
      else url.searchParams.append(key, String(null));
    } else {
      url.searchParams.append(key, String(value));
    }
  });
  const posts = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const res = (await posts.json()) as GetBlogsResponse;
  return res;
};

const BlogList = () => {
  const allTagId = '';
  const defaultTags: BlogModelProps['tags'] = null;
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogModelProps[]>([]);
  const [selectedTags, setSelectedTags] = useState<BlogModelProps['tags']>(defaultTags);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceSearch = useDebounce(searchQuery);
  const [totalBlog, setTotalBlog] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [queryParam, setQueryParam] = useState<GetBlogsRequest>({
    isHighlight: null,
    searchTitle: debounceSearch.trim(),
    sortedDate: true,
    filterTags: null,
    limit: 6,
    page: 1
  });
  const fetchData = async (queryParam: GetBlogsRequest) => {
    setIsLoading(true);
    const { data, limit, page, total } = await getBlogs(queryParam, allTagId);
    setBlogData(data);
    setTotalBlog(total);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData({ ...queryParam, filterTags: selectedTags });
    handleParamChange();
  }, [queryParam]);

  useEffect(() => {
    //TODO: Fix: avoid call when first render
    setQueryParam((prev) => ({ ...prev, searchTitle: debounceSearch.trim(), page: 1 }));
    handleParamChange();
  }, [debounceSearch]);

  const totalPages = Math.ceil(totalBlog / queryParam.limit);
  const currentBlogs = blogData;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setQueryParam((prev) => ({ ...prev, page: value }));
  };

  const handleParamChange = () => {
    const urlParams = new URLSearchParams();
    urlParams.set('page', queryParam.page.toString().trim());
    urlParams.set('search', searchQuery);
    router.push(`?${urlParams.toString()}`, { scroll: false });
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (value: string) => {
    setQueryParam((prev) => ({ ...prev, sortedDate: value === 'new' ? true : false, page: 1 }));
  };

  // TODO: Add skeleton loading + not found
  return (
    <BlogListContext.Provider
      value={{ selectedTags, setSelectedTags, defaultTags, allTagId, fetchData, queryParam, setQueryParam }}
    >
      <SectionCard title={SectionTitle}>
        <div className="flex flex-col items-start gap-4xl laptop:flex-row">
          <motion.div
            className="h-100px hidden w-full basis-[20%] laptop:block"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <TagFilter />
          </motion.div>
          <div className="flex w-full justify-start gap-2xl laptop:hidden">
            <div className="w-full">
              <ControlledInput
                required
                icon={<Search />}
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <TagFilterMobile />
          </div>
          <div className="flex w-full flex-col gap-4xl laptop:basis-[80%]">
            <motion.div
              className="hidden w-full items-center justify-between gap-2xl laptop:flex"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="basis-[40%]">
                <ControlledInput
                  required
                  icon={<Search />}
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <SortSelector onSelectChange={(e) => handleSortChange(e.target.value as string)} />
            </motion.div>
            {isLoading ? (
              <div className="relative grid w-full grid-flow-row auto-rows-min grid-cols-2 gap-x-2xl gap-y-3xl tablet:grid-cols-2 laptop:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <BlogItemSkeleton key={index} />
                ))}
              </div>
            ) : currentBlogs?.length > 0 ? (
              <motion.div
                className="relative grid w-full grid-flow-row auto-rows-min grid-cols-2 gap-x-2xl gap-y-3xl tablet:grid-cols-2 laptop:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
              >
                {currentBlogs.map((blog) => (
                  <BlogPost
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    coverImage={blog.coverImage}
                    tags={blog.tags}
                    createdAtIsoFormat={blog.createdAtIsoFormat}
                    createdBy={blog.createdBy}
                    slug={blog.slug}
                    direction="column"
                    isMainBlog={false}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="">
                <Empty />
              </div>
            )}

            {currentBlogs?.length > 0 && (
              <motion.div
                className="flex w-full justify-center self-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mobile:max-tablet:hidden">
                  <CustomPagination
                    page={queryParam.page}
                    count={totalPages}
                    onChange={handlePageChange}
                    siblingCount={1}
                    boundaryCount={1}
                  />
                </div>
                <div className="hidden mobile:max-tablet:block">
                  <CustomPagination
                    page={queryParam.page}
                    count={totalPages}
                    onChange={handlePageChange}
                    siblingCount={0}
                    boundaryCount={1}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </SectionCard>
    </BlogListContext.Provider>
  );
};

interface TagFilterMobileProps {}

const TagFilterMobile = ({}: TagFilterMobileProps) => {
  const [open, setOpen] = useState(false);
  const [sortDate, setSortDate] = useState('');
  const { fetchData, queryParam, selectedTags } = useContext(BlogListContext);

  const handleApply = () => {
    const param: GetBlogsRequest = {
      ...queryParam,
      filterTags: selectedTags,
      sortedDate: sortDate === 'new' ? true : false
    };
    fetchData(param);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="laptop:hidden">
      <Button
        onClick={toggleDrawer(true)}
        iconPosition="only"
        color="secondary"
        icon={<TagFilterIcon />}
        classCustom="mobile:max-laptop:!px-s mobile:max-laptop:!py-xs btn__small--icon tablet:btn__medium--icon laptop:btn__large--icon"
      ></Button>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            width: { xs: '300px', sm: '400px' },
            height: '100dvh'
          }
        }}
      >
        <div className="flex h-full w-full flex-col items-start justify-between p-2xl">
          <div className="flex w-full flex-col items-end gap-2xl">
            <CloseIcon onClick={toggleDrawer(false)} />
            <TagFilter isMobile={true} />
            <div className="flex w-full flex-col items-start gap-2xl laptop:gap-3xl">
              <p className="text-primary-default body-bold laptop:block laptop:text-black">Filter</p>
              <SortSelector className="w-full" onSelectChange={(e) => setSortDate(e.target.value as string)} />
            </div>
          </div>
          <div className="flex w-full justify-between gap-m">
            <Button color="secondary" variant="contained" classCustom="w-full btn__small tablet:btn__medium">
              Xóa bộ lọc
            </Button>
            <Button
              onClick={handleApply}
              color="primary"
              variant="contained"
              classCustom="w-full btn__small tablet:btn__medium"
            >
              Áp dụng
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

const SectionTitle = (
  <h3 className="text-left">
    <span className="text-secondary-default">TẤT CẢ</span> BÀI VIẾT
  </h3>
);

export default BlogList;
