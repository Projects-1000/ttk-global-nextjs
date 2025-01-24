'use client';
import '@/styles/scss/_helper.scss';
import { ArrowDownToLine } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../Button/Button';
import CustomPagination from '../../CustomPagination';
import { motion } from 'framer-motion';

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
  <div className="flex items-center justify-between gap-l border border-b-[1px] border-l-0 border-r-0 border-t-0 border-solid border-blue-200 p-l duration-200 hover:bg-greyscale-negative laptop:gap-2xl laptop:px-3xl laptop:py-2xl">
    <span className="subtitle-bold laptop:body-bold">{doc.name}</span>
    <Button classCustom="mobile:max-tablet:btn--pill mobile:btn__small tablet:btn__medium laptop:rounded-none">
      <span className="hidden laptop:inline">Download</span>
      <ArrowDownToLine />
    </Button>
  </div>
);

const DocumentCard: React.FC<DocumentCardProps> = ({ title, documents }) => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  const totalPages = Math.ceil(documents.length / pageSize);
  const currentDocuments = documents.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
          <CustomPagination page={page} count={totalPages} onChange={handlePageChange} />
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentCard;
