export default function Results(){

    return(
        <>
            <div className="container mx-auto mt-10">
        <div className="pt-0.5 pb-0.5 mx-auto w-[90%] rounded-lg min-h-96 bg-gradient-to-b from-[#69B2F1] from-60% to-[#FCA311] to-100%">
            <div className="max-h-16 w-[99.4%] mx-auto bg-white rounded-t-lg flex">
                <div className="md:flex hidden w-[15%] h-16 rounded-lg border-r-2 border-b-2 border-[#69B2F1] flex items-center justify-center">
                    <img src="public/result/robot.png" alt="" className="xl:w-12 lg:w-10 md:w-7 mr-2" />
                    <p className="lg:text-xl md:text-sm font-semibold">Mr.ACAI</p>
                </div>
                <div className="w-[85%] h-16 rounded-lg">
                    <p className="text-xl font-semibold p-4 pb-3">Presenting The Results:</p>
                    <hr className="w-[97%] mx-auto border border-[#69B2F1]" />
                </div>
            </div>
            <div className="min-h-80 w-[99.4%] mx-auto bg-white rounded-br-lg rounded-bl-lg p-5">
                 {/* tinggal ganti ama chart aseli */}
                <img src="public/result/pie-chart.png" alt="" className="mx-auto" /> 
                 
                {/* table, tapi rounded-lg ntah knp gak bisa */}
                {/* <table className="table-fixed text-center mx-auto min-w-[90%] border border-slate-400 rounded-lg">
                    <thead className="bg-[#14213D] text-white">
                      <tr>
                        <th className="p-3 w-[33.4%]">Song</th>
                        <th className="p-3 w-[33.3%]">Artist</th>
                        <th className="p-3 w-[33.3%]">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">The Sliding Mr. Bones</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-3">Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                      </tr>
                      <tr>
                        <td className="p-3">Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                      </tr>
                    </tbody>
                </table>  */}
            </div>
        </div>
    </div>
        </>
    );

}