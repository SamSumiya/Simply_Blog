import React, { useContext, useEffect } from 'react'
import { BlogWrapper } from 'components/BlogWrapper'
import {
  Box,
  useTheme,
  Grid,
  Pager,
  useMediaQuery,
  Button,
} from '@mui/material'
import logo512 from 'assets/logo512.png'
import { FlexBetween } from 'components/FlexBetween'
import Blog from 'pages/widgets/Blog'

import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from 'App'

const BlogWidget = ({
  title,
  userId,
  firstName,
  lastName,
  summary,
  updatedAt,
  date,
  content,
  postId,
  createdAt,
}) => {
  const { palette } = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 980px)')

  return (
    <BlogWrapper m="2rem auto">
      <Blog
        title={title}
        postId={postId}
        userId={userId}
        firstName={firstName}
        lastName={lastName}
        summary={summary}
        createdAt={createdAt}
        updatedAt={updatedAt}
        date={date}
        content={content}
      />
      {/* <Button onClick={() => navPost()}>Details BUTTON</Button>
      <Link to={`/articles/${postId}`}>Details</Link> */}
    </BlogWrapper>
  )
}

export default BlogWidget
