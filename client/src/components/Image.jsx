import { Box} from '@mui/material'
import logo512 from 'assets/logo512.png'

export const Image = ({ image, size='200px' }) => {
	return (
		<Box width={size} height={size}>
			<img 
				src={logo512}
				alt="" 
				style={{ objectFit: 'cover', borderRadius: "50%" }}
				width={size}	
				height={size}
			/>
		</Box>	
	)
}