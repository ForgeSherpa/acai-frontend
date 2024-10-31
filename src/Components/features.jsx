export default function Features(){
    return(
    <>
     <div className="h-56 w-72 bg-[#B3B3B3] rounded-[60px] hover:bg-[#D9D9D9] duration-500 mb-7 lg:mb-0">
            <img src="public/features/fast-time.png" alt="" className="w-12 h-12 mx-auto mt-7" />
            <p className="text-2xl font-bold mt-3">Fast Response</p>
            <p className="mt-5 px-5">
                "Instant replies for a smooth and efficient conversation."
            </p>
        </div>
        <div className="h-56 w-72 bg-[#B3B3B3] rounded-[60px] hover:bg-[#D9D9D9] duration-500 mb-7 lg:mb-0">
            <img src="public/features/ai.png" alt="" className="w-12 h-12 mx-auto mt-7" />
            <p className="text-2xl font-bold mt-3">Advance AI</p>
            <p className="mt-5 px-5">
                "Powered by cutting-edge AI for smart, intuitive interactions."
            </p>
        </div>
        <div className="h-56 w-72 bg-[#B3B3B3] rounded-[60px] hover:bg-[#D9D9D9] duration-500 mb-7 lg:mb-0">
            <img src="public/features/laugh.png" alt="" className="w-12 h-12 mx-auto mt-7" />
            <p className="text-2xl font-bold mt-3">User-Friendly</p>
            <p className="mt-5 px-5">
                "Easy to navigate for a hassle-free experience."
            </p>
        </div>
    </>
    );
}