import Sidebar from "../Components/sidebar/sidebar";
import Header from "../Components/header";
import Search from "../Components/search";
import Features from "../Components/features";
import Footer from "../Components/footer";
import React, { useState } from 'react';

export default function Home(){

    const [isVisible, setVisible] = React.useState(false);

    const toogleSidebar = () => {
        setVisible(!isVisible);
    }

    return(
    <>
        <Sidebar func={toogleSidebar} animation={isVisible}/>
        <Header func={toogleSidebar}/>

        <div className="container mx-auto mt-4 text-center">
            <p
                className="text-5xl bg-clip-text text-transparent inline-block pb-2 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
                AcademyAI
            </p>
            <br />
            <p
                className="text-lg bg-clip-text text-transparent inline-block mt-4 bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
                "Hi there! I'm here to help. What do you need?"
            </p>
            <Search />
        </div>

        <div className="container mx-auto mt-16 text-center w-10/12 flex flex-col items-center justify-around lg:flex-row">
            <Features />
        </div>

        <Footer />

    </>
    );
}
