import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import {
  Box,
  Typography,
  Divider,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
const ChatHistory = () => {
  // the dummy chat history
  const chats = [
    {
      id: "1",
      type: "divider",
      content: "Today",
    },
    {
      id: "2",
      type: "message",
      isOutgoing: false,
      contentType: "text",
      content: "Hey! Check out this awesome video.",
      time: "10:05 AM",
    },
    {
      id: "3",
      type: "message",
      isOutgoing: false,
      contentType: "video",
      content: "https://www.example.com/video.mp4",
      time: "10:06 AM",
    },
    {
      id: "4",
      type: "message",
      isOutgoing: true,
      contentType: "text",
      content: "Looks great! Also, here’s the document you needed.",
      time: "10:07 AM",
    },
    {
      id: "5",
      type: "message",
      isOutgoing: true,
      contentType: "document",
      content: {
        fileName: "Project_Plan.pdf",
        fileUrl: "https://www.example.com/documents/Project_Plan.pdf",
      },
      time: "10:08 AM",
    },
    {
      id: "6",
      type: "divider",
      content: "Yesterday",
    },
    {
      id: "7",
      type: "message",
      isOutgoing: false,
      contentType: "text",
      content: "Got any plans for the weekend?",
      time: "8:15 PM",
    },
    {
      id: "8",
      type: "message",
      isOutgoing: true,
      contentType: "image",
      content: "https://www.example.com/images/hike.jpg",
      time: "8:17 PM",
    },
    {
      id: "9",
      type: "message",
      isOutgoing: false,
      contentType: "text",
      content: "That place looks amazing! Where is it?",
      time: "8:18 PM",
    },
    {
      id: "10",
      type: "message",
      isOutgoing: true,
      contentType: "text",
      content: "It’s up in the mountains. Planning a hike there this weekend!",
      time: "8:20 PM",
    },
    {
      id: "11",
      type: "divider",
      content: "Last Wednesday",
    },
    {
      id: "12",
      type: "message",
      isOutgoing: false,
      contentType: "link",
      content: {
        url: "https://www.example.com",
        text: "Here’s the link to the website we discussed.",
      },
      time: "2:00 PM",
    },
    {
      id: "13",
      type: "message",
      isOutgoing: true,
      contentType: "text",
      content: "Thanks! I’ll check it out.",
      time: "2:05 PM",
    },
  ];

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
                          maxWidth: "75%",
                          padding: 1.5,
                          backgroundColor: el.isOutgoing
                            ? "primary.main"
                            : "grey.200",
                          borderRadius: 2,
                        }}
                      >
                        <Typography>{el.content}</Typography>
                      </Box>
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
                            : "grey.200",
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body2" color="primary">
                          <Link href={el.content.url}>{el.content.url}</Link>
                        </Typography>
                      </Box>
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
        })}
      </Box>
    </>
  );
};
export default ChatHistory;
