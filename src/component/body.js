
import React from "react";
import { Button } from "@material-tailwind/react";
import './body.css';

const BACK=()=>{
    return(
        <>
        <div className="bg-black-400">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className=" m-12  ">
            <p className=" font-9xl text-2xl decoration-solid  text-bold"><span className="text-blue-300 text-2xl inline-block"> WE CARE </span>  About  your daily  life style 
            </p>
            <span className="text-xl ">we are dedicated  to mental health of children ,
                adolescent and adults since last 15 years.
                we help you address academics,Relation, 
                behaviour & emational concern.</span>
                <Button className="text-xl rounded-full m-6">Get in touch</Button>
            </div>
            <div className="img mt-12">
            <img src="Rectangle 26.png" alt="Workplace" usemap="#workmap" width="400" height="379" className="img1"/>
             <img src="Rectangle 27@2x.png" alt="Workplace" usemap="#workmap" width="400" height="379" className="img2"/>       
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="image1" href="computer.htm"/>
  <area shape="rect" coords="290,172,333,250" alt="image2" href="phone.htm"/>
  <area shape="rect" coords="337,300,44" alt="ellipse" href="coffee.htm"/>
</map>
                </div>
                
                <div className="clear-left"> 
                    <img src="Ellipse 9.png" alt="Workplace" usemap="#workmap" width="400" height="379" className="img3"/>
                    </div>

        </div>
        
        </div>
        
        <div className="parag m-48  px-12 py-24 item-center "> 
                    <span className="text-blue-300 text-2xl "> Health TOPICS </span>
                    <p className="text-2xl  block font-bold">Find trusted information on medical condition from our experts. </p>
                    <form className="">
  <input type="search" placeholder="Cancer"/>
  <button type="submit">Cancer</button>
</form>
                
                </div>
        
        </>

    )
}
export default BACK