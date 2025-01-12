'use client';
import Button from '@/components/ui/Button/Button';
import BlogPost from '@/components/ui/Card/BlogCard';
import SectionCard from '@/components/ui/Card/SectionCard';
import CustomPagination from '@/components/ui/CustomPagination';
import { TagFilterIcon } from '@/components/ui/icons/TagFilterIcon';
import ControlledInput from '@/components/ui/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { BlogModelProps, TagModelProps } from '@/types/model.type';
import { blogList } from '@/utils/mockDB';
import { Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { SwipeableDrawer } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import SortSelector from '../../../ui/Selector/SortSelector';
import TagFilter from '../TagFilter';

interface BlogListContextProps {
  selectedTags: TagModelProps['id'][];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  allTagId: TagModelProps['id'];
}

// Combine SSR + CSR (Hybrid)

export const BlogListContext = createContext<BlogListContextProps>({} as BlogListContextProps);
const BlogList = () => {
  //TODO: Custom hook for pagination
  const [page, setPage] = useState(1);
  const [pageSize] = useState(3);
  const allTagId = 'tags-all';
  const defaultTags = [allTagId];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [blogData, setBlogData] = useState<BlogModelProps[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagModelProps['id'][]>(defaultTags);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceSearch = useDebounce(searchQuery);

  console.log(searchParams.get('page'), 'searchParams');
  const fetchBlogList = async () => {
    //using fetch API from next
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogList);
      }, 3000);
    });
  };
  useEffect(() => {
    //fetch data
    const fetchData = async () => {
      const res = await fetchBlogList();
    };
    fetchData();
    handleParamChange();
  }, [page]);

  useEffect(() => {
    //fetch data + reset page
    // console.log(searchQuery, 'searchQuery');
    setPage(1);
    handleParamChange();
  }, [debounceSearch]);

  useEffect(() => {
    if (window.screen.width < 768) {
      //waiting for confirmation
    } else {
      //fetch data
    }
    handleParamChange();
  }, [selectedTags]);

  const totalPages = Math.ceil(blogList.length / pageSize);
  const currentBlogs = blogList.slice((page - 1) * pageSize, page * pageSize);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleParamChange = () => {
    const urlParams = new URLSearchParams();
    urlParams.set('page', page.toString());
    urlParams.set('tags', selectedTags.join(','));
    urlParams.set('search', searchQuery);
    router.push(`?${urlParams.toString()}`, { scroll: false });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (!blogList?.length) return null; //TODO: Add skeleton loader + Not found component
  return (
    <BlogListContext.Provider value={{ selectedTags, setSelectedTags, allTagId }}>
      <SectionCard title={SectionTitle}>
        <div className="container flex flex-col items-start gap-4xl laptop:flex-row">
          <div className="h-100px hidden w-full basis-[20%] laptop:block">
            <TagFilter />
          </div>
          <div className="flex w-full justify-between gap-2xl laptop:hidden">
            <div className="w-full">
              <ControlledInput required icon={<Search />} placeholder="Search" />
            </div>
            <TagFilterMobile />
          </div>
          <div className="flex basis-[80%] flex-col gap-4xl">
            <div className="hidden w-full items-center justify-between gap-2xl laptop:flex">
              <div className="basis-[40%]">
                <ControlledInput
                  required
                  icon={<Search />}
                  placeholder="Search"
                  defaultValue={searchQuery}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <SortSelector />
            </div>
            <div className="grid w-full grid-flow-row auto-rows-min grid-cols-2 gap-x-2xl gap-y-3xl tablet:grid-cols-2 laptop:grid-cols-3">
              {currentBlogs.map((blog) => {
                return (
                  <div key={blog.id} className="col-span-1">
                    <BlogPost
                      title={blog.title}
                      description={blog.description}
                      publishDate={blog.publishDate}
                      coverImage={blog.coverImage}
                      tags={blog.tags}
                      slug={blog.slug}
                    />
                  </div>
                );
              })}
            </div>
            <div className="self-center">
              <CustomPagination page={page} count={totalPages} onChange={handlePageChange} />
            </div>
          </div>
        </div>
      </SectionCard>
    </BlogListContext.Provider>
  );
};

const TagFilterMobile = () => {
  const [open, setOpen] = useState(false);

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
            <TagFilter />
            <div className="flex w-full flex-col items-start gap-2xl laptop:gap-3xl">
              <p className="text-primary-default body-bold laptop:block laptop:text-black">Filter</p>
              <SortSelector className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-between gap-m">
            <Button
              color="secondary"
              variant="contained"
              classCustom="w-full btn__small tablet:btn__medium"
            >
              Xóa bộ lọc
            </Button>
            <Button
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
  <h3>
    <span className="text-secondary-default">TẤT CẢ</span> BÀI VIẾT
  </h3>
);

export default BlogList;
