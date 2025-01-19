import { Container ,Stack, Typography} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../Images/Logo.png";

const MainLayout=()=>{
  return<>
  <Container sx={{mt:5}} maxWidth="sm">
    <Stack alignItems={'center'}> 
    <img src={logo} alt="Logo.png" width={150}/>
      <Typography variant="h3" component="h3" sx={{fontFamily:"monospace"}}>Chat'n Chill</Typography>
    </Stack>
    <Outlet/>
  </Container>
  </>
}
export default MainLayout;