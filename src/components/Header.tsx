import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { VFC } from 'react';

import './Header.css';

const Header: VFC = () => (
  <div>
    <Box sx={{ p: 2, color: '#fff', backgroundColor: '#181818' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <h1 className='title'>Car Ecommerce</h1>
        </Grid>
        <Grid item>
          <a href='https://github.com/Fanta335/Car-E-Commerce'>
            <h2 className='code-link'>CODE</h2>
          </a>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Header;
