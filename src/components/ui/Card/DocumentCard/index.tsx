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

interface DocumentCardProps {
  title: React.ReactNode;
  tag: string;
}

const fetchDocuments = async (params: GetDocumentRequest) => {
  const url = new URL(`http://localhost:5000/api/v1/document/get-document-by-title-partials`);
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

const DocumentItem: React.FC<{ doc: DocumentModelProps }> = ({ doc }) => (
  <div className="flex items-center justify-between gap-l border border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-blue-200 p-l duration-200 hover:bg-greyscale-negative laptop:gap-2xl laptop:px-3xl laptop:py-2xl">
    <span className="subtitle-bold laptop:body-bold">{doc.title}</span>
    <Button classCustom="mobile:max-tablet:btn--pill mobile:btn__small tablet:btn__medium laptop:rounded-none">
      <span className="hidden laptop:inline">Download</span>
      <ArrowDownToLine />
    </Button>
  </div>
);

const DocumentCard: React.FC<DocumentCardProps> = ({ title, tag }) => {
  // const [page, setPage] = useState(1);
  // const [pageSize] = useState(5);
  const [totalDocument, setTotalDocument] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceSearch = useDebounce(searchQuery);
  const [queryParam, setQueryParam] = useState<GetDocumentRequest>({ page: 1, limit: 2, tags: tag });
  const [documentsData, setDocumentsData] = useState<DocumentModelProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const { data, total } = await fetchDocuments(queryParam);
      setDocumentsData(data);
      setTotalDocument(total);
      console.log(data);
    };

    fetch();
  }, [queryParam]);

  useEffect(() => {
    //TODO: Fix: avoid call when first render
    setQueryParam((prev) => ({ ...prev, searchTitle: debounceSearch.trim(), page: 1 }));
    handleParamChange();
  }, [debounceSearch]);

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
          {currentDocuments.map((doc, index) => (
            <DocumentItem key={index} doc={doc} />
          ))}
        </div>

        <div className="flex justify-center">
          <CustomPagination page={queryParam.page} count={totalPages} onChange={handlePageChange} />
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentCard;
