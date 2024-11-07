export default function Feature({imgScr, cardTitle, cardText}){
    return(
    <>
        <div className="2xl:h-72 2xl:w-[22rem] h-56 w-72 bg-[#B3B3B3] rounded-[60px] mb-7 lg:mb-0 hover:bg-[#D9D9D9] duration-500">
            <img src={imgScr} alt="" className="2xl:w-20 2xl:h-20 w-12 h-12 mx-auto mt-7" />
            <p className="2xl:text-3xl text-2xl font-bold mt-3">{cardTitle}</p>
            <p className="2xl:text-xl 2xl:mt-7 mt-5 px-5">
                {cardText}
            </p>
        </div>
    </>
    );
}