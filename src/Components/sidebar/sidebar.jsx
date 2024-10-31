import styled, { css, keyframes } from "styled-components";
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
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const SidebarCustom = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animation' // Prevent passing animation prop to DOM element
})`
  position: fixed;
  top: 0;
  animation: ${({ animation }) => (animation ? css`${slideIn} 1s forwards` : css`${slideOut} 1s forwards`)};

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff80;
    border-radius: 5px;
  }
`

export default function Sidebar({func, animation}){
    return(
    <>
        <SidebarCustom animation={animation} className='w-72 h-screen shadow-[1px_0_3px] bg-gradient-to-b from-[#244584] from-0% to-[#7B330C] to-100%'>
          <SidebarHead func={func} />
          <SidebarNewChat />
          <SidebarHistory />
        </SidebarCustom>
    </>
    );
}