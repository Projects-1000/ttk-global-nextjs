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
              <Button {...item} color="secondary" size="medium" disabled={page === 1}>
                <ArrowLeft />
                <span className="hidden laptop:inline">Trước</span>
              </Button>
            );
          } else if (type === 'next') {
            children = (
              <Button {...item} color="secondary" size="medium" disabled={page === count}>
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
