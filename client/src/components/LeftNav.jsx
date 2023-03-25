import React, { useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import
{
	Stack,
	Typography,
	IconButton,
	Box,
	useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import { ThemeContext } from 'App';
import { useNavigate } from 'react-router-dom';
import { DarkMode, LightMode } from '@mui/icons-material';
import { colorTokens } from 'theme';

export const LeftNav = () =>
{
	const { name } = useContext( ThemeContext );
	const [ darkTheme, setDarkTheme ] = name;
	const yellow = colorTokens.lightMode.light;
	const isNonMobileScreens = useMediaQuery( '(min-width: 1000px)' );
	// const navigate = useNavigate();

	const { userInfo } = useContext( ThemeContext );
	const [ user, token ] = userInfo;
	const theme = useTheme();
	const dark = theme.palette.primary.dark;
	const mediumMain = theme.palette.neutral.mediumMain;
	const navigate = useNavigate();
	console.log(theme, 'fsdafsadfsadf')
	
	return (
		<Grid xs={2.75} sm={2.75} md={2.75} lg={2.75} xl={2.75}>
			<Stack>
				<Box
					display="flex"
					justifyContent="center"
					alignitem="center"
					gap="1rem"
				>
					<Typography
						fontSize="clamp(2rem, 3rem, 3.25rem)"
						fontWeight="bold"
						color={theme.palette.primary.dark}
						onClick={() => navigate( '/' )}
						sx={{
							// color: ,
							'&:hover': {
								cursor: 'pointer',
							},
						}}
					>
						Simply Blog
					</Typography>
					<IconButton
						onClick={() =>
							darkTheme === 'dark'
								? setDarkTheme( 'light' )
								: setDarkTheme( 'dark' )
						}
					>
						{darkTheme === 'dark' ? (
							<DarkMode sx={{ color: 'white' }} />
						) : (
							<LightMode sx={{ color: yellow }} />
						)}
					</IconButton>
				</Box>
			</Stack>
		</Grid>
	);
};
