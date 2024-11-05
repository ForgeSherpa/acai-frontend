import Sidebar from "../Components/sidebar-section/sidebar";
import Header from "../Components/header";
import Homesearch from "../Components/search-section/homeSearch";
import Features from "../Components/features-section/features";
import Footer from "../Components/footer";
import React, { useState } from "react";

export default function Home() {
  const [isVisible, setVisible] = React.useState(false);

  const toogleSidebar = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className="lg:h-screen h-fit flex flex-col justify-between bg-gradient-to-b from-[#14213D] from-0% to-[#471901] to-100%">
        <Sidebar func={toogleSidebar} animation={isVisible} />
        <Header func={toogleSidebar} />
        <Homesearch />
        <Features />
        <Footer />
      </div>
    </>
  );
}