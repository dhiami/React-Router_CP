import React from "react";
export default function Rate ({rate,setrate}) {
    const arrHeart =[1,2,3,4,5];
    return(
        <div className="rateContainer">
            {arrHeart.map ((el)=>(
            <span onClick={()=>{setrate(el)}}>
                {el <= rate ? (<i class="fas fa-heart"></i>) :(<i class="far fa-heart"></i>) }
                </span>
            ))}
        </div>
    );
}