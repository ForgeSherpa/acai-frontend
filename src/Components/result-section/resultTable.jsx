export default function Resulttable(){
    return(
    <> 
       <div class="overflow-x-auto border border-slate-300 rounded-lg mx-auto">
            <table className="table-fixed text-center mx-auto min-w-[100%]">
                <thead className="bg-[#14213D] text-white rounded-lg">
                  <tr>
                    <th className="p-3 w-[33.4%]">Song</th>
                    <th className="p-3 w-[33.3%]">Artist</th>
                    <th className="p-3 w-[33.3%]">Year</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="p-3">The Sliding Mr. Bones</td>
                    <td>Malcolm Lockyer lorem16</td>
                    <td>1961</td>
                  </tr>
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="p-3">Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="p-3">Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="p-3">Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
          </table>
      </div>
    </>
    );
}