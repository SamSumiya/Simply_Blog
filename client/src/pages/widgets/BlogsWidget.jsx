import { ThemeContext } from 'App'
import { useContext, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Stack } from '@mui/material'
import Blog from 'pages/widgets/Blog'
import { formateDateToDescendingOrder } from 'utils/ToggleThemeProvider'
import { useTheme } from '@emotion/react'
import { LeftNav } from 'components/LeftNav'
import { RightNav } from 'components/RightNav'

export const BlogsWidget = () => {
  const { userInfo } = useContext(ThemeContext)
  const { userPosts } = useContext(ThemeContext)
  const [posts, setPosts] = userPosts
  const { token } = userInfo
  const { palette } = useTheme()

  const getAllPosts = async () => {
    const allPosts = await fetch('http://localhost:3002/posts/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await allPosts.json()
    const formatedData = formateDateToDescendingOrder(data)
    setPosts(formatedData)
  }

  useEffect(() => {
    getAllPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid xs={6.5} sm={6.5} md={6.5} lg={6.5} xl={6.5} >
      <Stack
        container
        // flexDirection='row'
        // justifyContent='space-between'
        spacing={2}
      >
        {posts &&
          posts?.map(
            ({
              _id,
              userId,
              title,
              firstName,
              lastName,
              summary,
              updatedAt,
              date,
              content,
            }) => (
              <Blog
                key={_id}
                title={title}
                postId={_id}
                userId={userId}
                firstName={firstName}
                lastName={lastName}
                summary={summary}
                date={date}
                updatedAt={updatedAt}
                content={content}
              />
            ),
          )}
      </Stack>
    </Grid>
  )
}
