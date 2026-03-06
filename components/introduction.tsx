"use client";
import React from "react";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 flex justify-center">
        <Image
          src="/image-9.png"
          priority
          width="600"
          height="600"
          alt="Profile pic"
          className="transiton duration-500 hover:scale-105"
          
        ></Image>

        <div className="flex-col justify-center max-w-md">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-center md:text-left md:text-5xl drop-shadow-lg">
            Si lo puedes imaginar, 
          
          <TypeAnimation
            sequence={[
              "puedes programarlo",
              1000,
              "puedes diseñarlo",
              1000,
              "puedes desarrollarlo",
              1000,
              "puedes cambiar el mundo con código",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className=" block font-bold text-secondary md:text-4xl"
          />
          </h1>
        </div>
    
      </div>
    </div>
  );
};

export default Introduction;
