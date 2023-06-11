import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/img/banner1.png";
import logo2 from "../assets/img/banner2.png";
import GroupsIcon from "../assets/img/group_icon.png";
import Goal from "../assets/img/goal_icon.png";
import Connection from "../assets/img/connections_icon.png";
import fpt from "../assets/img/fpt_software.jpg";
import KMS from "../assets/img/Kms.jpg";
import Saigon from "../assets/img/saigon.svg";
import Startup from "../assets/img/startup.png";
import Hitech from "../assets/img/hitech.png";
import Bean from "../assets/img/Bean.png";

import "../assets/Banner.css";

export const Homepage = () => {

 
// 





  return (
    <div>
      <div id="Banner1">
      <div id="block1">
          <div id="box2">
            <h1 id="text4">&#123;Develop&#125; </h1>
          </div>
{/*  */}
          <div id="box4">
            <h1 id="">your</h1>
            <h1 id="text4_sup">&lt;Career&#47;&gt;</h1>
          </div>   
{/*  */}
          <div>
            <p id="text3_sup">Bridging academia and industry for real-world </p>
            <p id="text3_sup">project collaboration.</p>
          </div>
{/*  */}
          <div id='button1'>
            <button>Button</button>
            
          </div>
          {/*  */}
          <div id='button1'>
            <button>Button</button>
            
          </div>
        </div>

        <img id="img1" src={logo} />
      </div>
      {/* Why find hub? */}
      <div id="question">
        <h1 id="why">Why </h1>
        <h1 id="findhub"> findhub </h1>
        <h1 id="quote">?</h1>
      </div>
      {/*  */}
      <div>
        <ul id="Icon_Container">
          <li>
            <img id="Icons" src={GroupsIcon} />
            <p id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
          <li>
            <img id="Icons" src={Goal} />
            <p id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
          <li>
            <img id="Icons" src={Connection} />
            <p id="text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
              mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
              pellentesque mattis.
            </p>
          </li>
        </ul>
      </div>
      {/* Who with us */}
      <div id="contact">
        <h1 id="Header2">Who with us?</h1>
        <div id="company">
          <img id="line1" src={fpt} />
          <img id="line1" src={KMS} />
          <img id="line1" src={Saigon} />
        </div>
{/*  */}
        <div id="company">
          <img id="line2" src={Startup} />
          <img id="line2" src={Hitech} />
          <img id="line2" src={Bean} />
        </div>
      </div>
      {/* Find suitable */}
      <div id="Banner1">
        <img id="img1" src={logo2} />
{/*  */}
        <div id="block1">
          <div id="box2">
            <h1 id="text2">Find</h1>
            <h1 id="text2_sup">suitable</h1>
          </div>
{/*  */}
          <div id="box3">
            <h1 id="text2">project</h1>
            <h1 id="text2_sup">for you</h1>
          </div>
{/*  */}
          <div>
            <h1 id="text3">right now !</h1>
          </div>
{/*  */}
          <div>
            <p id="text3_sup">Bridging academia and industry for real-world </p>
            <p id="text3_sup">project collaboration.</p>
          </div>
{/*  */}
          <div id='button1'>
            <button>Button</button>
            
          </div>
          {/*  */}
          <div id='button1'>
            <button>Button</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
