export default function Resulttable({ data }){  

  const keys = Object.keys(data[0]);

    return(
    <> 
       <div className="mt-16 sm:mt-12 lg:mt-0 overflow-x-auto border border-slate-300 rounded-lg mx-auto">
            <table className="table-fixed text-center mx-auto min-w-[100%]">
                <thead className="bg-[#14213D] text-white rounded-lg">
                  <tr>
                  {keys.map((key) => (
                    <th key={key} className="p-3">{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</th>
                  ))}
                  </tr>
                </thead>
                <tbody >
                {data.map((item, index) => (
                  <tr key={index} className="odd:bg-gray-100 even:bg-white">
                    {keys.map((key) => (
                      <td key={key} className="p-3">{item[key]}</td>
                    ))}
                  </tr>
                ))}
                </tbody>
          </table>
      </div>
    </>
    );
}