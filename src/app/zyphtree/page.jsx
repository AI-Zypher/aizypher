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
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.67753145259!2d80.1794634118377!3d13.032541286488744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d62bc6942b%3A0x8cd23707b2ddfb87!2sSRM%20Easwari%20Engineering%20College!5e1!3m2!1sen!2sin!4v1732164490748!5m2!1sen!2sin"
        className="w-[600px] h-[450px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
            </div>
            <div className='flex flex-row justify-center'>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves.png" alt="" className="w-auto h-1/2"/>
                <img src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves.png" alt="" className="w-auto h-1/2"/>
            </div>

        </div>
        );  
        };

export default zyphtree;