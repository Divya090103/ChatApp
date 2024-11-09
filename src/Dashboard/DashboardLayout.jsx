import { Avatar, Box, Stack, Switch } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton } from "@mui/material";
import React, { useState, useMemo } from "react";
import Logo from "../Images/Logo.png";
import Chat from "./Chat";
import Message from "../Components/Message";

const DashboardLayout = () => {
  const [mode, setMode] = useState("light");
  const [selected, setSelected] = useState(0);
  const icons = [
    { id: 1, IconComponent: SmsRoundedIcon },
    { id: 2, IconComponent: PeopleOutlineIcon },
    { id: 3, IconComponent: CallOutlinedIcon },
    { id: 4, IconComponent: SettingsOutlinedIcon },
  ];

  const onToggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          background: {
            default: mode === "dark" ? "rgba(18, 18, 18, 1)" : "white", // Use a soft light blue in light mode
            paper: mode === "dark" ? "rgba(30, 30, 30, 1)" : "grey.200", // Light blue-white mix for paper in light mode
          },
          primary: {
            main: "#1976d2", // Primary blue color, suitable for both modes
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#212121", // White for dark mode, dark grey for light mode
            secondary: mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)", // Slightly lighter text color
          },
          divider: mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)", // Adjusted for both modes
        }, // Add more properties as needed

      }),
    [mode]
  );
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" sx={{ height: "100vh"}}>
        <Box
          padding={2}
          sx={{
            backgroundColor: theme.palette.background.default,
            boxShadow:"rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Stack
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 54,
                width: 54,
                borderRadius: 1.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                alt="not Loaded.."
                src={Logo}
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
              />
            </Box>

            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              sx={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" spacing={2} alignItems="center">
                {icons.slice(0, 3).map((icon) => (
                  <IconButton
                    key={icon.id}
                    onClick={() => setSelected(icon.id)}
                    sx={{
                      backgroundColor:
                        selected === icon.id ? "primary.main" : "transparent",
                      borderRadius: "50%",
                      padding: selected === icon.id ? "8px" : "12px",
                    }}
                  >
                    <icon.IconComponent
                      style={{
                        color: theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    />
                  </IconButton>
                ))}
                <hr style={{ width: "100%", color: "grey" }} />
                <IconButton
                  onClick={() => setSelected(4)}
                  sx={{
                    backgroundColor: selected === 4 ? "primary.main" : "transparent",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                >
                  <SettingsOutlinedIcon
                   style={{
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  }}
                  />
                </IconButton>
              </Stack>

              <Stack sx={{ alignItems: "center" }}>
                <Switch
                  checked={mode === "dark"}
                  onChange={onToggleMode}
                  color="default"
                />
                <Avatar alt="Remy Sharp" src="<Sw/static/images/avatar/1.jpg" />
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 30%" },
            backgroundColor:theme.palette.background.paper,
              
          }}
        >
          <Chat theme={theme}/>
        </Box>
       <Box sx={{
             flex: { xs: "1 1 100%", md: "1 1 70%" },
            backgroundColor: theme.palette.background.default,

          }}>
        <Message/>
       </Box>

      </Stack>
    </ThemeProvider>
  );
};

export default DashboardLayout;
