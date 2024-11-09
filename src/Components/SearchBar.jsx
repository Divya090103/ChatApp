import React from "react";
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArchiveIcon from '@mui/icons-material/Archive';
import {faker} from '@faker-js/faker'
import ChatElement from "./ChatElement";
const SearchBar = () => {
  function generateChatList(count) {
    const chatList = [];

    for (let i = 0; i < count; i++) {
        chatList.push({
          id: faker.string.uuid(),                 // Unique ID
            name: faker.person.fullName(),             // Random name
            avatar: faker.image.avatar(),            // Random avatar URL
            lastMessage: faker.lorem.sentence(),     // Random last message
            time: faker.date.recent().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Recent time formatted as a string
        });
    }

    return chatList;
}

const chatlist=generateChatList(10);
console.log(chatlist)

  return (
    <>   
    <Stack spacing={1}>
     <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%", // Adjust width as needed
        border:"1px solid black",
        borderRadius:"10px",
        padding:"1px",
      }}
      placeholder={'Search...'} // Add a placeholder text

    >
      <IconButton><SearchIcon/></IconButton>
     
    </Box>
  <Stack spacing={1.6}>
    <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
      <Box>
         <ArchiveIcon size={24}/>
      </Box>
      <Button>Archieve</Button>
    </Stack>
    <Divider/>
    </Stack>
    
<Stack direction={'column'} p={1}>
      <Typography  variant="h6" component="div"color="text.primary" >Messages</Typography>
      <Stack direction={'column'} spacing={1}>
      {chatlist.map((element)=>{
         return <ChatElement key={element.id} data={element}/>
      })}
      </Stack>


</Stack>

    </Stack>
    </>

  );
};

export default SearchBar;
