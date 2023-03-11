import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { Form } from './Form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate()

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        onClick={() => navigate('/')}
        sx={{ 
          '&:hover': { 
            cursor: 'pointer'
          }
        }}
      >
        <Typography
          fontSize="clamp(2rem, 3rem, 3.5rem)"
          color="primary"
          fontWeight="bold"
        >
          Simply Blog
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        padding="2rem"
        margin="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: '1.5rem', color: theme.palette.primary.dark }}
        >
          Welcome to Simply Blog!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default Login
