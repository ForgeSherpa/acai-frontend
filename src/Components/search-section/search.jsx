import { Link } from 'react-router-dom';

export default function Search(){
    return(
    <>
        <div className="mt-3 h-[39px] xl:w-6/12 lg:w-7/12 md:w-9/12 w-10/12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            <div className="bg-white w-[99.3%] h-[35px] mx-auto flex rounded-full">
                <input className="placeholder-black xl:w-[95%] sm:w-[94%] w-[89%] rounded-full px-3 focus:outline-none" type="text"
                    placeholder="Type Here..." />
                <Link to="/result" className="bg-[#FCA311] xl:w-[5%] sm:w-[6%] w-[11%] rounded-full flex items-center">
                    <img src="/right-arrow.png" alt="" className="w-6 h-6 mx-auto" />
                </Link>
            </div>
        </div>  
    </>
    );
}