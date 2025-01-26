import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import './index.scss';
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
  siblingCount?: number;
  boundaryCount?: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void; // Change handler
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  page,
  onChange,
  siblingCount = 1,
  boundaryCount = 1
}) => {
  const { items } = usePagination({
    count,
    page,
    siblingCount,
    boundaryCount,
    onChange: (_, value) => onChange(null as unknown as React.ChangeEvent<unknown>, value)
  });
  console.log(items, count, page);
  if (count > 1)
    return (
      <nav className="pagination-container">
        <List>
          {items.map(({ page: itemPage, type, selected, ...item }, index) => {
            let children = null;
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '...';
            } else if (type === 'page') {
              children = (
                <>
                  <Button
                    text={itemPage?.toString()}
                    classCustom=" btn__small laptop:btn__medium h-full mobile:max-tablet:!p-0 mobile:max-tablet:!w-fit mobile:max-tablet:hidden"
                    type="button"
                    color={selected ? 'primary' : 'secondary'}
                    {...item}
                  />
                  <button className={`custom-button ${selected ? 'active' : ''}`} {...item}>
                    {itemPage?.toString()}
                  </button>
                </>
              );
            } else if (type === 'previous') {
              children = (
                <>
                  <Button
                    {...item}
                    color="secondary"
                    classCustom="btn__small laptop:btn__medium mobile:max-tablet:hidden"
                    disabled={page === 1}
                  >
                    <ArrowLeft />
                    <span className="hidden laptop:inline">Trước</span>
                  </Button>
                  <button
                    aria-disabled={page === 1}
                    className={`custom-button !px-2xs ${page === 1 ? 'disabled' : ''}`}
                    {...item}
                  >
                    <ArrowLeft />
                  </button>
                </>
              );
            } else if (type === 'next') {
              children = (
                <>
                  <Button
                    {...item}
                    color="secondary"
                    classCustom="btn__small laptop:btn__medium mobile:max-tablet:hidden"
                    disabled={page === count}
                  >
                    <span className="hidden laptop:inline">Sau</span>
                    <ArrowRight />
                  </Button>
                  <button
                    aria-disabled={page === count}
                    className={`custom-button !px-2xs ${page === count ? 'disabled' : ''}`}
                    {...item}
                  >
                    <ArrowRight />
                  </button>
                </>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    );
};

export default CustomPagination;
