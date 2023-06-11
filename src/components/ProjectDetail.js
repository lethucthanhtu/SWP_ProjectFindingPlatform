import React from 'react'
import fpt from "../assets/img/fpt_software.jpg";
import { Divider } from '@mui/material';
import "../assets/ProjectDetail.css";
function ProjectDetail() {
  return (
    <div id='body'>

    <div id="Content">
        <div id='part1'>
          <div id='head'>
                <h1>Project Name</h1>
                <img src={fpt} />
          </div>
               

        </div>
        {/*  */}
        <div id='part2'>
              <h1>Description</h1>
              <span></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.</p>
           
        </div>
      <div id='part3'>
        <h1>Requirement</h1>
        <p>Requirement 1</p>
        <p>Requirement 1</p>
        <p>Requirement 1</p>
        <p>Requirement 1</p>
        <p>Requirement 1</p>

      </div>

      <div id='part4'>
        <h1>Deliverable</h1>
        <p>Deliverable 1</p>
        <p>Deliverable 1</p>
        <p>Deliverable 1</p>
        <p>Deliverable 1</p>
        <p>Deliverable 1</p>
        <p>Deliverable 1</p>
      </div>

    </div>

    {/* Status */}
    <div id="Status"></div>







    </div>

    

    
  )
}

export default ProjectDetail