import {
  AppBar,
  Avatar,
  InputBase,
  Toolbar,
  Typography,
  styled,
  TextField,
  Button,
  Box,
  Stack,
  Container,
  IconButton,
  Chip
} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import About from "./About";
import Project from "./Project";
import Profile from "./Profile";
import Home from "./Home";
import theme from "../theme";
import "../assets/Navbar.css"
 
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "#000",
   
});

const Links = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  marginLeft:"50px",
  width: "350px",
  height: "19px",
  backgroundColor: "#fff",
  color: "#000",
  fontSize:"18px",
 
});
const Search = styled("div")(() => ({
  backgroundColor: "gray",
  color:"white",
  padding: "0 10px",
   height: "28px",
  
  width: "270px",
  boxShadow: "0.5 0.5 0.5 0.5 0.5",
  marginTop: "10px",
  position: "relative",
   
}));

const Avatars = styled(Chip)(({ theme }) => ({
  paddingTop:0,
  paddingBottom:0,
  paddingRight:"90px",
}));



const Icons_Container = styled(IconButton)(({ theme }) => ({
  backgroundColor: "skyblue",
   
  width: "30px",
  height: "29px",
  marginRight:"20px",
 
   position: "absolute",
   left: "680px",
   top:"57%",
   transform: "translateY(-50%)",
   "&:hover":{
    backgroundColor: "skyblue",
    borderRadius:"29px",
   },
}));

const Findhub = styled(Typography)(({ theme }) => ({
  marginLeft: "120px",
  fontWeight:"bold",
  
  
}));
const Searching = styled(Box)(({ theme }) => ({
  display:"flex",
  marginLeft: "120px",
  width:"280px",
  height:"50px",
   
 
   
   
}));



function  Navbar()  {
  return (
    <AppBar position="absolute"  sx={{
      height:"60px",
      width:"100%"
    }}>
      <StyledToolbar>
        {/* Findhub */}
       <div id="FindHub">
       <h1 id="Find">Find</h1>

        <h1 id="Hub">Hub</h1>
       </div>
        
        
        
   

        
        
{/* Thanh Search */}

        <Searching >
           
         
            <InputBase position="relative" placeholder="Search here..." sx={{
              backgroundColor:"white",
              color:"black",
              width:"100%",
              borderRadius:"40px",
              height:"40px",
             marginTop:"10px",
              border:"2px solid black",
              paddingLeft:"2px",
            }} />
         
           
          

          <Icons_Container position="absolute" >

          <IconButton disableRipple sx={{
            height:"28px",
            borderRadius:"20px",
          }} >
          
          <SearchIcon />
        
        </IconButton>
          </Icons_Container>
           
           
           
           
        </Searching>
{/* Links + Avatars */}
<Links>
<Stack direction={"row"} spacing={5}>
          <Home />
          <About />
          <Project />
          <Profile />
        </Stack>
</Links>
       
<Stack direction="row" spacing={1} sx={{
    marginRight:"10px",

}}>
       
      <Chip sx={{display:"flex",
      marginRight:"20px",
    width:"112px",
  height:"42px",
}}
         avatar={<Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
        {/* <Avatars>
          <Avatar src="https://www.najlepszecv.pl/wp-content/uploads/2018/12/komentarz_o_cv_2.png" />
        </Avatars> */}


 {/* K đc dung */}
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar