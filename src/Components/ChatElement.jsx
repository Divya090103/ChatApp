import {Avatar, Box, Divider, Stack,Typography} from '@mui/material'
const ChatElement=({data})=>{
  console.log(data);
  return(
    <>
    <Box sx={{
      widht:"100%",
      backgroundColor:'background.default',
      borderRadius:2,
    }} p={1}>
      <Stack direction={'row'} spacing={1}>
        <Avatar src={data.avatar}/>
          <Box>
            <Stack direction='row' spacing={2}>
              <Stack>
                <Typography variant="body1" color="text.primary">{data.name}</Typography>
                <Typography variant='body2' color="text.secondary">{data.lastMessage}</Typography>

              </Stack>
              <Stack>
                <Typography variant="body2" color="text.secondary">{data.time}</Typography>
              </Stack>
            </Stack>
            <Divider/>
          </Box>
      </Stack>
    </Box>
    </>
  )
}
export default ChatElement;