import React, { useState } from 'react'
import { UserPostDetail } from 'pages/UserPostDetail'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card } from '@mui/material'

import { fetchPost } from 'utils/ToggleThemeProvider'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export const UserPost = ({ postId, title, firstName, lastName }) => {
  const navigate = useNavigate()
  const [userPost, setUserPost] = useState()

  return (
    // <div onClick={() => navigate(`/posts/user/${postId}`)}>
    <Grid2 
    xs={12}
    sm={6}
    md={4}
    lg={4}
    xl={4}
    >
    <Card spacing={1} sx={{margin: 1, padding: 2}}>
      <Box>
        <UserPostDetail postID={postId} title={title} firstName={firstName} lastName={lastName}/>
      </Box>
    </Card>
    </Grid2>
  )
}
