import { Stack,Box,IconButton ,Switch} from "@mui/material"
import Logo from "../Images/Logo.png";
import { icons } from "../Data/Lists";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Profile from "../Dashboard/Profile";
import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../Dashboard/ThemeProvider";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const SideBar=()=>{

const navigate=useNavigate();
  const [selected, setSelected] = useState(0);
  const { toggleTheme, mode } = useContext(ThemeContext);
  const theme = useTheme();


  return<>
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
                    onClick={() => {
                      console.log('clicked iconn',icon.id)
                      setSelected(icon.id)
                      
                    }}
                    sx={{
                      backgroundColor:
                        selected === icon.id ? "primary.main" : "transparent",
                      borderRadius: "50%",
                      padding: selected === icon.id ? "8px" : "12px",
                    }}
                  >
                    {icon.IconComponent}
                  </IconButton>
                ))}
                <hr style={{ width: "100%", color: "grey" }} />
                <IconButton
                  onClick={() => 
                    {setSelected(4)
                      if(selected==4){
                    navigate('/settings')
                  }}}
                  sx={{
                    backgroundColor:
                      selected === 4 ? "primary.main" : "transparent",
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
                  onChange={toggleTheme}
                  color="default"
                />
                {/* profile Avatar */}
                <Profile />
              </Stack>
            </Stack>
          </Stack>
  </>
}
export default SideBar