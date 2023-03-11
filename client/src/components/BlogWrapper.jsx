import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const BlogWrapper = styled(Box) (({theme}) => ({
	padding: '3rem  1rem ', 
	backgroundColor: theme.palette.background.alt,
	borderRadius: '0.75rem',
	width:'85%',
	alignitem: 'center',
}))