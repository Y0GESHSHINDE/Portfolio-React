import React from "react";
import img from "../../public/images/ok.jpg";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

function div() {
  const academicData = [
    {
      title: "B.E - Electronic and Telecommunication Engineering",
      duration: "Nov. 2022 – May 2026",
      institution: "Pravara Rural Engineering College",
      location: "Loni, Maharashtra",
    },
    {
      title: "Higher Secondary Certificate Examination",
      duration: "Jun. 2021 – Feb. 2022",
      institution: "D.K. More Janata Junior College",
      location: "Vadgoanpan Sangamner, Maharashtra",
    },
    {
      title: "Secondary Certificate Examination",
      duration: "Jun. 2019 – Feb. 2020",
      institution: "D.K. More Janata Vidyalaya",
      location: "Vadgoanpan Sangamner, Maharashtra",
    },
  ];
  return (
    <div className="bg-[#edf2f4]">
      <div className="mx-auto container p-10 ">
        <h1 className="text-center text-[12px] text-sm uppercase tracking-wide font-light text-gray-600">
          Get To Know More 
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px] leading-7 mb-2 ibm-plex-sans-medium ">
          About me{" "}
        </h1>
        <div className="  grid grid-cols-1 md:grid-cols-12 mx-auto justify-evenly container items-center md:text-[20px]  text-center p-2 md:p-4 ">
          <div className=" flex justify-center   col-span-6">
            <img
              src={img}
              className="  sm:h-60 md:h-80 sm:w-60 md:w-80 h-56 w-56   md:flex   rounded-[20px] "
              alt=""
              srcset=""
            />
          </div>
          <div className="col-span-6 text-[16px] xl:me-10  mt-4  ">
            Hi, I'm{" "}
            <span className="text-orange-500 font-bold">Yogesh Shinde</span> 👦🏻,
            an engineering student at Pravara Rural Engineering College, Loni,
            approved by AICTE and affiliated with SPPU. I have a keen interest
            in technology and enjoy exploring and implementing new solutions.
            expertise in web development and an data structures and algorithms
            (DSA), I am eager to apply my knowledge to engaging projects. I will
            be graduating in 2026.
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5">
        <h1 className="text-center text-[12px] text-sm uppercase tracking-wide font-light text-gray-600">
          My
        </h1>
        <h1 className="text-center text-[28px] lg:text-[36px] leading-7 mb-2 ibm-plex-sans-medium ">
          Academic Journey
        </h1>

        <div className="    py-10 px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {academicData.map((item, index) => (
              <div
                key={index}
                className=" rounded-lg border-2 border-gray-500 p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-1 flex items-center gap-2"><FaCalendarAlt/>{item.duration}</p>
                <p className="text-gray-600 mb-1 flex items-center gap-2"><MdSchool/>{item.institution}</p>
                <p className="text-gray-600 flex items-center gap-2"><FaMapMarkerAlt/>{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default div;
