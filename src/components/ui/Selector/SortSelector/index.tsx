import Selector, { SelectorProps } from '@/components/ui/Selector';
import { MenuItem, styled } from '@mui/material';
import '@/components/ui/layout/LocalSwitcher/index.scss';

interface SortSelectorProps extends Pick<SelectorProps, 'className'> {}
const SortSelector = ({ className }: SortSelectorProps) => {
  const options = [
    {
      value: 'new',
      label: 'Mới nhất'
    },
    {
      value: 'old',
      label: 'Cũ nhất'
    }
  ];
  const isActive = false;
  return (
    <>
      <Selector
        title="Sort"
        isPending={false}
        label="Sắp xếp theo"
        defaultOption={options[0]}
        options={options}
        onSelectChange={() => {}}
        className={`w-36 ${className}`}
      >
        <MenuItem
          key="1"
          value="new"
          className={`px-l py-s ${isActive ? 'text-primary-default body-semibold' : 'body-regular'}`}
        >
          Mới nhất
        </MenuItem>
        <MenuItem
          key="2"
          value="old"
          className={`px-l py-s ${isActive ? 'text-primary-default body-semibold' : 'body-regular'}`}
        >
          Cũ nhất
        </MenuItem>
      </Selector>
    </>
  );
};

export default SortSelector;
