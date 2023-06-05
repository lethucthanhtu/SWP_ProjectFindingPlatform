import * as React from "react"
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import {Box,Stack,Link,List,ListItem,Container, Typography} from "@mui/material";
import { Navbar } from "./components/Navbar";
import Profile_Component from "./components/Profile_Component";
import CP_Home from "./components/CP_Home";
 
function App() {
   
  return (
    <Box sx={{backgroundColor: "" }}>
      <CP_Home/>
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
      <Sidebar/>
      <Profile_Component/>
    
      </Stack>
       

    </Box>
  );
}

export default App;
