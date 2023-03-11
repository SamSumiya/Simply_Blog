import React, { useState } from 'react'
import { UserPostDetail } from 'pages/UserPostDetail'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchPost } from 'utils/ToggleThemeProvider'

export const UserPost = ({ postId, title, firstName, lastName }) => {
  const navigate = useNavigate()
  const [userPost, setUserPost] = useState()

  return (
    // <div onClick={() => navigate(`/posts/user/${postId}`)}>
    <>
      <Box
        // onClick={() => {
        //   fetchPost(postId).then((data) => setUserPost(data))
        // }}
      >
        <UserPostDetail postID={postId} title={title} firstName={firstName} lastName={lastName}/>
      </Box>
    </>
  )
}
