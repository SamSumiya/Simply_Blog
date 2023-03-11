import { ThemeContext } from 'App'
import { useContext, useEffect } from 'react'
import Blog from 'pages/widgets/BlogWidget'
import BlogWidget from 'pages/widgets/BlogWidget'
import { formateDateToDescendingOrder } from 'utils/ToggleThemeProvider'
export const BlogsWidget = () => {
  const { userInfo } = useContext(ThemeContext)
  const { userPosts } = useContext(ThemeContext)
  const [posts, setPosts] = userPosts
  const { token } = userInfo

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
    <>
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
            <BlogWidget
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
    </>
  )
}
