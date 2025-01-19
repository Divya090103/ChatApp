import {
  Stack,
  Box,
  IconButton,
  Divider,
  Tab,
  Tabs,
  Typography,
  Grid2,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { updateSidebar } from "../redux/slices/app";
import { useState } from "react";
import { faker } from "@faker-js/faker";
const ShareMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Stack>
          <Box sx={{ backgroundColor: theme.palette.background.paper }}>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton
                onClick={() => {
                  dispatch(updateSidebar({ type: "Contact" }));
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" color="text.primary">
                Sharred Messages
              </Typography>
            </Stack>
          </Box>
          <Divider />

          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Media" />
              <Tab label="Links" />
              <Tab label="Docs" />
            </Tabs>
          </Box>

          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid2 container spacing={2} p={1}>
                   {
                    [0,1,2,3,4,5,6,7,8,9].map((el)=>{
                      return <Grid2 >
                         <img  width={100} src={faker.image.avatar()} alt={faker.person.fullName()}/>
                      </Grid2>
                    })
                   }
                  </Grid2>
                );
                case 1:
                  return(
                    <Typography>the returned document</Typography>
                    )
              default:
                break;
            }
          })()}
        </Stack>
      </Box>
    </>
  );
};
export default ShareMessage;
