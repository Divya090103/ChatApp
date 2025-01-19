import { Stack ,TextField,Button, Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthSocial from "../../Components/AuthSocial";
const Register=()=>{
  const onSubmit=()=>{

  }
  return<>
  <Stack sx={{marginTop:"20px"}}>
   <Typography variant="h4" component={'h4'}>Get Started With Chill</Typography>
   <Stack spacing={2}>
    <Stack direction={'row'}>
    <Typography>Already  have an account?</Typography>
    <Link to="/auth/login">Sign in</Link>
    </Stack>
    <Stack spacing={5} direction={'row'}>
      <TextField label="First Name" type="text" variant="outlined"/>
      <TextField label="Last Name" type="text" variant="outlined"/>
    </Stack>

    <TextField id="mail" label="Email" variant="outlined" />
    <TextField id="password" 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth ></TextField>
    <Button sx={{backgroundColor:'black',color:'white',fontSize:'20px'}} onClick={onSubmit}>Create Account</Button>
   </Stack>
    <AuthSocial/>
  </Stack>
  </>
}
export default Register;