import { Box } from '@mui/material';
import React from 'react';

const SideBar = () => {
  return <Box bgcolor="red" p={3} flex={1} sx={{display:{xs:'none',sm:"block" }}}>SideBar</Box>;
};

export default SideBar;
