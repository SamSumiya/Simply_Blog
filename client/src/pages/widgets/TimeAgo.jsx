import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  const theme = useTheme()
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `Posted ${timePeriod} ago`
  }

  return (
    <Box >
      <Typography sx={{ color: theme.palette.neutral.dark}}>
        &nbsp; <i> {timeAgo}</i>
      </Typography>
    </Box>
  )
}
