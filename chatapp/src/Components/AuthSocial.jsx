import { Divider, IconButton, Stack } from "@mui/material";
import { FaGoogle,FaGithub ,FaTwitter } from "react-icons/fa";
import React from "react";
const AuthSocial=()=>{
  return<>
  <Stack alignItems={'center'}>
    <Divider
    sx={{
      typography:'overline',
      color:'text.disabeled',
      "&: :before,::after":{
        borderTopStyle:'dashed'
      }}}>Or</Divider>

      <Stack  direction="row" spacing={2} alignItems={'center'}>
       <IconButton>
        <FaGoogle/>
       </IconButton>
          <IconButton>
              <FaGithub/>
          </IconButton>
          <IconButton>
            <FaTwitter/>
          </IconButton>
      </Stack>
  </Stack>
  </>
}
export default AuthSocial;