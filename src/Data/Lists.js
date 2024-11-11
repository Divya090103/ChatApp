import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const MessageOptions=[
  { id: 1, title: "Reply" },
  { id: 2, title: "Forward" },
  { id: 3, title: "Resend" },
  { id: 4, title: "React" },
]
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
const ProfileOptions=[
  {title:'Profile',
    icon:<AccountCircleRounded/>
  },
   {title:'Settings',
    icon:<SettingsOutlined/>
   },
   {title:'Log Out',
    icon:<LogoutOutlinedIcon/>
   }
]
const icons = [
  { id: 1, IconComponent: <SmsRoundedIcon/> },
  { id: 2, IconComponent: <PeopleOutlineIcon/> },
  { id: 3, IconComponent: <CallOutlinedIcon/> },
  { id: 4, IconComponent: <SettingsOutlinedIcon/> },
];
export {MessageOptions,chats,ProfileOptions,icons};