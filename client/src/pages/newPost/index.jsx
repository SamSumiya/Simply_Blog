import React from "react";
import Navbar from "pages/navbar";
import { Box, useMediaQuery, useTheme, Divider, Button } from "@mui/material";
import { MyPost } from "pages/widgets/MyPost.jsx";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate()

  return (
    <Box>
      <Navbar />
      {/* <Button onClick={() =>  navigate(-1)}
        > GO BACK</Button> */}
			<Divider sx={{ margin: '1.25rem 0' }}/>
      <Box width="100%" display="flex" justifyContent="center" ml='10px'>
        <Box  sx={{width: (isNonMobileScreens ? "80%" : "63%"), height: "calc(80vh - 200px)"}} >
          <MyPost />
        </Box>
      </Box>
    </Box>
  );
};

