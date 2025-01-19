import { useTheme } from "@emotion/react";
import { Box ,IconButton,Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React  from "react";
const Profile=()=>{
  const theme=useTheme();
  return<>
  <Box sx={{ backgroundColor: theme.palette.background.paper,
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      height: "100%",
      width: "60vh",
      display: "flex",
      flexDirection: "column",}}>
        <Stack p={1} spacing={1}>
          {/* profile */}
          <Stack alignItems={'center'} direction={'row'}>
            <IconButton color="text.primary">
              <ArrowBackIcon/>
            </IconButton>
            <Typography variant="h5" color="text.primary">Profile</Typography>
          </Stack>

          {/* Avatar or upload photo */}
            
        </Stack>

  </Box>
  </>
}
export default Profile;