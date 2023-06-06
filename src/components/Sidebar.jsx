import { Avatar, Box,Container,List, Switch,Button } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";

const list = styled(ListItemButton)({
  display:"block",
  marginLeft:"20px",
  paddingLeft:"20px",
  fontSize:"10px",
  width:"40px",
})



function Sidebar  () {
  return (
     
       <Box sx={{
        display:"block",
        marginLeft:"150px",
        border:"1px solid black",
        marginTop:"60px",
        paddingBottom:"20px",
        height:"500px",
        borderRadius:"50px",
        backgroundColor:"skyblue",
        width:"250px"
       }}>
        <ListItem sx={{
          display:"block",
          textAlign:"center",
           marginLeft:"20px",
           marginRight:"20px",
           width:"100px",
            
        }}>
          
          <img src="https://www.najlepszecv.pl/wp-content/uploads/2018/12/komentarz_o_cv_2.png"/>
          
            
            
          
        </ListItem>
{/* Your Profile */}
        <ListItem sx={{
          display: 'block',
          marginLeft:"72px",

        }}>

        <Button component="a" href="#" sx={{
          display:"block",
          width:"165px",
          height:"50px",
          backgroundColor:"white",
          borderRadius:"50px",
        color:"black",

        }} disableRipple >
           
           <ListItemText primary="Your Profile" sx={{
            marginLeft:"30px",
            alignItems:"center",
           }} />

         </Button>
       
{/* On-going */}

         <ListItemButton component="a" href="#">
           
           <ListItemText primary="On-going" sx={{color:"white"}} />
         </ListItemButton>
     
{/* Applications */}

         <ListItemButton component="a" href="#">
          
           <ListItemText primary="Applications"  sx={{color:"white"}} />
         </ListItemButton>
      
{/* Balance */}

         <ListItemButton component="a" href="#">
          
           <ListItemText primary="Balance" sx={{color:"white"}} />
         </ListItemButton>
      
{/* Option */}

         <ListItemButton component="a" href="#">
           
           <ListItemText primary="Option" sx={{color:"white"}} />
         </ListItemButton>
       
{/* Option */}

         <ListItemButton component="a" href="#">
           
         <ListItemText primary="Option" sx={{color:"white"}} />
         </ListItemButton>
       

        </ListItem>
           



      </Box>
    
  );
};
export default Sidebar