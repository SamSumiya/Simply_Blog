import { Button, Box, Card } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, deletePost } from "utils/ToggleThemeProvider";
import { Markup } from "interweave";
import { ThemeContext } from "App";
import MainAppBar from "components/MainAppBar";

export const Display = () => {
  const [data, setData] = useState();
  const { postId } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));    
  // console.log(user, "USER")

  useEffect(() => {
    fetchPost(postId).then((data) => setData(data));
  }, [postId]);



  const removePost = (postId) => {

   deletePost(postId).then(res => {
     navigate(`/`)
   })




  }
  return (
    <>
      <MainAppBar />
    <Box sx={{padding: "2rem"}}>
      <Card sx={{padding: "2rem", margin: "2rem"}}>
        {data ? (
          <Box>
            <Markup content={data?.title} />
            <Markup content={data?.content} />
          </Box>
        ) : (
          
          <a aria-details="this post is broken" alt="empty link" href="https://imgs.search.brave.com/GkpJGLJNA1amF2Ho76wl-g0JMPTFG9oTq8jiUUc2oqA/rs:fit:400:300:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzk1ODcy/L3NjcmVlbnNob3Rz/LzEyMzc2MTgvc3Bp/bm5lcnMuZ2lm.gif"> </a>
          
          )}

        {user?.user?._id === data?.userId ? <Button onClick={() => removePost(postId)}>Delete Post</Button> : null}
      </Card>
    </Box>
          </>
  );
};
