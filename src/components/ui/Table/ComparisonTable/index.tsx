import React, { Fragment } from 'react';
import './index.scss';
interface Column {
  key: string;
  title: string;
}

interface ComparisonTableProps {
  columns: Column[];
  data: Record<string, { title: { key: string; content: string }; data: string[] }[]>;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-auto">
      <table className="rounded-lg table-no-border min-w-full border border-gray-300 shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-6 py-3 text-center font-semibold">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[columns[0].key]?.map((row, rowIndex) => (
            <Fragment key={row.title.key}>
              <tr className="w-full bg-gray-100">
                <td colSpan={columns.length} className={`px-6 py-4 text-center font-bold text-gray-700`}>
                  {row.title.content}
                </td>
              </tr>
              <tr>
                {columns.map((col) => (
                  <td key={col.key} className="border-t border-gray-300 px-6 py-4 text-center">
                    {data[col.key][rowIndex]?.data.map((item, itemIndex) => <p key={itemIndex}>{item}</p>)}
                  </td>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
