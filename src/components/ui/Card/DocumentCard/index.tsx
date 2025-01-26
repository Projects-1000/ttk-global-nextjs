'use client';
import '@/styles/scss/_helper.scss';
import { GetDocumentRequest, GetDocumentResponse } from '@/types/api.type';
import { DocumentModelProps } from '@/types/model.type';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import CustomPagination from '../../CustomPagination';
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import download_file from '@/utils/download_file';
import Empty from '../../Empty';
import { Skeleton } from '@mui/material';
interface DocumentCardProps {
  searchQuery: string;
  title: React.ReactNode;
  tag: string;
}

const fetchDocuments = async (params: GetDocumentRequest) => {
  const { title, tags } = params;
  const url = title
    ? new URL(`${process.env.NEXT_PUBLIC_API_URL}/document/get-document-by-title-partials/${title}/${tags}`)
    : new URL(`${process.env.NEXT_PUBLIC_API_URL}/document/get-document-by-title-partials`);
  (Object.keys(params) as (keyof GetDocumentRequest)[]).forEach((key) => {
    const value = params[key];
    if (Array.isArray(value)) {
      if (!value?.includes('')) url.searchParams.append(key, JSON.stringify(value));
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
  const res = (await posts.json()) as GetDocumentResponse;
  return res;
};

const DocumentItem: React.FC<{ doc: DocumentModelProps }> = ({ doc }) => {
  const handleDownload = () => {
    if (doc.attachment) {
      // Extract the file name from the URL (optional)
      const fileName = doc.attachment.substring(doc.attachment.lastIndexOf('/') + 1);

      // Call the download_file function
      download_file(doc.attachment, fileName);
    }
  };

  return (
    <div className="flex items-center justify-between gap-l border border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-blue-200 p-l duration-200 hover:bg-greyscale-negative laptop:gap-2xl laptop:px-3xl laptop:py-2xl">
      <span className="subtitle-bold laptop:body-bold">{doc.title}</span>
      {doc.attachment && (
        <Button
          classCustom="mobile:max-tablet:btn--pill mobile:btn__small mobile:max-tablet:p-xs tablet:btn__medium laptop:rounded-none"
          onClick={handleDownload}
          aria-label="Download document"
        >
          <span className="hidden laptop:inline">Download</span>
          <ArrowDownToLine />
        </Button>
      )}
    </div>
  );
};

const DocumentCard: React.FC<DocumentCardProps> = ({ title, tag, searchQuery }) => {
  // const [page, setPage] = useState(1);
  // const [pageSize] = useState(5);
  const [totalDocument, setTotalDocument] = useState(0);
  const [queryParam, setQueryParam] = useState<GetDocumentRequest>({ page: 1, limit: 10, tags: tag });
  const [documentsData, setDocumentsData] = useState<DocumentModelProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { data, total } = await fetchDocuments(queryParam);
      setDocumentsData(data);
      setTotalDocument(total);
      setIsLoading(false);
    };

    fetch();
  }, [queryParam]);

  useEffect(() => {
    //TODO: Fix: avoid call when first render
    setQueryParam((prev) => ({ ...prev, title: searchQuery.trim(), page: 1 }));
    handleParamChange();
  }, [searchQuery]);

  const handleParamChange = () => {
    const urlParams = new URLSearchParams();
    urlParams.set('page', queryParam.page.toString().trim());
    urlParams.set('search', searchQuery);
    router.push(`?${urlParams.toString()}`, { scroll: false });
  };

  const totalPages = Math.ceil(totalDocument / queryParam.limit);
  const currentDocuments = documentsData;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // setPage(value);
    setQueryParam({ ...queryParam, page: value });
  };

  return (
    <motion.div
      className="flex w-full flex-col gap-l laptop:gap-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
      }}
    >
      <span className="uppercase h3-bold laptop:h1-bold">{title}</span>
      <div className="border-gradient-stroke-1 flex flex-col gap-l rounded-m border-[1px] bg-[#FAFAFE] p-xl laptop:gap-3xl laptop:!p-4xl">
        <div>
          {isLoading ? (
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} height={40} />
              ))}
            </>
          ) : documentsData.length > 0 ? (
            documentsData.map((doc, index) => <DocumentItem key={index} doc={doc} />)
          ) : (
            <div>
              <Empty />
            </div>
          )}
        </div>

        <div className="flex justify-center">
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
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentCard;
