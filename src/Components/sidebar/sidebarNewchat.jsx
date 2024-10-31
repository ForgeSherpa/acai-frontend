import { Link } from 'react-router-dom';

export default function SidebarNewChat(){
    return(
    <>
        <Link to="/" className="m-5 mt-12 h-16 w-[80%] flex items-center border border-white hover:bg-slate-500 duration-500">
            <img src="public/add.png" alt="" className="h-8 w-[15%] mx-auto" />
            <p className="text-white text-xl w-[70%]">New Chat</p>
        </Link>
    </>
    );
}