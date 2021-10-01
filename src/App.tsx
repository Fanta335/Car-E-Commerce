import { VFC } from 'react';

import FilterableCarTable from 'components/FilterableCarTable';
import './App.css';
import Header from 'components/Header';
import { Box } from '@mui/system';

const App: VFC = () => (
  <>
    <Box sx={{backgroundColor:'#ddd', minHeight:'100vh'}}>
      <Header />
      <FilterableCarTable />
    </Box>
  </>
);

export default App;
