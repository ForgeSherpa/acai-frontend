export default function Button({event}){
    return(
    <>
     <button onClick={event}>
            <div
                className="rounded-full h-12 w-12 flex items-center justify-center bg-gradient-to-b from-[#69B2F1] from-30% to-[#FCA311] to-100%">
                <div
                    className="rounded-full h-10 w-10 flex items-center justify-center bg-[#14213D] hover:bg-slate-500 duration-500">
                    <img src="public/burger-bar.png" className="h-6 w-6" />
                </div>
            </div>
     </button>
    </>
    );
}