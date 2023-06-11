import   React from "react";
import  Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar  from "./components/Sidebar";
import Profile_Component from "./components/Profile_Component";
import {Homepage} from "./components/Homepage";
import Tabss from "./components/Tabs";
import Dashboard from "./components/Dashboard";
import SignInSide from "./components/SignInSide";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import Status from "./components/Status";
function App() {
  return (
    <Box>
     <Navbar/>

      <Stack direction="row" spacing= {8}  >
        <ProjectDetail/>
      <Status/>
        
      </Stack>
      <Footer/>
    </Box>
  );
}

export default App;
