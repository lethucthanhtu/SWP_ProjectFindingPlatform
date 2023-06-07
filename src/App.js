import   React from "react";
import  Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar  from "./components/Sidebar";
import Profile_Component from "./components/Profile_Component";
import {Homepage} from "./components/Homepage";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing= {8}  >
       <Homepage/>
        
      </Stack>
    </Box>
  );
}

export default App;
