import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Icon,
} from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import ChatElement from "../Components/ChatElement";
const GroupPage = () => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

  function generateChatList(count) {
    const chatList = [];

    for (let i = 0; i < count; i++) {
      chatList.push({
        id: faker.string.uuid(), // Unique ID
        name: faker.person.fullName(), // Random name
        avatar: faker.image.avatar(), // Random avatar URL
        lastMessage: faker.lorem.sentence(), // Random last message
        time: faker.date
          .recent()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), // Recent time formatted as a string
      });
    }

    return chatList;
  }

  const chatlist = generateChatList(10);
  const theme = useTheme();
 

  return (
    <>
     <Stack direction={"row"} spacing={2} sx={{ height: "100vh" }}>
  {/* left section */}
  <Box
    sx={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      height: "100%",
      width: "60vh",
      display: "flex",
      flexDirection: "column", // Makes the children stack correctly
    }}
  >
    {/* Top section (non-scrollable) */}
    <Stack spacing={2} p={2}>
      <Typography variant="h4" sx={{ color: "text.primary" }}>
        Groups
      </Typography>
      {/* Search component */}
      <TextField
        placeholder="Search"
        sx={{
          width: "100%",
          border: "1px solid black",
          borderRadius: "10px",
          fontSize: "40",
          color: "text.primary",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      {/* create a group */}
      <Stack
        spacing={1}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="subtitle"
          component={Link}
          sx={{ color: "primary.main" }}
         

        >
          Create a new Group
        </Typography>
        <IconButton  onClick={handleClickOpen}>+</IconButton>
      </Stack>
      <Divider />
    </Stack>

    {/* Scrollable chat list section */}
    <Stack
      spacing={2}
      sx={{
        flexGrow: 1, // Fills the remaining space
        overflowY: "auto", // Enables vertical scrolling
      }}
      p={1}
    >
      <Stack>
        <Typography color="text.primary">Pinned</Typography>
        {/* pinned groups */}
      </Stack>
      <Stack spacing={2}>
        <Typography color="text.primary">All Chats</Typography>
        {/* All chat lists */}
        {chatlist.length>0?chatlist.map((element) => {
          return <ChatElement key={element.id} data={element} />;
        }):<Typography color="text.primary">No chats found</Typography>}

      </Stack>
    </Stack>
  </Box>
  {open&&
  <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="h5">Create a Group</Typography>
            <IconButton onClick={handleClose}><CloseIcon/></IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
         <TextField placeholder="Group Name" label="Name"/>
        </DialogContent>
        <DialogActions>
          <Button>Create</Button>
        </DialogActions>
      </Dialog>
      </>}
  {/* right section */}
</Stack>

    </>
  );
};
export default GroupPage;
