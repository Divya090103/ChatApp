import {Avatar, Box, Divider, Stack,Typography} from '@mui/material'
const ChatElement=({data})=>{
  return(
    <>
    <Box sx={{
      backgroundColor:'background.default',
      borderRadius:2,
    }} p={1}>
      <Stack direction={'row'} spacing={1}>
        <Avatar src={data.avatar}/>
          <Box>
            <Stack direction='row' spacing={2} alignItems={'center'} justifyContent={'space-around'}>
              <Stack>
                <Typography variant="body1" color="text.primary">{data.name}</Typography>
                <Typography variant='body2' color="text.secondary">{data.lastMessage}</Typography>

              </Stack>
              <Stack>
                <Typography variant="body2" color="text.secondary">{data.time}</Typography>
              </Stack>
            </Stack>
          
          </Box>
          <Divider/>
      </Stack>
    </Box>
    </>
  )
}
export default ChatElement;