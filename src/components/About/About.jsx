import React from "react";
import Navbar from "../Navbar";
import ab from './About.module.css'

const About = () =>{
    return(
        <div>
            <Navbar/>
            <div className={ab.head}>
                <h1>About Page</h1>
            </div>
        </div>
    )
}

export default About