// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from 'App'
// import { fetchPost } from 'utils/ToggleThemeProvider'
// import { useNavigate, useParams } from 'react-router-dom'
// import { Box, Button } from '@mui/material'
// import { FlexBetween } from 'components/FlexBetween'
// import { BlogWrapper } from 'components/BlogWrapper'
// import { Markup } from 'interweave'

// const PostPage = () => {
//   const { currentPost } = useContext(ThemeContext)
//   const setCurrentPost = currentPost[1]
//   const { postId } = useParams()
//   const [post] = currentPost
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetchPost(postId).then((data) => setCurrentPost(data))
//   }, [postId, setCurrentPost])

//   return (
//     <Box display="flex" justifyContent="center" alignitem="center">
//       <Box>
//         <Button onClick={() => navigate(-1)}> Go Back</Button>
//       </Box>
//       <Box>asdasdasd
//         <Markup content={post?.content} />
//       </Box>
//     </Box>
//   )
// }

// export default PostPage
