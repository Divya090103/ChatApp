import { Stack,Box, Divider, Button } from "@mui/material";
import React from "react";
const ShareMessage=()=>{
  return <>
  <Box p={2}>
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Button>Media</Button>
      <Button>Links</Button>
      <Button>Docs</Button>
    </Stack>
    <Divider/>
  </Box>
  </>

}
export default ShareMessage;