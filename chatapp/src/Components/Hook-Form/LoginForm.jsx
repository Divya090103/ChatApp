import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const LoginForm=()=>{
  const onSubmit=()=>{
    

  }
    return<>
  <Stack direction="column" spacing={4}>
   <TextField  id="username" 
          label="Username" 
          type="text" 
          variant="outlined" 
          fullWidth ></TextField>
   <TextField id="password" 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth ></TextField>
   <Link>Forgot Password</Link>
   <Button sx={{backgroundColor:'black',color:'white',fontSize:'20px'}} onClick={onSubmit}>Login</Button>
  </Stack>
  </>
}
export default LoginForm