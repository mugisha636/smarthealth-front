import React from "react";
import dataproduct from './dataproduct';
import Itemcard from "./itemCard";


const Home = () => {
    // console.warn(Dataproduct.productdata)
    return (
        <>
        
        
        <span>
        
        </span>
        <section className="  container  pl-6 ">
        <h1 className="  text-2xl m-32 font-bld text-blue-300 p-12 font-30px">Meet our health expert</h1>
            <div className="row grid grid-cols-4  gap-6 justify-content-center">

              {dataproduct.productdata.map((item,index) =>{
                return(
                    <Itemcard  img={item.img} title={item.title} desc={item.desc}  key={index}/>
                   
                )
              }) }                          
              

            </div>

        </section>
        </>
    )
}
export default Home;