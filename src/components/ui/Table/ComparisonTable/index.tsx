import React, { Fragment } from 'react';
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
  console.log(data);
  const colWidth = 100 / columns.length;
  return (
    <div className="overflow-auto">
      <table className="rounded-lg table-no-border min-w-full border">
        <thead className="rounded-tl-m rounded-tr-m bg-primary-default">
          <tr>
            {columns.map((col, index) => (
              <th
                key={col}
                className={`py-s text-center text-greyscale-negative footnote-bold laptop:py-l laptop:headline-bold ${index === 0 && 'rounded-tl-m'} ${index === columns.length - 1 && 'rounded-tr-m'}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => (
            <Fragment key={key}>
              <tr className="border-[1px] border-l-0 border-r-0 border-t-0 border-solid border-primary-lighter bg-primary-subtle">
                <td colSpan={columns.length} className="py-s text-center footnote-bold laptop:py-l laptop:body-bold">
                  {tableHeader[key as keyof typeof tableHeader]}
                </td>
              </tr>
              {data[key].map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`cursor-pointer border border-l-0 border-r-0 border-t-0 border-solid border-primary-lighter duration-200 hover:bg-blue-10`}
                >
                  {Object.keys(row).map((col) => (
                    <td
                      key={col}
                      className={`w-[${colWidth}%] py-s text-center footnote-regular laptop:py-l laptop:body-regular`}
                    >
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
