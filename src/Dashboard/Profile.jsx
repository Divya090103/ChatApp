import React from "react";
import { ProfileOptions } from "../Data/Lists";
import {Menu,MenuItem,Stack,IconButton,Avatar, Typography} from '@mui/material';
import { useState } from "react";
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
          return <MenuItem key={el.id}>
            <Stack direction='row' spacing={2}>
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