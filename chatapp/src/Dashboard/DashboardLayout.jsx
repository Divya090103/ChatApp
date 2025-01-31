import { Box, Stack } from "@mui/material";

import React from "react";
import Chat from "./Chat";
import Message from "../Components/Message";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import ShareMessage from "../Components/SharedMessage";
import StarredMessg from "../Components/StarredMessg";
import { useTheme } from "@emotion/react";
const DashboardLayout = () => {
  const app = useSelector((store) => store.app);
  const { open: res, type } = app.sidebar;
  const theme = useTheme();
  console.log(theme);
  const commonBoxStyles = {
    width:"100%",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  };

  const renderContent = (type) => {
    switch (type) {
      case "Contact":
        return <Contact />;
      case "media":
        return <ShareMessage />;
      case "starred":
        return <StarredMessg />;
      default:
        return null;
    }
  };

  return (
    <>
    <Stack direction={'row'}>    
       <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          overflowY:"auto"
        }}
      >
        <Chat theme={theme} />
      </Box>
      <Box
        sx={{
         width:"150vh",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Message />
      </Box>
      {res && <Box sx={commonBoxStyles}>{renderContent(type)}</Box>}
      </Stack>
 
    </>
  );
};

export default DashboardLayout;
