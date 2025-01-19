import React from "react";
import { Stack,Box } from "@mui/material";
import SideBar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";
const Layout=()=>{
  const theme=useTheme()
  return<>
  <Box>
    <Stack direction={'row'} sx={{ height: "100vh" }}>
     <Box
          padding={2}
          sx={{
            backgroundColor: theme.palette.background.default,
            boxShadow: "rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <SideBar />
        </Box>
        <Box>
        
          <Outlet/>
          
        </Box>
    </Stack>
  </Box>
  </>
}
export default Layout;