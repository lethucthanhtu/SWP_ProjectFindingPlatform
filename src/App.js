import   React from "react";
import  Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar  from "./components/Sidebar";
import Profile_Component from "./components/Profile_Component";
import {Homepage} from "./components/Homepage";
import Tabss from "./components/Tabs";
import Dashboard from "./components/Dashboard";
import SignInSide from "./components/SignInSide";
function App() {
  return (
    <Box>
     <SignInSide/>
      <Stack direction="row" spacing= {8}  >
     
        
      </Stack>
    </Box>
  );
}

export default App;
