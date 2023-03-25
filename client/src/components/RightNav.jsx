import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Button, useTheme, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { ThemeContext } from 'App';

export const RightNav = () =>
{
	const { userInfo } = useContext( ThemeContext );
	const [ token ] = userInfo;
	const [ isLogin ] = useState( true );
	const [ user, setUser ] = userInfo;
	const navigate = useNavigate();
	const theme = useTheme();
	const dark = theme.palette.primary.dark;
	const mediumMain = theme.palette.neutral.mediumMain;
	const location = useLocation();
	return (
		<Grid xs={2.75} sm={2.75} md={2.75} lg={2.75} xl={2.75}>
			<Stack>
				<Stack>
					<Box
						sx={{
							width: '100%',
							height: 80,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '1.3rem',
							fontWeight: 'bold',
						}}
					>
						<Typography fontSize="1.2rem" fontWeight="bold" color={mediumMain} sx={{ textDecoration: "none" }}>
							{user && user.user && user.user.firstName
								? `Hi, ${ user.user.firstName }!`
								: 'Welcome to Simply Blog ❤️'}
						</Typography>
					</Box>
				</Stack>
				<Stack>
					{token?.token && location.pathname !== '/' ? (
						<Button
							variant="contained"
							sx={{ backgroundColor: 'white' }}
							onClick={() => navigate( -1 )}
						>
							GO BACK
						</Button>
					) : undefined}
				</Stack>
				<Stack>
					<Button sx={{ width: "100%", '&:hover': { backgroundColor: theme.palette.primary.light } }}>
						{isLogin && userInfo[ 0 ] ? (
							<Link to="/login" style={{ textDecoration: 'none' }}>
								<Box
									onClick={() =>
									{
										setUser( null );
										localStorage.clear( 'user' );
									}}
								>
									<Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold', }}>
										Logout
									</Typography>
								</Box>
							</Link>
						) : (
							<Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
						)}
					</Button>
					<Stack>
						{token && (
							<Button
								sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: dark }}
							>
								{userInfo[ 0 ] && (
									<Box sx={{ textDecorationLine: 'none' }}>
										<Link to="/create" style={{ textDecoration: 'none' }} > Create New Post </Link>
									</Box>
								)}
							</Button>
						)}
					</Stack>
				</Stack>
			</Stack>
		</Grid>
	);
};
