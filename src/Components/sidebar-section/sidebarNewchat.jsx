import { Link, useNavigate} from 'react-router-dom';
import { SearchContext } from "../context/searchContext";
import { useContext, useEffect } from 'react';


export default function SidebarNewChat(){

    const {searchTerm, setSearchTerm} = useContext(SearchContext);
    const navigate = useNavigate(); 

    const handleNewChatClick = () => {
        setSearchTerm("");    // Kosongkan searchTerm
        sessionStorage.removeItem('searchQuery');
        navigate('/');
    };

    return(
    <>
        <div onClick={handleNewChatClick} className="cursor-pointer m-5 mt-12 h-16 w-[80%] flex items-center border border-white hover:bg-slate-500 duration-500">
            <img src="/add.png" alt="" className="h-8 w-[15%] mx-auto" />
            <p className="text-white text-xl w-[70%]">Reset Chat</p>
        </div>
    </>
    );
}