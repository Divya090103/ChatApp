import { Typography ,Stack} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthSocial from "../../Components/AuthSocial";
import LoginForm from "../../Components/Hook-Form/LoginForm";
//using the react hook form library for creating an validating the form
const Login=()=>{
  return<>
  <Stack spacing={2}>
   <Typography variant="h5">Login</Typography>
   <Stack direction={'row'}>
    <Typography variant="body2">New user?</Typography>
     <Link to="/auth/register" variant="subtitle2">Create an account</Link>
   </Stack>
     {/* Login form */}
    {/* AuthSocial */}
    <LoginForm/>
   <AuthSocial/>
  </Stack>
  </>
}
export default Login;