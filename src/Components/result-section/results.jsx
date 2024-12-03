import Resultheader from "./resultHeader";
import Resulttable from "./resultTable";
import ApexLineChart from "./chart/apexLineChart";

export default function Results() {
  const showTable = false;

  return (
    <>
      <div className="container mx-auto mt-10">

        <div className="pt-0.5 pb-0.5 mx-auto w-[90%] rounded-lg min-h-96 bg-gradient-to-b from-[#69B2F1] from-60% to-[#FCA311] to-100%">
          <Resultheader />

          <div className="min-h-80 w-[99.4%] mx-auto bg-white rounded-br-lg rounded-bl-lg p-5">
            {showTable ? (
              <Resulttable />
            ) : (
              <div className="flex justify-center mt-5 mb-5">
                <ApexLineChart/>
              </div>
            )}
          </div>

        </div>
        
      </div>
    </>
  );
}

// jika no result
{/* <div className="flex items-center justify-center h-screen">
  <p className="text-sm text-slate-800">"Sorry, we couldn't find anything 😞"</p>
</div> */}