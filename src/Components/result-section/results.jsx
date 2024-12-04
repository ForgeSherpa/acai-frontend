import React, { useState, useEffect } from "react";
import Resultheader from "./resultHeader";
import Resulttable from "./resultTable";
import ApexLineChart from "./chart/apexLineChart";

export default function Results() {

  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(() => {
    const storedQuery = JSON.parse(sessionStorage.getItem("searchQuery"));
    if (storedQuery) {
      setSearchQuery(storedQuery);
      fetchData(storedQuery); // Fetch data using the question provided
    }
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: query.question,
        }),
      });
      const data = await response.json();
      setResultData(data); // Set the result data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  if (loading) {
    return <div className="mx-auto text-slate-200">Loading...</div>;
  }

  // const showTable = false;

  return (
    <>
      <div className="container mx-auto mt-10">

        <div className="pt-0.5 pb-0.5 mx-auto w-[90%] rounded-lg min-h-96 bg-gradient-to-b from-[#69B2F1] from-60% to-[#FCA311] to-100%">
          <Resultheader />

          <div className="min-h-80 w-[99.4%] mx-auto bg-white rounded-br-lg rounded-bl-lg p-5">
          {/* Display the result data */}
          {resultData ? (
            resultData.mode === "list" ? (
              <Resulttable data={resultData.data} /> // Render table for 'list' mode
            ) : (
              <div className="flex justify-center mt-5 mb-5">
                <ApexLineChart data={resultData.data} /> {/* Render chart for other modes */}
              </div>
            )
          ) : (
            <div className="flex items-center justify-center h-screen">
              <p className="text-sm text-slate-800">Sorry, we couldn't find anything 😞</p>
            </div>
          )}
        </div>
      </div>
    </div>

          {/* <div className="min-h-80 w-[99.4%] mx-auto bg-white rounded-br-lg rounded-bl-lg p-5">
            {showTable ? (
              <Resulttable />
            ) : (
              <div className="flex justify-center mt-5 mb-5">
                <ApexLineChart/>
              </div>
            )}
          </div>

        </div>
        
      </div> */}
    </>
  );
}

// jika no result
{/* <div className="flex items-center justify-center h-screen">
  <p className="text-sm text-slate-800">"Sorry, we couldn't find anything 😞"</p>
</div> */}