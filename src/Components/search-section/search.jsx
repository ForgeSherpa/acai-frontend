    import { Link } from 'react-router-dom';
    import { useContext, useState, useEffect } from 'react';
    import { SearchContext } from "../context/searchContext";
    import { setsEqual } from 'chart.js/helpers';

    export default function Search(){

        const { searchTerm, setSearchTerm} = useContext(SearchContext);
        const [input, setInput] = useState('');

        useEffect(() => {
            setInput(searchTerm);
        }, [searchTerm]);

        const handleInputChange = (e) => {
            setInput(e.target.value); //set input sesuai apa yang diinput user scr manual
        };

    const handleSearchClick = () => { //pas user klik, tambahkan ke history & buat jadi plg dpn
        if (input.trim() !== '') {
            const storedHistory = sessionStorage.getItem('searchQuery');
            const history = storedHistory ? JSON.parse(storedHistory) : [];
            const updatedHistory = [input, ...history]; //input user jadi paling depan
            sessionStorage.setItem('searchQuery', JSON.stringify(updatedHistory ));

            //kalau history udh beres, isi search term dgn input, biar bisa dipake di result
            setSearchTerm(input);   
        }else {
            alert("Please enter a search term!"); // Tampilkan alert jika input kosong
        }   
    };


    return(
    <>
        <div className="mt-3 h-[39px] lg:h-[30px] xl:h-[39px] xl:w-6/12 lg:w-7/12 md:w-9/12 w-10/12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            <div className="bg-white w-[99%] h-[35px] lg:h-[26px] xl:h-[35px] mx-auto flex rounded-full">
                <input className="placeholder-black xl:w-[95%] sm:w-[94%] w-[89%] rounded-full px-3 focus:outline-none" type="text"
                    placeholder="Type Here..." onChange={handleInputChange} value={input}/>
                <Link onClick={handleSearchClick} to="/result" className={`bg-[#FCA311] xl:w-[5%] sm:w-[6%] w-[11%] rounded-full flex items-center ${input.trim() ? '' : 'pointer-events-none opacity-80'}`}>
                    <img src="/right-arrow.png" alt="" className="w-6 h-6 mx-auto" />
                </Link>
            </div>
        </div>  
    </>
    );
}   