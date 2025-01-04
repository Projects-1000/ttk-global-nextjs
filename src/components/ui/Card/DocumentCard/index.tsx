'use client';
import '@/styles/scss/_helper.scss';
import Pagination from '@mui/material/Pagination';
import { ArrowDownToLine } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../Button/Button';
import CustomPagination from '../../CustomPagination';
interface Document {
  name: string;
  label: string;
  downloadLink: string;
}

interface DocumentCardProps {
  title: React.ReactNode;
  documents: Document[];
}

const DocumentItem: React.FC<{ doc: Document }> = ({ doc }) => (
  <div className="laptop:2xl flex items-center justify-between border border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-blue-200 px-xl py-xl laptop:px-3xl">
    <span className="subtitle-bold laptop:body-bold">{doc.name}</span>
    <Button size="medium" classCustom="rounded-full laptop:rounded-none">
      <span className="hidden laptop:inline">Download</span>
      <ArrowDownToLine />
    </Button>
  </div>
);

const DocumentCard: React.FC<DocumentCardProps> = ({ title, documents }) => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10); // Keeping pageSize constant as 10

  const totalPages = Math.ceil(documents.length / pageSize);

  const currentDocuments = documents.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="flex w-full flex-col gap-l laptop:gap-3xl">
      <span className="uppercase h3-bold laptop:h1-bold">{title}</span>
      <div className="flex flex-col gap-l rounded-m border-[1px] border-solid border-blue-100 p-xl laptop:gap-3xl laptop:p-4xl">
        <div>
          {currentDocuments.map((doc, index) => (
            <DocumentItem key={index} doc={doc} />
          ))}
        </div>

        <div className="flex justify-center">
          {/* <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" shape="rounded" /> */}
          <CustomPagination page={page} count={totalPages} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
