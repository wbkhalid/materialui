import { Box } from '@mui/material'
import React from 'react'

function RightBar() {
  return (
    <Box bgcolor="blue" p={3} flex={2} sx={{display:{xs:'none',sm:"block" }}}>RightBar</Box>
  )
}

export default RightBar