import React from "react";

const MirrorImage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      <img
        src="/white-bg.png"
        alt="Mirrored Background"
        style={{
          objectFit: "cover",
        }}
        className="w-full h-full" 
      />
    </div>
  );
};

export default MirrorImage;
