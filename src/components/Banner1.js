 import React from 'react'
 import { Box, Typography } from '@mui/material'
 import logo from '../assets/img/banner1.png'
 import logo2 from '../assets/img/banner2.png'
 import GroupsIcon from '@mui/icons-material/Groups';
 import "../assets/Banner.css"
 export const Banner1 = () => {
   return (
     <div  >
      <div>
      <img id='Banner1' src={logo}/>
      </div>
      {/* Why find hub? */}
       <div id='question'>
       <h1 id='why'>Why  </h1>
       <h1 id='find_hub'>find hub</h1>
       <h1 id='quote'>?</h1>
       </div>
      {/*  */}
        <Box>
          <GroupsIcon/>
          <p>as</p>

          
        </Box>
{/* Who with us */}
        <div id='Header2'>
          <h1>Who with us?</h1>


        </div>
{/* Find suitable */}
        <div>
        <img  id='Banner1' src={logo2}/>
        </div>
     </div>
   )
 }
 
 