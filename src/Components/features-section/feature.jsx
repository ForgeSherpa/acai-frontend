export default function Feature({imgScr, cardTitle, cardText}){
    return(
    <>
        <div className="h-56 w-72 bg-[#B3B3B3] rounded-[60px] mb-7 lg:mb-0 hover:bg-[#D9D9D9] duration-500">
            <img src={imgScr} alt="" className="w-12 h-12 mx-auto mt-7" />
            <p className="text-2xl font-bold mt-3">{cardTitle}</p>
            <p className="mt-5 px-5">
                {cardText}
            </p>
        </div>
    </>
    );
}