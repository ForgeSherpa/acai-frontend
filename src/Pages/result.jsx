import Sidebar from "../Components/sidebar-section/sidebar";
import Resultsearch from "../Components/search-section/resultSearch";
import Results from "../Components/result-section/results";
import Footer from "../Components/footer";
import { SearchProvider } from "../Components/context/searchContext";
import React, { useState } from "react";

//show and hide sidebar
export default function Result() {
  const [isVisible, setVisible] = useState(false);

  const toogleSidebar = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <div className="min-h-screen h-fit flex flex-col justify-between bg-gradient-to-b from-[#14213D] from-0% to-[#471901] to-100%">
      <SearchProvider>  
        <Sidebar func={toogleSidebar} animation={isVisible} />
        <Resultsearch func={toogleSidebar}/>
        <Results />
        <Footer />
      </SearchProvider>
      </div>
    </>
  );
}
