import React from "react";
//import { NavLink } from "react-router-dom";
import './index.css'
//import LogoI from '../src/images/Logo-img.png'
 import home from '../src/images/Home.webp'
import Common from "./Common";
const Home=()=>{
    return (
        <>
        <Common name=" Grow Your Business with "
        imgsrc={home}
        visit='/service'
        btname="Get Started"/>
        </>
    )
}
export default Home;