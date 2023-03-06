import { Box, Stack } from '@mui/material';
import React from 'react';
import Feed from './component/Feed';
import NavBar from './component/NavBar';
import RightBar from './component/RightBar';
import SideBar from './component/SideBar';

const App = () => {
  return (
    <Box>
      <NavBar/>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
