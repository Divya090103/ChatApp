import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import EmojiMart from "./EmojiMart";
import { useState } from "react";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { TextField,InputAdornment,Stack,Box,IconButton, Tooltip } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
const InputField=()=>{
  const [showEmoji, setShowEmoji] = useState(false);
  const  [showAttach, setShowAttach] = useState(false);

  const AttachIcon=[
         {id:1,
      icon:<PhotoCameraIcon/>,
    text:'Camera'},
           {id:2,
            icon:<AddPhotoAlternateOutlinedIcon/>,
            text:'Gallery'
           },
          {id:3,
            icon:<DescriptionOutlinedIcon/>,
            text:'Document'
          },
          {id:4,
            icon:<CurrencyRupeeOutlinedIcon/>,
            text:'Pay'
          }

         ];
  return(
  <>
 <Stack direction="row" spacing={3}>
      {/* Text Input Field */}
      <Box sx={{ width: "100%", borderRadius: "1", position: "relative" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          sx={{ backgroundColor: "background.paper",position:'relative' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip  title="Attach file">

                <IconButton onClick={()=>setShowAttach(!showAttach)}>

                  <AttachFileIcon />
                </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip  title="Add Emoji">

                <IconButton  onClick={() => setShowEmoji(!showEmoji)}>
                  <SentimentSatisfiedAltOutlinedIcon />
                </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        {/* Emoji Picker */}
        {showEmoji && (
          <Box
            sx={{
              position: "absolute", // Position emoji picker absolutely
              bottom: "100%", // Place above the input field
              left: "80%", // Center it horizontally
              transform: "translateX(-50%)", // Adjust to center it
              zIndex: 999, // Make sure it's above other elements
            }}
          >
            <EmojiMart/>
          </Box>
        )}
      </Box>
    {showAttach&&<Box sx={{   position: "absolute", // Make the box appear on top
              bottom:'80%', // Position it above the AttachFileIcon button
              left: "0", // Align it to the left of the parent box
              zIndex: 10, // Ensure it's on top of other components
              backgroundColor: "background.default", // Optional for styling
              borderRadius: "8px", // Optional, gives a rounded background
              padding: "8px", // Optional, adds padding around the icons
    }}>
      <Stack >
        {AttachIcon.map((e)=>{
          return <Tooltip  key={e.id} title={e.text}>

          <IconButton >{e.icon}</IconButton>
          </Tooltip>
        })}
      </Stack>
    </Box>}

      {/* Send Button */}
      <Box
        sx={{
          width: "auto",
          height: "auto",
          backgroundColor: "primary.main",
          padding: 1,
        }}
      >
        <IconButton>
          <SendIcon />
        </IconButton>
      </Box>
    </Stack>
</>
  );
}
export default InputField;
 