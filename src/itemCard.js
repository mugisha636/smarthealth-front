import React from "react";



const Itemcard = (props) => {
    return (
        <div className="  mx-0  mb-4   md:grid-cols-3 gap-6 justify-center">
   <div class=" card   p-0 overflow-hidden  h-100 shadow hover:scale-10 space-x-4" >
  <img src={props.img} class="card-img-top img-fluid  h-40 w-30 " alt=" " />
  <div class="card-body  p-5 ">
    <h5 class="card-title text-blue-300">{props.title}</h5>
    {/* <h5 class="card-title  text-blue-900"> ${props.price}</h5> */}
    <p class="card-text text-black-300"> {props.desc}</p>
    {/* <button class=" btn  btn-success text-blue-900 ">Add to cart</button> */}
  </div>
</div>

        </div>

    );
};
export default Itemcard;