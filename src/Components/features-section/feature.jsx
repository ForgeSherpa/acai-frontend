export default function Feature({imgScr, cardTitle, cardText}){
    return(
    <>
        <div className="h-56 w-72 lg:h-44 lg:w-60 lg:h-48 lg:w-64 xl:h-56 xl:w-72 2xl:h-72 2xl:w-[22rem] bg-[#B3B3B3] rounded-[60px] mb-7 lg:mb-0 hover:bg-[#D9D9D9] duration-500">
            <img src={imgScr} alt="" className="w-12 h-12 lg:w-9 lg:h-9 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20 mx-auto mt-7" />
            <p className="text-2xl lg:text-lg xl:text-2xl 2xl:text-3xl font-bold mt-3">{cardTitle}</p>
            <p className="text-base lg:text-xs xl:text-base 2xl:text-xl 2xl:mt-7 mt-5 px-5">
                {cardText}
            </p>
        </div>
    </>
    );
}