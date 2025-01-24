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
import BlogItemSkeleton from '@/components/ui/Skeleton/BlogSkeleton';

interface BlogListContextProps {
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  allTagId: string;
  fetchData: (queryParam: GetBlogsRequest) => Promise<void>;
  queryParam: GetBlogsRequest;
  setQueryParam: Dispatch<SetStateAction<GetBlogsRequest>>;
  // sortDate: string;
  // setSortDate: Dispatch<SetStateAction<string>>;
}

export const BlogListContext = createContext<BlogListContextProps>({} as BlogListContextProps);

const getBlogs = async (params: GetBlogsRequest) => {
  const url = new URL(`http://localhost:5000/api/v1/blog/get-blogs`);
  (Object.keys(params) as (keyof GetBlogsRequest)[]).forEach((key) =>
    url.searchParams.append(key, params[key] as string)
  );
  console.log('url', url);
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
  const allTagId = 'All';
  const defaultTags = [allTagId];
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogModelProps[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultTags);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  // const [sortDate, setSortDate] = useState('');
  // const [pagination, setPagination] = useState({ page: 1, total: 0, limit: 4 });
  const debounceSearch = useDebounce(searchQuery);
  const [totalBlog, setTotalBlog] = useState(0);
  const [queryParam, setQueryParam] = useState<GetBlogsRequest>({
    isHighlight: null,
    searchTitle: debounceSearch.trim(),
    sortedDate: true,
    filterTags: null,
    limit: 4,
    page: 1
  });

  const fetchData = async (queryParam: GetBlogsRequest) => {
    const { data, limit, page, total } = await getBlogs(queryParam);
    setBlogData(data);
    setTotalBlog(total);
    // setPagination({ page, total, limit });
  };
  useEffect(() => {
    console.log('queryParaXm', queryParam);
    setIsLoading(true);
    fetchData(queryParam);
    handleParamChange();
    setIsLoading(false);
  }, [queryParam]);

  useEffect(() => {
    // setPagination((prev) => ({ ...prev, page: 1 }));
    //TODO: Fix: avoid call when first render
    setQueryParam((prev) => ({ ...prev, searchTitle: debounceSearch.trim(), page: 1 }));
    handleParamChange();
  }, [debounceSearch]);

  const totalPages = Math.ceil(totalBlog / queryParam.limit);
  const currentBlogs = blogData;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // setPagination((prev) => ({ ...prev, page: value }));
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
  if (!blogData?.length) return null;
  return (
    <BlogListContext.Provider value={{ selectedTags, setSelectedTags, allTagId, fetchData, queryParam, setQueryParam }}>
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
          <div className="flex basis-[80%] flex-col gap-4xl">
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
            <motion.div
              className="grid w-full grid-flow-row auto-rows-min grid-cols-2 gap-x-2xl gap-y-3xl tablet:grid-cols-2 laptop:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
              }}
            >
              {!isLoading
                ? Array.from({ length: 6 }).map((_, index) => <BlogItemSkeleton key={index} />)
                : currentBlogs.map((blog) => (
                    <motion.div
                      key={blog.id}
                      className="col-span-1"
                      initial={{ opacity: 0, y: 20, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BlogPost
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        coverImage={blog.coverImage}
                        tags={blog.tags}
                        slug={blog.slug}
                        createdAtIsoFormat={blog.createdAtIsoFormat}
                      />
                    </motion.div>
                  ))}
            </motion.div>
            <motion.div
              className="self-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <CustomPagination page={queryParam.page} count={totalPages} onChange={handlePageChange} />
            </motion.div>
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
  const { fetchData, queryParam } = useContext(BlogListContext);

  const handleApply = () => {
    const param = { ...queryParam, sortedDate: sortDate === 'new' ? true : false };
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
