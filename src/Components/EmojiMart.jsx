import React from "react";
import EmojiPicker from 'emoji-picker-react';
import { useTheme } from "@emotion/react";
const EmojiMart=()=>{
  const theme=useTheme();

  return <>
  <EmojiPicker theme={theme.palette.mode}/>
  </>
}
export default EmojiMart;