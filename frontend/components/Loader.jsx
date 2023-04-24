import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 bg-black left-0 w-full h-full flex justify-center items-center">
      <Image  width={50} height={50} alt="Loading..." src="/assets/spinner.svg" />
    </div>
  );
};

export default Loader;
