import React from "react";

function Main (props){
    return (
        <div className="w-[300px] h-[400px] bg-[#999] grid rounded-[20px] overflow-hidden">
            <div className="ey w-[100%] h-[230px]" >
                < img className="h-[100%] w-[100%]" src={props.picture} />
            </div> 
            <div className="textiin heseg h-[270px] m-[30px]">
                <p>{props.garchig}</p>
                
            </div>
        </div>
    )
} 
export default Main
