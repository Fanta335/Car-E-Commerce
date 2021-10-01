import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from 'data/products';
import { VFC } from 'react';

type Props = {
  product: Product;
};

const ProductCard: VFC<Props> = (props) => {
  const { product } = props;

  const formattedPrice = Intl.NumberFormat().format(product.price);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 160 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
        sx={{boxShadow:'0px 0px 40px 4px #777'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">Price: ${formattedPrice}</Typography>
        <Typography variant="body1">Date: {product.date}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
