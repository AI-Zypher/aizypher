import React from "react";

const SponsorsPage = () => {
  return (
    <div id="sponsors" className="bg-black flex flex-col relative mt-20">
      <div className="relative flex items-center justify-center py-10 relative z-10">
        <h1 className="text-white text-6xl font-bold">Sponsor</h1>
      </div>

      {/* Image Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Centered Sections */}
      <div className="flex-1 flex flex-col items-center justify-start w-full px-4 relative z-10 mb-60">
      <div className="w-full max-w-6xl flex justify-between gap-4 mt-4">
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem] overflow-hidden">
            <img 
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/kothari.png" 
              alt="kothari-image" 
              className="w-full h-full object-contain"
            />
          </section>          
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem] overflow-hidden">
            <img 
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/bvk.png" 
              alt="BVK-image" 
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <h2>Section 3</h2>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      
      
    </div>
  );
};

export default SponsorsPage;
