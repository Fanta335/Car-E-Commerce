import { Grid } from '@mui/material';
import { Category, Product, productData } from 'data/products';
import { VFC } from 'react';
import ProductCard from './ProductCard';
import { SortOption } from './SelectMenu';

type Props = {
  selectedCategory: Category | '';
  selectedSortOption: SortOption | '';
};

const ProductList: VFC<Props> = (props) => {
  const { selectedCategory, selectedSortOption } = props;

  const products =
    selectedCategory === ''
      ? productData
      : productData
          .slice()
          .filter((product) => product.category === selectedCategory);

  const sortProducts = (
    option: SortOption | '',
    productsToSort: Product[],
  ): Product[] => {
    if (option === 'Price: Low to High') {
      return productsToSort.slice().sort((p1, p2) => p1.price - p2.price);
    }
    if (option === 'Price: High to Low') {
      return productsToSort.slice().sort((p1, p2) => p2.price - p1.price);
    }
    if (option === 'Newest Arrivals') {
      return productsToSort
        .slice()
        .sort((p1, p2) => Date.parse(p2.date) - Date.parse(p1.date));
    }

    return productsToSort;
  };

  const sortedProducts = sortProducts(selectedSortOption, products);

  return (
    <>
      <Grid container spacing={2}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
