'use client';
import React, { Fragment } from 'react';
import { motion, Variants } from 'framer-motion';
import './index.scss';

interface TableRow {
  [key: string]: string;
}

interface ComparisonTableProps {
  columns: string[];
  data: Record<string, TableRow[]>;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, data }) => {
  const tableHeader = {
    cost: 'Chi phí',
    profit: 'Lợi nhuận',
    risk: 'Rủi ro'
  };

  const colWidth = 100 / columns.length;
  const tableVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="overflow-hidden">
      <motion.table
        className="rounded-lg table-no-border min-w-full border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={tableVariants}
      >
        <thead className="rounded-tl-m rounded-tr-m bg-primary-default">
          <tr>
            {columns.map((col, index) => (
              <th
                key={col}
                className={`text-wrap py-s text-center text-greyscale-negative footnote-bold laptop:py-l laptop:headline-bold ${
                  index === 0 && 'rounded-tl-m'
                } ${index === columns.length - 1 && 'rounded-tr-m'}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => (
            <Fragment key={key}>
              <motion.tr
                className="border-[1px] border-l-0 border-r-0 border-t-0 border-solid border-primary-lighter bg-primary-subtle"
                variants={rowVariants}
              >
                <td colSpan={columns.length} className="py-s text-center footnote-bold laptop:py-l laptop:body-bold">
                  {tableHeader[key as keyof typeof tableHeader]}
                </td>
              </motion.tr>
              {data[key].map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  className={`cursor-pointer border border-l-0 border-r-0 border-t-0 border-solid border-primary-lighter duration-200 hover:bg-blue-10`}
                  variants={rowVariants}
                >
                  {Object.keys(row).map((col) => (
                    <td
                      key={col}
                      className={`w-[${colWidth}%] py-s text-center footnote-regular laptop:py-l laptop:body-regular`}
                    >
                      {row[col]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default ComparisonTable;
