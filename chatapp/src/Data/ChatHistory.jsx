import React, { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  Box,
  Typography,
  Divider,
  Link,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { MessageOptions, chats } from "./Lists";

const ChatHistory = () => {
  // the dummy chat history

  //message options that are needed
  const Options = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
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
          {MessageOptions.map((el) => {
            return <MenuItem key={el.id}>{el.title}</MenuItem>;
          })}
        </Menu>
      </>
    );
  };

  return (
    <>
      <Box>
        {chats.map((el) => {
          switch (el.type) {
            case "message":
              switch (el.contentType) {
                case "text":
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: el.isOutgoing
                          ? "flex-end"
                          : "flex-start",
                        marginY: 1,
                      }}
                      key={el.id}
                    >
                      <Box
                        sx={{
                          maxWidth: "100%",
                          padding: 1.5,
                          backgroundColor: el.isOutgoing
                            ? "primary.main"
                            : "white",
                          borderRadius: 2,
                        }}
                      >
                        <Typography>{el.content}</Typography>
                      </Box>
                      <Options />
                    </Box>
                  );
                case "link":
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: el.isOutgoing
                          ? "flex-end"
                          : "flex-start",
                        marginY: 1,
                      }}
                      key={el.id}
                    >
                      <Box
                        sx={{
                          maxWidth: "75%",
                          padding: 1.5,
                          backgroundColor: el.isOutgoing
                            ? "primary.main"
                            : "white",
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body2" color="primary">
                          <Link href={el.content.url}>{el.content.url}</Link>
                        </Typography>
                      </Box>
                      <Options />
                    </Box>
                  );
                case "image":
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: el.isOutgoing
                          ? "flex-end"
                          : "flex-start",
                        marginY: 1,
                      }}
                      key={el.id}
                    >
                      <Box
                        sx={{
                          maxWidth: "75%",
                          padding: 1.5,
                          backgroundColor: el.isOutgoing
                            ? "primary.main"
                            : "grey.200",
                          borderRadius: 2,
                        }}
                      >
                        <img
                          src={el.content} // Assuming content contains the image URL
                          alt="message"
                          style={{ width: "100%", borderRadius: 8 }}
                        />
                      </Box>
                      <Options />
                    </Box>
                  );
                case "document":
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: el.isOutgoing
                          ? "flex-end"
                          : "flex-start",
                        marginY: 1,
                      }}
                      key={el.id}
                    >
                      <Box
                        sx={{
                          maxWidth: "75%",
                          padding: 1.5,
                          backgroundColor: el.isOutgoing
                            ? "primary.main"
                            : "grey.200",
                          borderRadius: 2,
                          boxShadow: 2, // Adds a subtle shadow for a lifted look
                          display: "flex",
                          flexDirection: "column", // Align content vertically
                          alignItems: "flex-start", // Align items to the start
                        }}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={2}
                          sx={{ width: "100%" }}
                        >
                          <IconButton
                            sx={{
                              backgroundColor: "grey.100",
                              borderRadius: "50%",
                              padding: 1,
                              "&:hover": {
                                backgroundColor: "grey.300", // Hover effect
                              },
                            }}
                          >
                            <ArticleOutlinedIcon
                              sx={{ color: "text.primary" }}
                            />
                          </IconButton>

                          <Typography
                            variant="body2"
                            sx={{
                              flex: 1, // Ensures the filename takes up available space
                              color: "text.primary",
                              fontWeight: 500, // Slightly bolder text for better readability
                            }}
                          >
                            {el.content.fileName}
                          </Typography>

                          <IconButton
                            sx={{
                              backgroundColor: "primary.light", // Slightly lighter background color
                              borderRadius: "50%",
                              padding: 1.2,
                              "&:hover": {
                                backgroundColor: "primary.main", // Hover effect
                              },
                            }}
                          >
                            <DownloadForOfflineIcon sx={{ color: "white" }} />
                          </IconButton>
                        </Stack>

                        <Box
                          sx={{
                            marginTop: 1,
                            width: "100%",
                            height: 1,
                            backgroundColor: el.isOutgoing
                              ? "primary.dark"
                              : "grey.300", // Divider style
                          }}
                        />
                      </Box>
                      <Options />
                    </Box>
                  );
                default:
                  return null;
              }

            case "divider":
              return (
                <Box
                  sx={{ display: "flex", justifyContent: "center", marginY: 1 }}
                  key={el.id}
                >
                  <Divider sx={{ width: "50%", marginY: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {el.content}
                  </Typography>
                  <Divider sx={{ width: "50%", marginY: 1 }} />
                </Box>
              );
            default:
              return null;
          }
          //here i want to add the icon of diiferet options
        })}
      </Box>
    </>
  );
};
export default ChatHistory;
