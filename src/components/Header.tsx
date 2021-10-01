import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { VFC } from 'react';

import './Header.css';

const Header: VFC = () => (
  <div>
    <Box sx={{ p: 2, color: '#fff', backgroundColor: '#181818' }}>
      <Grid container alignItems="center">
        <Grid item>
          <h1>Car Ecommerse</h1>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Header;
