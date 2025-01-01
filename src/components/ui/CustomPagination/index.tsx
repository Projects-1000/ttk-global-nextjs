import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../Button/Button';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  gap: '0.5rem'
});

interface CustomPaginationProps {
  count: number; // Total number of pages
  page: number; // Current page
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void; // Change handler
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, onChange }) => {
  const { items } = usePagination({
    count,
    page,
    onChange: (_, value) => onChange(null as unknown as React.ChangeEvent<unknown>, value)
  });

  return (
    <nav>
      <List>
        {items.map(({ page: itemPage, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              // <button
              //   type="button"
              //   className={`rounded px-3 py-1 ${selected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              //   {...item}
              // >
              //   {itemPage}
              // </button>
              <Button
                text={itemPage?.toString()}
                size="medium"
                type="button"
                color={selected ? 'primary' : 'secondary'}
                {...item}
              />
            );
          } else if (type === 'previous') {
            children = (
              // <button
              //   type="button"
              //   className="rounded flex items-center space-x-2 bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200"
              //   {...item}
              //   disabled={page === 1} // Disable if on the first page
              // >
              //   <ArrowLeft />
              //   <span className="hidden laptop:inline">Prev</span>
              // </button>
              <Button {...item} color="secondary" size="medium">
                <ArrowLeft />
                <span className="hidden laptop:inline">Trước</span>
              </Button>
            );
          } else if (type === 'next') {
            children = (
              // <button
              //   type="button"
              //   className="rounded flex items-center space-x-2 bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200"
              //   {...item}
              //   disabled={page === count} // Disable if on the last page
              // >
              //   <span className="hidden laptop:inline">Next</span>
              //   <ArrowRight />
              // </button>
              <Button {...item} color="secondary" size="medium">
                <span className="hidden laptop:inline">Sau</span>
                <ArrowRight />
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default CustomPagination;
