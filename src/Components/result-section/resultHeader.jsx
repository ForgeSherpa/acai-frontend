export default function Resultheader({searchTerm}){
    return(
    <>
        <div className="max-h-16 w-[99.4%] mx-auto bg-white rounded-t-lg flex">
            <div className="md:flex hidden w-[15%] h-16 rounded-lg border-r-2 border-b-2 border-[#69B2F1] flex items-center justify-center">
              <img
                src="/result/robot.png"
                alt=""
                className="xl:w-12 lg:w-10 md:w-7 mr-2"
              />
              <p className="lg:text-xl md:text-sm font-semibold">Mr.ACAI</p>
            </div>
            <div className="w-[85%] h-16 rounded-lg">
              <p className="text-xl font-semibold p-4 pb-3">
                Presenting The Results For ("<span className="text-blue-500"> {searchTerm} </span>")
              </p>
              <hr className="w-[97%] mx-auto border border-[#69B2F1]" />
            </div>
        </div>
    </>
    );
}