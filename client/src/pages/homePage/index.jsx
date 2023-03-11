import React from 'react'
import Navbar from 'pages/navbar'
import { BlogsWidget } from 'pages/widgets/BlogsWidget'
import { Box } from '@mui/material'

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <BlogsWidget />
    </Box>
  )
}
