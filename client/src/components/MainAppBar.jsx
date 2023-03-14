import { Typography, AppBar, Box, Button, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { ThemeContext } from 'App'

const MainAppBar = () => {
  const { userInfo } = useContext(ThemeContext)
  const [token] = userInfo
  const [isLogin] = useState(true)
  const [user, setUser] = userInfo
  const navigate = useNavigate()
  const theme = useTheme()
  const dark = theme.palette.primary.dark
  const mediumMain = theme.palette.neutral.mediumMain
  const location = useLocation() 

  return (
    <AppBar
      sx={{ padding: 2 }}
      position="static"
      display="flex"
      mt="3rem"
    >
      <Box display="flex" gap="3rem">
        <Box sx={{ alignSelf: 'center' }}>
          <Typography fontSize="1.2rem" fontWeight="bold" color={mediumMain}>
            {user && user.user && user.user.firstName
              ? `Hi, ${user.user.firstName}`
              : 'Welcome to Simply Blog ❤️'}
          </Typography>
        </Box>
        {token?.token && location.pathname !== '/' ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white' }}
            onClick={() => navigate(-1)}
          >
            {' '}
            GO BACK
          </Button>
        ) : undefined}

        {token && (
          <Button sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: dark }}>
            {userInfo[0] && (
              <Box sx={{ textDecorationLine: 'none' }}>
                <Link to="/create"> Create New Post </Link>
              </Box>
            )}
          </Button>
        )}
        <Button sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          {isLogin && userInfo[0] ? (
            <Link to="/login">
              <Box
                onClick={() => {
                  setUser(null)
                  localStorage.clear('user')
                }}
              >
                Logout
              </Box>
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Button>
      </Box>
    </AppBar>
  )
}

export default MainAppBar
