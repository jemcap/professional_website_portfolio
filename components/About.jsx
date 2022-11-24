import React from "react";
import Image from "next/image";
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

const About = () => {
  return (
    <section>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-[500px] md:w-[500px]">
        <Image
          src={profile}
          layout="fill"
          objectFit="cover"
          className="transform h-64 shadow-lg bg-gray-100 w-80 transition duration-500 hover:scale-125 hover:bg-teal-300 flex justify-center items-center"
        />
      </div>
      <div className="p-10 py-20">
        <h3 className="text-5xl py-1 mx-10 dark:text-white md:text-7xl text-gray-800 relative group">
          👋 Hi! I'm <span className="text-teal-500">Josh</span>
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-teal-400 transition-all group-hover:w-full"></span>
        </h3>
        <p className="text-2xl py-2 mx-10 my-10 leading-12 text-gray-800 dark:text-gray-200 md:text-6xl">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          esse et dignissimos harum architecto aliquam?
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-14 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="text-4xl font-medium pt-8 pb-2  ">
            Beautiful Designs
          </h3>
          <p className="py-2 text-2xl">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="text-3xl font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2 text-2xl">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-3xl font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2 text-2xl">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
