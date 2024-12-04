export default function Resulttable({ data }){

  // Check if the data exists and is an array, if not return a message
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  // Get the keys (which represent the headers)
  const keys = Object.keys(data);


    return(
    <> 
       <div class="overflow-x-auto border border-slate-300 rounded-lg mx-auto">
            <table className="table-fixed text-center mx-auto min-w-[100%]">
                <thead className="bg-[#14213D] text-white rounded-lg">
                  <tr>
                    {/* <th className="p-3 w-[33.4%]">Song</th>
                    <th className="p-3 w-[33.3%]">Artist</th>
                    <th className="p-3 w-[33.3%]">Year</th> */}
                       {/* Dynamically render headers based on the keys */}
                      {keys.map((key) => (
                        <th key={key} className="p-3">{key}</th>
                      ))}
                  </tr>
                </thead>
                <tbody >
                {/* Dynamically render rows based on the values */}
                <tr className="odd:bg-gray-100 even:bg-white">
                  {keys.map((key) => (
                    <td key={key} className="p-3">{data[key]}</td>
                  ))}
                  </tr>
                </tbody>
          </table>
      </div>
    </>
    );
}