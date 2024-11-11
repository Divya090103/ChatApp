import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,

  Divider,

} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";


import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { faker } from "@faker-js/faker";
import ChatHistory from "../Data/ChatHistory";

import InputField from "./InputField";

const Message = () => {
  return (
    <Stack>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {/* User Info Section */}
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            backgroundColor: "background.paper",
            padding: 1.5,
            borderRadius: 2,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={faker.image.avatar()} />
              <Box>
                <Typography variant="h6" color="text.primary">
                  {faker.person.fullName()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Online
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton>
                <VideocamIcon />
              </IconButton>
              <IconButton>
                <LocalPhoneIcon />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>

        {/* Chat Conversation Section */}
        <Box
          p={1}
          sx={{
            widht: "100%",
            flexGrow: 1,
            backgroundColor: "background.default",
            overflowY: "auto",
            overflowX: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <ChatHistory />
        </Box>

        {/* Message Input Section */}
        <Box
          sx={{
            padding: 1,
            backgroundColor: "background.default",
            borderRadius: 1,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ,position:'relative'
          }}
        >
          <InputField/>
         
        </Box>
      </Box>
    </Stack>
  );
};

export default Message;
