import React from "react";
//import { NavLink } from "react-router-dom";
import './index.css'
//import LogoI from '../src/images/Logo-img.png'
//import home from '../src/images/home-logo.jpg'
import Common from "./Common";
import about from '../src/images/about1.webp'
const About=()=>{
    return (
        <>
        <Common name=" Welcome to About Page "
        imgsrc={about}
        visit='/contact'
        btname="Contact Now"
        />
        </>
    )
}
export default About;