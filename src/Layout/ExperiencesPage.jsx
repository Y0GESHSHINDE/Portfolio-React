import React from "react";
import Navbar from "./../components/Navbar";
import Experiences from "../components/Experiences";
import Footer from "./../components/Footer";

function ExperiencesPage() {
  return (
    <>
      <div className="pb-80  bg-[#edf2f4]">
        <Navbar />
        <Experiences />
      </div>
      <Footer />
    </>
  );
}

export default ExperiencesPage;
