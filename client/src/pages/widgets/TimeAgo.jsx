import { Box } from '@mui/material'
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `Posted ${timePeriod} ago`
  }

  return (
    <Box>
      &nbsp; <i> {timeAgo}</i>
    </Box>
  )
}
