import React from "react";
import img from "../../public/images/ok.jpg"
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <div className="bg-[#edf2f4]  ">
      <div className="mx-auto container p-10 ">
        <h1 className="text-center text-[12px] text-sm uppercase tracking-wide font-light text-gray-600">
          Get To Know More
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px] leading-7 mb-2 ibm-plex-sans-medium ">
          About me{" "}
        </h1>
        <div className="  grid grid-cols-1 md:grid-cols-12 mx-auto justify-evenly container items-center md:text-[20px]  text-center p-2 md:p-4 ">
          <div className=" flex justify-center   col-span-6" >
          <img src={img} className="h-80 w-80   hidden md:flex   rounded-[20px] " alt="" srcset="" />

          </div>
          <div className="col-span-6 text-[16px] xl:me-20 mb-3 ">
            Hi, I'm <span className="text-orange-500 font-bold">Yogesh Shinde</span> 👦🏻, an engineering student at Pravara Rural
            Engineering College, Loni, approved by AICTE and affiliated with
            SPPU. I have a keen interest in technology and enjoy exploring and
            implementing new solutions. expertise in web
            development and  data structures and
            algorithms (DSA), I am eager to apply my knowledge to engaging
            projects. I will be graduating in 2026.</div>
        </div>
        <div className="text-center">
          <Link to={"/about"} className="p-3 border-2 border-gray-500 rounded-lg hover:text-red-600 transition duration-100">Academic Journey</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
