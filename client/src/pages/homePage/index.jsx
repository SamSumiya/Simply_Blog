import React from 'react'
import Navbar from 'pages/navbar'
import Grid from '@mui/material/Unstable_Grid2'
import { BlogsWidget } from 'pages/widgets/BlogsWidget'
import { Box } from '@mui/material'
import { LeftNav } from 'components/LeftNav'
import { RightNav } from 'components/RightNav'

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <LeftNav />
        <BlogsWidget />
        <RightNav />
      </Grid>
    </Box>
  )
}
