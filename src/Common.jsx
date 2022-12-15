import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
//import LogoI from '../src/images/Logo-img.png'
//import home from '../src/images/home-logo.jpg'
const Common=(props)=>{
    return (
        <>
        <section id='header' className="display-flex align-items-center">
         <div className="container-fluid">
            <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>  {props.name} <strong className="brand-name">Pratik-Brands</strong> </h1>
                        <h2 className="my-3">
                            We don’t just build websites, we build websites that Sells
                        </h2>
                        <div>
                            <NavLink className="btn-get-started" to={props.visit}>{props.btname}</NavLink>
                        </div>
                    </div>
                   
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt="developer" />
                    </div>
                    </div>

                 </div>
                </div> 
             </div>
        </section>
        </>
    )
}
export default Common;