// import React, { useContext, useEffect } from 'react';
// import { BlogWrapper } from 'components/BlogWrapper';
// import Grid from '@mui/material/Unstable_Grid2';
// import
// {
//   Box,
//   useTheme,
//   Pager,
//   useMediaQuery,
//   Button,
// } from '@mui/material';
// import logo512 from 'assets/logo512.png';
// import { FlexBetween } from 'components/FlexBetween';
// import Blog from 'pages/widgets/Blog';

// import { Link, useNavigate } from 'react-router-dom';
// import { ThemeContext } from 'App';

// const BlogWidget = ( {
//   title,
//   userId,
//   firstName,
//   lastName,
//   summary,
//   updatedAt,
//   date,
//   content,
//   postId,
//   createdAt,
// } ) =>
// {
//   const { palette } = useTheme();
//   const isNonMobileScreens = useMediaQuery( '(min-width: 980px)' );

//   return (
//     <Grid
//       // the grid has "12" spaces
//       // the number that you feed the size prop is the number of those spaces that it takes up
//       // for example xs={12} = 12/12 = 1 item per line
//       // 
//       xs={12}
//       sm={12}
//       md={6}

//       lg={4}

//       xl={4}


//     >


//       {/* <BlogWrapper m="2rem auto"> */}
//         <Blog
//           title={title}
//           postId={postId}
//           userId={userId}
//           firstName={firstName}
//           lastName={lastName}
//           summary={summary}
//           createdAt={createdAt}
//           updatedAt={updatedAt}
//           date={date}
//           content={content}
//         />
//         {/* <Button onClick={() => navPost()}>Details BUTTON</Button>
//       <Link to={`/articles/${postId}`}>Details</Link> */}
//       {/* </BlogWrapper> */}
//     </Grid>
//   );
// };

// export default BlogWidget;
