import { ThemeContext } from 'App'
import React, { useContext, useEffect } from 'react'
import { UserPost } from 'pages/userPost'
import { fetchUserPosts } from 'utils/ToggleThemeProvider'
import { LoginSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { formateDateToDescendingOrder } from 'utils/ToggleThemeProvider'

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
      <Button onClick={() => navigate(-1)}>Main Page</Button>
      {formatedposts?.map(({ _id, title, firstName, lastName }) => (
        <div key={_id}>
          <UserPost
            postId={_id}
            title={title}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
      ))}
    </>
  )
}
