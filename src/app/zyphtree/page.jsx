import React from "react";

const Zyphtree = () => {
    return (
        <div className="relative h-screen bg-custom-gradient overflow-x-hidden">
            <div className="inset-0 bg-red-grid">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center pt-10 px-6 md:px-10">
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/srmlogo.png"
                    alt="SRM Logo"
                    className="h-16 md:h-24 w-auto"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zypher-main.png"
                    alt="Zypher Main"
                    className="h-16 md:h-24 w-auto"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/zyplogo.png"
                    alt="Zyph Logo"
                    className="h-16 md:h-28 w-auto"
                />
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center mt-8">
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/tree1234.png"
                    alt="Tree"
                    className=" lg:w-[70%]  h-auto"
                />
            </div>

            {/* Heading Section */}
            <div className="flex flex-col items-center font-italic mt-10 md:mt-14">
                <h1 className="text-3xl md:text-5xl text-center">
                    JOIN US IN MAKING A DIFFERENCE
                </h1>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap lg:flex-wrap justify-center gap-6 mt-10 md:mt-14 px-4">
                <div className="flex flex-col items-center w-full md:w-[45%] lg:w-[30%]">
                    <h1 className="text-xl md:text-2xl lg:text-4xl pb-2">
                        DR. SAKTHI GANESH M
                    </h1>
                    <a href="/zyphtree/tree1">
                        <button className="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded-full text-sm md:text-lg lg:text-xl border border-black hover:bg-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-opacity-50">
                            CHECK NOW
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center w-full md:w-[45%] lg:w-[30%]">
                    <h1 className="text-xl md:text-2xl lg:text-4xl pb-2">
                        DR. BALIKA J. CHELLIAH
                    </h1>
                    <a href="/zyphtree/tree2">
                        <button className="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded-full text-sm md:text-lg lg:text-xl border border-black hover:bg-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-opacity-50">
                            CHECK NOW
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center w-full lg:w-[30%]">
                    <h1 className="text-xl md:text-2xl lg:text-4xl pb-2">
                        Shri. DEEPAK SRIVATSAVA
                    </h1>
                    <a href="/zyphtree/tree3">
                        <button className="bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded-full text-sm md:text-lg lg:text-xl border border-black hover:bg-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-opacity-50">
                            CHECK NOW
                        </button>
                    </a>
                </div>
            </div>

            {/* Leaves Section */}
            {/* <div className="flex flex-row justify-center mt-10">
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png"
                    alt="Leaves"
                    className="w-auto h-20 md:h-24 lg:h-24"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png"
                    alt="Leaves"
                    className="w-auto h-20 md:h-24 lg:h-24"
                />
            </div> */}
            <div className="bg-[url('https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/leaves1.png')] bg-repeat-x bg-contain h-24 w-full mt-10">
            </div>
            </div>
        </div>
    );
};

export default Zyphtree;
