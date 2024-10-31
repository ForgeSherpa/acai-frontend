import Sidebar from "../Components/sidebar/sidebar";
import Header from "../Components/header";
import Search from "../Components/search";
import Footer from "../Components/footer";
import Results from "../Components/result/results";
import React, { useState } from "react";

export default function Result() {
  const [isVisible, setVisible] = React.useState(false);

  const toogleSidebar = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className="min-h-screen h-fit flex flex-col justify-between">
        <Sidebar func={toogleSidebar} animation={isVisible} />
        <div className="container mx-auto flex justify-between pt-6">
          <button onClick={toogleSidebar}>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gradient-to-b from-[#69B2F1] from-30% to-[#FCA311] to-100%">
              <div className="rounded-full h-10 w-10 flex items-center justify-center bg-[#14213D] hover:bg-slate-500 duration-500">
                <img src="public/burger-bar.png" alt="" className="h-6 w-6" />
              </div>
            </div>
          </button>
          <p className="mt-5 text-4xl bg-clip-text text-transparent inline-block pb-2 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            AcademyAI
          </p>
          <img src="public/uib.jpeg" alt="" className="h-16 rounded-lg" />
        </div>
        <Search />
        <Results />
        <Footer />
      </div>
    </>
  );
}
