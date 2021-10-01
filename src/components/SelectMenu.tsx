import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { VFC } from 'react';

import { categories, Category } from 'data/products';
import { Box } from '@mui/system';

const sortOptions = [
  'Price: Low to High',
  'Price: High to Low',
  'Newest Arrivals',
] as const;

export type SortOption = typeof sortOptions[number];

type Props = {
  selectedCategory: Category | '';
  selectedSortOption: SortOption | '';
  handleChangeCategory: (event: SelectChangeEvent) => void;
  handleChangeSortOption: (event: SelectChangeEvent) => void;
};

const SelectMenu: VFC<Props> = (props) => {
  const {
    selectedCategory,
    selectedSortOption,
    handleChangeCategory,
    handleChangeSortOption,
  } = props;

  return (
    <Box sx={{ py: 2 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-category-label">Category</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={selectedCategory}
          label="Category"
          onChange={handleChangeCategory}
        >
          <MenuItem value="">
            <em>Select a category</em>
          </MenuItem>
          {categories.map((cat, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={id} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-sort-label">Sort by</InputLabel>
        <Select
          labelId="select-sort-label"
          id="select-sort"
          value={selectedSortOption}
          label="Sort by"
          onChange={handleChangeSortOption}
        >
          <MenuItem value="">
            <em>Select a sort option</em>
          </MenuItem>
          {sortOptions.map((op, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={id} value={op}>
              {op}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectMenu;
