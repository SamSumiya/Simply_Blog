import { ThemeContext } from 'App'
import React, { useContext, useEffect } from 'react'
import { UserPost } from 'pages/userPost'
import { fetchUserPosts } from 'utils/ToggleThemeProvider'
import { LoginSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { formateDateToDescendingOrder } from 'utils/ToggleThemeProvider'
import MainAppBar from 'components/MainAppBar'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export const UserPostList = ({ userId, allPosts  }) => {
  const { userPosts } = useContext(ThemeContext)
  const [ setPosts ] = userPosts
  const navigate = useNavigate()

  const formatedposts = formateDateToDescendingOrder(allPosts)

  useEffect(() => {
    fetchUserPosts(userId).then((data) => setPosts(data))
  }, [setPosts, userId])

  return (
    <>
     <MainAppBar></MainAppBar>
     <Grid2
     container>

      {/* <Button onClick={() => navigate(-1)}>Main Page</Button> */}
      {formatedposts?.map(({ _id, title, firstName, lastName }) => (
        
        
        <UserPost
        key={_id}
            postId={_id}
            title={title}
            firstName={firstName}
            lastName={lastName}
            />

      ))}
      </Grid2>
    </>
  )
}
