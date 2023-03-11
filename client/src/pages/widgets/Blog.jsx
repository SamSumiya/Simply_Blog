import React, { useContext } from 'react';
import { blue } from '@mui/material/colors';
import { useTheme, Box, Typography } from '@mui/material';
import { FlexBetween } from '../../components/FlexBetween';
import { ThemeContext } from 'App';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'components/Image.jsx';
import { TimeAgo } from 'pages/widgets/TimeAgo';
import PostPage from 'pages/PostPage';
import { fetchUserPosts } from 'utils/ToggleThemeProvider';
// import { UserPost, UserPostList } from 'pages/userPostsList'

const Blog = ( {
  userId,
  postId,
  firstName,
  lastName,
  title,
  summary,
  createdAt,
  updatedAt,
  content,
} ) =>
{
  const { palette } = useTheme();
  const { userInfo, userPosts } = useContext( ThemeContext );
  const navigate = useNavigate();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const [ posts, setPosts ] = userPosts;
  // console.log(postId, 'PostID');
  const getUserPosts = async ( postId ) =>
  {

    setPosts( [] );


    const response = await fetch( `http://localhost:3002/users/post/${ postId }`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    } );
    const userPosts = await response.json();
    navigate( '/posts/user' );
    setPosts( userPosts );
  };
  // console.log(posts, 'what are my poostdsagf');
  // console.log(postId, 'postId');
  return (
    <FlexBetween>
      <FlexBetween gap="5rem">
        <Image />
        <Box>
          <Box

            onClick={() =>
            {
              getUserPosts( postId );
              // fetchUserPosts(userId).then((data) => setPosts(data))
              // navigate(`/posts/user/${userId}`)
            }}
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              color: blue[ 200 ]



            }}>
            <Typography
            >
              Posted by{' '}
              {' '}
              {firstName} {lastName}{' '}
            </Typography>
          </Box>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
            onClick={() =>
            {
              navigate( `/articles/${ postId }` );
            }}
          >
            {title}
          </Typography>

          <Typography color={medium} fontSize="0.75rem">
            {summary}
          </Typography>

          {/* <PostPage content={content} postId={postId} /> */}

          {/* <Typography color={medium} fontSize="0.75rem"> */}
          <TimeAgo timestamp={updatedAt} />
          {/* </Typography> */}
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Blog;
