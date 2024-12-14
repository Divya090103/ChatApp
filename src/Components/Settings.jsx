import React, { useContext, useState } from "react";
import { Avatar, Box, IconButton, Stack, Typography, Divider, List, ListItem ,Dialog,DialogTitle} from "@mui/material";
import { useTheme } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import KeyIcon from "@mui/icons-material/Key";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { faker } from "@faker-js/faker";
import ThemeContext from "../Dashboard/ThemeProvider";

const Settings = () => {
  const theme = useTheme();
  const { toggleTheme}=useContext(ThemeContext);
  const [open,setOpen]=useState(false);

  const list = [
    {
      key: 0,
      title: "Notification",
      icon: <NotificationsIcon />,
      onClick: () => console.log("Notification Clicked"),
    },
    {
      key: 1,
      title: "Privacy",
      icon: <SecurityIcon />,
      onClick: () => console.log("Privacy Clicked"),
    },
    {
      key: 2,
      title: "Security",
      icon: <KeyIcon />,
      onClick: () => console.log("Security Clicked"),
    },
    {
      key: 3,
      title: "Theme",
      icon: <CircleOutlinedIcon />,
      onClick: () =>{
        setOpen(true)
    },
    },
  ];
  const handleClose=()=>{
    setOpen(false);
  }

  return (
    <Stack direction="row" sx={{ width: "100vw", height: "100vh" }}>
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: 320,
          background: theme.palette.background.default,
        }}
      >
        <Stack p={2} spacing={5}>
          {/* Header */}
          <Stack direction="row" alignItems="center">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5" color="text.primary">
              Settings
            </Typography>
          </Stack>

          {/* User Info */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={faker.image.avatar()}
              alt={faker.person.firstName()}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle1" color="text.primary">
                {faker.person.fullName()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {faker.person.jobTitle()}
              </Typography>
            </Stack>
          </Stack>

          {/* Settings List */}
          <Stack spacing={4}>
            {list.map((item) => (
              <React.Fragment key={item.key}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ cursor: "pointer" }}
                  onClick={item.onClick}
                  color={"text.primary"}
                >
                  {item.icon}
                  <Typography variant="body1" color="text.primary">
                    {item.title}
                  </Typography>
                </Stack>
                <Divider />
              </React.Fragment>
            ))}
          </Stack>
          {open&&<Dialog onClose={handleClose} open={open}>
      <DialogTitle>Chnage the  Theme</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button key={"light"} onClick={() => toggleTheme("light")}>  Light</ListItem>
        <ListItem button key={"dark"} onClick={()=>toggleTheme("dark")}>Dark
        </ListItem>
      </List>
    </Dialog>}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Settings;
