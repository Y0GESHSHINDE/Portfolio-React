import React from "react";

function SkillCard({ Skill, icon }) {
  return (
    <div className="border-[2px] rounded-[12px] text-center  border-gray-500 p-5 sm:p-8 justify-center flex flex-col">
      <div className="w-10 h-10 items-center" >
        <icon className="flex text-[20px] sm:text-[22px] justify-center">{icon}</icon>
        <h1 className="text-[14px]  flex justify-center">{Skill}</h1>
      </div>
    </div>
  );
}

export default SkillCard;
