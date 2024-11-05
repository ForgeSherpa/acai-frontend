import styled, { css, keyframes } from "styled-components";
import React, { useState, useEffect } from 'react';
import SidebarHead from "./sidebarHead";
import SidebarNewChat from "./sidebarNewchat";
import SidebarHistory from "./sidebarHistory";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SidebarCustom = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animation' && prop !== 'isFirstRender', // Prevent passing animation prop to DOM element
})`
  position: fixed;
  top: 0;
  animation: ${({ animation, isFirstRender }) =>
    isFirstRender
      ? css`
          ${slideOut} 0s forwards
        `
      : animation
      ? css`
          ${slideIn} 0.5s forwards  
        `
      : css`
          ${slideOut} 0.5s forwards
        `};

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff80;
    border-radius: 5px;
  }
`;

export default function Sidebar({ func, animation }) {

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstRender(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SidebarCustom
        animation={animation}
        isFirstRender={isFirstRender}
        className="w-72 h-screen shadow-[1px_0_3px] bg-gradient-to-b from-[#244584] from-0% to-[#7B330C] to-100%"
      >
        <SidebarHead func={func} />
        <SidebarNewChat />
        <SidebarHistory />
        
      </SidebarCustom>
    </>
  );
}
