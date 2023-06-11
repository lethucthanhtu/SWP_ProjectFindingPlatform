import { AppBar,Tab,Tabs } from '@mui/material'
import React from 'react'

export default function Tabss( ) {

 

const [value,setValue] = React.useState(0);

const handleTabs = (e,val) => {
    console.warn(val)
    setValue(val)
}

  return (
    <div>
        <h1>React Material UI | Tabs</h1>
        {/*  */}
        <div>
    <Tabs value={value} onChange={handleTabs}>
        <Tab label="Item 1"/>
        <Tab label="Item 2"/>
        <Tab label="Item 3"/>
    </Tabs>
        </div>
       {/*  */}
<TabPanel value={value} index={0}> Item 1 detail </TabPanel>
<TabPanel value={value} index={1}> Item 2 detail </TabPanel>
<TabPanel value={value} index={2}> Item 3 detail </TabPanel>



    </div>
  )
}

function TabPanel(props)
{

const {children,value,index}=props;

return(
    <div>
        {
            value===index && (
                <h1>{children}</h1>
            )
        }
    </div>
)

}