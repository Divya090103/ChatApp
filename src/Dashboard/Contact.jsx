import {
  Avatar,
  Box,
  Divider,
  Button,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { faker} from "@faker-js/faker";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch } from "react-redux";
import { toogleSidebar, updateSidebar } from "../redux/slices/app";

const Contact = () => {
  const dispatch=useDispatch();

  return (
    <>
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 10%" },
          p: 1,
          backgroundColor: "background.paper",
        }}
        color={"text.primary"}
        
      
      >

        <Stack direction="column">
          <Box sx={{ background: "theme.pallete.background.paper" }} p={1}>
            <Stack direction={"row"} alignItems={"center"} sx={{justifyContent:'space-between'}}>
              <Typography variant="h5">Contact Info</Typography>
              <IconButton
                onClick={() => {
                  dispatch(toogleSidebar());
                }}
              >
                <CloseOutlinedIcon />
              </IconButton>
            </Stack>
            <Divider />
          </Box>

          <Stack sx={{ alignItems: "center", marginTop: "5%" }} fontWeight={600}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Avatar src={faker.image.avatar()}  alt={faker.person.fullName()}/>
              <Typography color="text.primary">
                {faker.person.fullName()}
              </Typography>
            </Stack>
            <Typography variant="body3" color="text.primary">
              {faker.phone.number("###-###-####")}
            </Typography>

            <Box sx={{ marginTop: "4%" }}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Stack sx={{ alignItems: "center" }}>
                  <IconButton>
                    <CallOutlinedIcon />
                  </IconButton>
                  <Typography color="text.primary">Voice Call</Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <IconButton>
                    <VideocamIcon />
                  </IconButton>
                  <Typography color="text.primary">Video call</Typography>
                </Stack>
              </Stack>
            </Box>
            <Typography></Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          <Box p={2}>
            <Typography variant="h5">About</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Divider />

          <Box p={2}>
            <Stack direction={'row'} alignItems={'center'}  spacing={2} sx={{justifyContent:'space-between'}}>

              <Typography variant='subtitle1'>Media, Links &Docs</Typography>
              <Button onClick={()=>{console.log("uodatw")
                dispatch(updateSidebar ({type:'media'}))}}>401 <KeyboardArrowRightOutlinedIcon /></Button>
            </Stack>
            <Stack direction='row' spacing={2} alignItems={'center'}>
                {[1,2,3].map((el)=>{
                  return <Box>
                    <img src={faker.image.avatar()} width={100} alt={faker.person.fullName()}/>
                  </Box>
                })}
              </Stack>
          </Box>
          <Divider />

          <Stack direction={"row"} alignItems={"center"} p={2} sx={{justifyContent:'space-between'}}>
            <Typography>
              <IconButton>
                <StarBorderIcon />
              </IconButton>
              Starred Message
            </Typography>
            <IconButton>
              <KeyboardArrowRightOutlinedIcon onClick={()=>{dispatch(updateSidebar({type:'starred'}))}} />
            </IconButton>
          </Stack>

          <Divider />
          <Stack direction={"row"} alignItems={"center"} spacing={6} p={2} sx={{justifyContent:'space-between'}}>
            <Typography>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              Mute Notifications
            </Typography>
            <Switch />
          </Stack>

          <Divider />
          <Stack p={2}>
          <Typography>1 group in common</Typography>
          <Stack spacing={2} alignItems={'center'} p={2} direction={'row'}>
            <Avatar />
            <Typography variant="subtitle">Coding monk</Typography>
          </Stack>
          <Stack direction={'row'} spacing={0.5}>
             <Button startIcon fullWidth variant="outlined">Block</Button>
             <Button startIcon fullWidth variant='outlined'>Delete</Button>
          </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Contact;
