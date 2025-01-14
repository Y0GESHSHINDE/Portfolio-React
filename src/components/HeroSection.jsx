import React from "react";
import "../../public/font.css";
import profile from "../../public/images/Profile.png";
function HeroSection() {
  return (
    <div>
      <div className="bg-[#edf2f4] ">
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 p-4 z-50  ">
          <div className="md:text-left   flex flex-col justify-center  items-center   ">
            <h1 className="ibm-plex-sans-light ">Hello 👋 , i am</h1>
            <h1 className="text-[30px] md:text-[40px] lg:text-[44px] ibm-plex-sans-bold leading-none">
              Yogesh Shinde
            </h1>
            <div className="mt-3 flex  gap-3 md:flex-row ">
              <button
                className="border-[2px] border-black hover:bg-red-300 p-2 rounded-full text-[12px] sm:text-[14px] md:text-[20px] transition-all duration-300 ease-in-out"
                type="button">
                Hire me 👨🏻‍💼
              </button>
              <button
                className="border-[2px] border-black hover:bg-red-300 p-2 rounded-full text-[12px] sm:text-[14px] md:text-[20px] transition-all duration-300 ease-in-out"
                type="button">
                Resume 📃
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            <img
              src={profile}
              alt=""
              srcset=""
              className=" w-48 h-48 mt-5 md:w-60 md:h-60 lg:w-80 lg:h-80 text-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
