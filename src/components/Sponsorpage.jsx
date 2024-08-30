import React from "react";

const MirrorImage = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col relative">
      {/* Title Section */}
      <div className="flex items-center justify-center py-10 relative z-10">
        <h1 className="text-white text-6xl font-bold">Sponsor</h1>
      </div>

      {/* Image Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/white-bg.png"
          alt="Mirrored Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Sections */}
      <div className="flex-1 flex flex-col items-center justify-start w-full px-4 relative z-10 mb-60">
        <div className="w-full max-w-6xl flex justify-between gap-4 mt-4">
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white hover:border-green-500 transition-all h-[12rem]">
            <h2>Section 1</h2>
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white hover:border-green-500 transition-all h-[12rem]">
            <h2>Section 2</h2>
          </section>
          <section className="flex-1 bg-transparent text-white flex items-center justify-center border border-white hover:border-green-500 transition-all h-[12rem]">
            <h2>Section 3</h2>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-green-600 text-white flex justify-between items-center py-4 px-6 border-t border-white relative z-10">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500">Privacy Policy</a>
          <a href="#" className="hover:text-green-500">Terms and Conditions</a>
        </div>
        <div>
          <p>Copyright SRM 2024</p>
        </div>
      </div>
    </div>
  );
};

export default MirrorImage;
