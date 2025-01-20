function ExperienceCard({ jobRole, companyName, duration, icon,skills }) {
   return (
     <div className=" p-5 border-[2px] border-gray-500 rounded-lg w-[300px] h-[150px]">
       <div className="text-center items-center gap-3" >
         <div className="text-[20px] flex justify-center    " >{icon}</div>
         <h1 className="text-[16px]" >{jobRole}</h1>
       </div>
       <div className="text-center"  >
         <h1 className="text-[13px]" > <strong>Company:-</strong> {companyName}</h1>
         <h1 className="text-[13px]" > <strong>Duration:- </strong> {duration}</h1>
         <h1 className="text-[13px]" > <strong>Technology :- </strong> {skills}</h1>
       </div>
     </div>
   );
 }
export default ExperienceCard; 