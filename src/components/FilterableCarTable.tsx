import { useState, VFC } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

import { Category } from 'data/products';
import { Box } from '@mui/system';
import ProductList from './ProductList';
import SelectMenu, { SortOption } from './SelectMenu';

const FilterableCarTable: VFC = () => {
  const [selectedCategory, setCategory] = useState<Category | ''>('');
  const [selectedSortOption, setOption] = useState<SortOption | ''>('');

  const handleChangeCategory = (event: SelectChangeEvent) => {
    const selected = event.target.value as Category | '';
    setCategory(selected);
  };

  const handleChangeSortOption = (event: SelectChangeEvent) => {
    const selected = event.target.value as SortOption | '';
    setOption(selected);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Box sx={{ p: 3, maxWidth: 1200 }}>
            <SelectMenu
              selectedCategory={selectedCategory}
              selectedSortOption={selectedSortOption}
              handleChangeCategory={handleChangeCategory}
              handleChangeSortOption={handleChangeSortOption}
            />
            <ProductList
              selectedCategory={selectedCategory}
              selectedSortOption={selectedSortOption}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterableCarTable;
