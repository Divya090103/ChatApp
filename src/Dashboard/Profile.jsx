import React from "react";
import { ProfileOptions } from "../Data/Lists";
import {Menu,MenuItem,Stack,IconButton,Avatar, Typography, backdropClasses} from '@mui/material';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleSidebar } from "../redux/slices/app";
import { useTheme } from "@emotion/react";
const Profile= () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [opn,setOpen]=useState(false);
  const dispatch=useDispatch();
const theme=useTheme();
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
          <Avatar alt="Remy Sharp" src="<Sw/static/images/avatar/1.jpg"  />
      
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {ProfileOptions.map((el) => {
          return <MenuItem key={el.id} sx={{backgroundColor:theme.palette.background.paper}}>
            <Stack direction='row' spacing={2} sx={{alignItems:'center'}}  onClick={()=>{dispatch(toogleSidebar())}}>
              <Typography>{el.title}</Typography>
              <IconButton>{el.icon}</IconButton>
            </Stack>
          </MenuItem>;
        })}
      </Menu>
    </>
  );
};
export default Profile;