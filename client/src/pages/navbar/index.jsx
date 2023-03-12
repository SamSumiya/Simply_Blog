import React, { useState, useContext } from 'react';
import
{
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  AppBar,
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { colorTokens } from 'theme';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'App';
import { Link } from 'react-router-dom';

const pages = [ 'Write a post', 'All Authors', '' ];

const Navbar = () =>
{
  const { name } = useContext( ThemeContext );
  const [ darkTheme, setDarkTheme ] = name;
  const { userInfo } = useContext( ThemeContext );
  const [ user, setUser ] = userInfo;
  const token = '123';
  const theme = useTheme();
  const dark = theme.palette.primary.dark;
  const mediumMain = theme.palette.neutral.mediumMain;
  const yellow = colorTokens.lightMode.light;
  const isNonMobileScreens = useMediaQuery( '(min-width: 1000px)' );
  const [ isLogin ] = useState( true );
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }} width="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignitem="center"
        gap="1rem"
      >
        <Typography
          fontSize="clamp(2rem, 3rem, 3.25rem)"
          fontWeight="bold"
          color="#3d5afe"
          onClick={() => navigate( '/' )}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Simply Blog
        </Typography>
        <IconButton
          onClick={() =>
            darkTheme === 'dark' ? setDarkTheme( 'light' ) : setDarkTheme( 'dark' )
          }
        >
          {darkTheme === 'dark' ? (
            <DarkMode sx={{ color: 'white' }} />
          ) : (
            <LightMode sx={{ color: yellow }} />
          )}
        </IconButton>
      </Box>
      {isNonMobileScreens ? (
        <AppBar sx={{ padding: 2 }} position="static" display="flex" justifyContent="space-evenly" mt="3rem">
          <Box display="flex" gap="3rem">
            <Box sx={{ alignSelf: "center" }}>
              <Typography fontSize="1.2rem" fontWeight="bold" color={mediumMain}>
                {user && user.user && user.user.firstName
          
                  ? `Hi, ${ user.user.firstName }`
                  : 'Welcome to Simply Blog ❤️'}
              </Typography>

            </Box>
                  <Button variant="contained" sx={{backgroundColor: "white"}}onClick={() =>  navigate(-1)}
        > GO BACK</Button>
            {token && (
              <Button
                sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: dark }}
              >
                {userInfo[ 0 ] && (
                  <Box sx={{ textDecorationLine: 'none' }}>
                    <Link to="/create"> Create New Post </Link>
                  </Box>
                )}
              </Button>
            )}
            <Button sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
              {isLogin && userInfo[ 0 ] ? (
                <Link to="/login">
                  <Box onClick={() =>
                  {
                    setUser( null );
                    localStorage.clear( 'user' );
                  }}>Logout</Box>
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Button>
            
          </Box>
        </AppBar>
      ) : (
        <AppBar
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignitem="center"
          mt="5rem"
          gap="2rem"
        >
          {token && (
            <Typography fontSize="1.5rem" sx={{ color: darkTheme }}>
              Create New Post
            </Typography>
          )}
          <Typography fontSize="1.3rem" sx={{ color: darkTheme }}>
            Login
          </Typography>
        </AppBar>
      )}
    </Box>
  );
};

export default Navbar;
