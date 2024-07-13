import React from "react";
import { useState } from "react";

const TrafficLight = () => {
    const [ color, setColor] = useState("red");
    

    return (
        <div>
            <div className='trafficTop container d-flex justify-content-between flex-column container-black mt-5'></div>
            <div className='container d-flex justify-content-between flex-column container-black rounded-3 py-3'> 
            <div className={`redLight ${color=="red" ? "selected" : " "}`} onClick={()=>{
                    setColor("red")
                }}></div>
                <div className={`yellowLight ${color=="yellow" ? "selected" : " "}`} onClick={()=>{
                    setColor("yellow")
                }}></div>
                <div className={`greenLight ${color=="green" ? "selected" : " "}`} onClick={()=>{
                    setColor("green")
                }}></div>
            </div>
        </div>
    );
};

export default TrafficLight;