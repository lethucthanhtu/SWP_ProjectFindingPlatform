import * as React from 'react';
import { Box, Typography, styled,InputBase, Icon, FormControl,InputLabel,
  OutlinedInput,InputAdornment,IconButton, Container } from "@mui/material";
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ThemeProvider } from "@emotion/react";
import {theme} from "../theme";
import VisibilityIcon from '@mui/icons-material/Visibility';


const Profile_css = styled(Typography)({
  fontWeight: "bold",
  marginTop:"40px",
});

const Info = styled(Box)({
     backgroundColor: "whitesmoke",
     border:"0.5px solid black",
     marginLeft:"20px",
     height:"33px",
     borderRadius:"12px",
     boxShadow:"0.5",
  });

const Profile_Box = styled(Box)({
    marginRight:"60px",
})

const Visible= styled(FormControl)(({theme}) => ({
  
  
  display:"block",
  marginBottom:"12px",
  
}));

 const Typo = styled(Typography)(({theme}) => ({
   marginTop:"5px"

}));

  const Form_fill = styled("div")(({theme}) => ({
    display:"flex",
    borderRadius: theme.shape.borderRadius,
    marginTop:"12px",

 }));

 const Visible_fill = styled(FormControl)(({theme}) => ({
  display:"flex",
  paddingTop:"5px"
}));

function Profile_Component() {
// function
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  return (
    <Box sx={{
      
      backgroundColor:"white",
      border:"1px solid white",
       height:"100px",
      paddingTop:"20px",
      width:"60%",
       
    }}>
        {/* Profile */}
      <Profile_css>
         
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } } } >
          Profile
        </Typography>
      </Profile_css>
    {/* Name */}
    <Form_fill>
      <Typography>
        Name
      </Typography>
    <Info>
            <InputBase placeholder="" />

        </Info>
    </Form_fill>
         {/*Email  */}
         <Form_fill>
      <Typography>
        Email
      </Typography>
    <Info>
            <InputBase placeholder="" />

        </Info>
    </Form_fill>
{/* Phone */}

<Form_fill>
      <Typography>
        Phone
      </Typography>
    <Info>
            <InputBase placeholder="" />

        </Info>
    </Form_fill>
{/* Password */}
<Visible_fill>
      <Typo>
        Password
      </Typo>
    

            {/* <InputBase placeholder="Search here..." /> */}
            {/* <Icon >
            <VisibilityIcon/>
            </Icon> */}

  {/* visibility */}
  
  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput sx={{
          borderRadius:"20px",
        }}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
  
 
        
    </Visible_fill>
{/* Confirm Password */}
<Visible_fill>
      <Typo>
        Confirm
     
        Password
      </Typo>
    
            {/* <InputBase placeholder="Search here..."  />
            <Icon  >
              <VisibilityIcon />
            </Icon> */}

{/* Visibility */}


<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm </InputLabel>
          <OutlinedInput sx={{
          borderRadius:"20px",
        }}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end"  >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>


 



       
    </Visible_fill>



    </Box>
  );
}

export default Profile_Component;
