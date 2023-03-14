import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPost } from "utils/ToggleThemeProvider";

export const UserPostDetail = ({ postID, title, firstName, lastName }) => {
  const [userPost, setUserPost] = useState();
  useEffect(() => {
    fetchPost(postID)
      .then((data) => setUserPost(data))
      .catch((error) => console.log(error));
  }, [postID]);

  return (
    <Box onClick={() => console.log(postID)}>
      <Typography>
        <Link to={`${postID}`}>{title}</Link>
		
      </Typography>
	  <Typography> Article by {firstName} {lastName}
	  {console.log(typeof new Date(userPost?.updatedAt))}
		</Typography>
    </Box>
  );
};
