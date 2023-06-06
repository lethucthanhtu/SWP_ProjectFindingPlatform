import   React from "react";
import  Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar  from "./components/Sidebar";
import Profile_Component from "./components/Profile_Component";
import {Banner1} from "./components/Banner1";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing= {8} sx={{
        marginTop:"50px"
      }}>
       <Banner1/>
        
      </Stack>
    </Box>
  );
}

export default App;
