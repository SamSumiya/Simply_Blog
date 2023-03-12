import { Button, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost } from 'utils/ToggleThemeProvider'
import { Markup } from 'interweave'


export const Display = () => {
  const [data, setData] = useState()
  const { postId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost(postId).then((data) => setData(data))
  }, [postId])

  return (
    // <div>
    //   <Button
    //     onClick={() => navigate(-1)}
    //   >
    //     Go Back
    //   </Button>
    <Box>

      {
        data ? (  
          <Box>
            <Markup content={data?.title} />
            <Markup content={data?.content} />
            {/* Title: { data?.title}
            Content: {data?.content} */}
          </Box>
          ) : (
            <>
            <a href="https://imgs.search.brave.com/GkpJGLJNA1amF2Ho76wl-g0JMPTFG9oTq8jiUUc2oqA/rs:fit:400:300:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzk1ODcy/L3NjcmVlbnNob3Rz/LzEyMzc2MTgvc3Bp/bm5lcnMuZ2lm.gif" >fds</a>          </>  
          )
        }
        </Box>
    
    // </div>
  )
}
