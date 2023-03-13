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
import MainAppBar from '../../components/MainAppBar'; 
const pages = [ 'Write a post', 'All Authors', '' ];

const Navbar = () =>
{
  const { name } = useContext( ThemeContext );
  const [ darkTheme, setDarkTheme ] = name;
  const yellow = colorTokens.lightMode.light;
  const isNonMobileScreens = useMediaQuery( '(min-width: 1000px)' );
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
        <MainAppBar/>
      ) : null}
    </Box>
  );
};

export default Navbar;
