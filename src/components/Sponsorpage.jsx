import React from "react";

const SponsorsPage = () => {
  return (
    <div id="sponsors" className="bg-black flex flex-col items-center justify-center min-h-screen relative">
      <div className="relative flex items-center justify-center py-10 relative z-10">
        <h1 className="text-white text-6xl font-bold">Sponsors</h1>
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
      <div className="flex-1 flex flex-col items-center justify-start w-full px-4 relative z-10 mb-20">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/aayna.png"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/bhaga.PNG"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/national.PNG"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/rgd.jpg"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/silly.jpg"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/skt.jpg"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/k3academy.jpg"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white transition-all h-[12rem]">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/CUB.jpg"
              alt="sprint-image"
              className="w-full h-full object-contain"
            />
          </section>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
};

export default SponsorsPage;
