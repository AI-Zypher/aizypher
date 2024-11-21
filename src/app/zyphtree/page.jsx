import React from "react";
import Image from "next/image";``

const zyphtree = () => {
    return (
        <div className="bg-[#1c2e27]">  
            <div className="min-h-screen"> 
                <div className="flex flex-row justify-between items-center"> 
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/srmlogo.png" alt="" className="w-auto h-1/2" />
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zyplogo.png" alt="" className="w-auto h-[100px]"/>
                </div>
                
                <div className="relative flex flex-col items-center flex-end">
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/branch.png" alt="" className="w-[80%] h-auto  "/>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zypher-main.png" alt="" className="absolute top-[50%] left-1/2 transform -translate-x-1/2  w-1/3 h-auto z-20"/>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/root.png" alt="" className="w-[120%]"/>
                </div>
            </div>
            <div className="flex flex-col items-center font-italic">
             <h1 className="text-[50px] pb-20">
             JOIN US IN MAKING A DIFFERENCE <br />
             </h1>
             
             <h1 className="text-[50px] pb-20 text-center">
             RECIPIENT NAME : ZYPHER<br/>LOCATION : SRM RAMAPURAM
             </h1>             
            </div>
            <div className="flex flex-col items-center pb-20">
            <img src="https://placehold.co/600x600" alt="" className=""/>
            </div>
            <div className='flex flex-row justify-center'>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves.png" alt="" className="w-auto h-1/2"/>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves.png" alt="" className="w-auto h-1/2"/>
            </div>

        </div>
        );  
        };

export default zyphtree;