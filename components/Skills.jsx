import React from "react";
import html5 from "../public/assets/html.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"></div>
      <h2 className="py-4">I've built projects using</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={html5} width={64} height={64} alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={html5} width={64} height={64} alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={html5} width={64} height={64} alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={html5} width={64} height={64} alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
