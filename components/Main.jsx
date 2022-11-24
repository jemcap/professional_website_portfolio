import React from 'react'
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import profile from "../public/profile.png";
import logo from "../public/jec_logo_1.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

const Main = () => {
  return (

<main className=" bg-white text-center w-full h-screen md:px-20 lg:px-40 font-roboto">
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest'>welcome to my digital portfolio of </p>
            <h2 className="text-5xl py-2 text-gray-800 font-bold dark:text-teal-400 md:text-[120px] ">
              Design & Development.
            </h2>
            <p className="text-md leading-8 text-gray-800 uppercase text-sm tracking-widest max-w-xl mx-auto md:text-l">
              Websites • UX/UI design • Cloud Applications.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="www.google.com"
                className="text-center shadow-lg p-2 rounded-xl  dark:bg-white"
              >
                <AiFillGithub />
              </a>
              <a
                href="www.google.com"
                className="text-center shadow-lg p-2 rounded-xl  dark:bg-white"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="www.google.com"
                className="text-center shadow-lg p-2 rounded-xl  dark:bg-white"
              >
                <AiFillInstagram />
              </a>
            </div>
            </div>
            
        </div>
    </main>
  )
}

    
      


export default Main