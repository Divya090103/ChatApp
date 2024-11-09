import { Box ,Stack,Typography} from "@mui/material";
import React from "react";
import SearchBar from "../Components/SearchBar";
const Chat=(theme)=>{
  return(
    <>
    <Box sx={{
      background:"theme.pallete.background.default",
      position:'relative',
      boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
      overflow:'auto',
      height:"100%"
    }}>
      <Stack direction={'column'} alignItems={'left'} p={1}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={"space-between"} >
        <Typography variant="h4" gutterBottom component="div" color="text.primary">Chats</Typography>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </Stack>
          <SearchBar theme={theme}/>
      

      </Stack>
    
    </Box>
    </>
  )
}
export default  Chat;