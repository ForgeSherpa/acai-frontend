import Resultheader from "./resultHeader";
import Resulttable from "./resultTable";
import { useState, useEffect } from 'react';

import JsBarChart from "./chart/jsBarChart";
import JsPieChart from "./chart/jsPieChart";

export default function Results() {

  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("");
  const [groupBy, setGroupBy] = useState("");
  const [availableGroupBy, setAvailableGroupBy] = useState([]);

  const [searchTerm, setSearchTerm] = useState(() => {
    const term = sessionStorage.getItem('searchQuery');
    return term ? JSON.parse(term)[0] : '';
  });

  //render result.jsx every 1 second emg agak berat tapi yasudahlah
  useEffect(() => {
    const interval = setInterval(() => {
      const term = sessionStorage.getItem('searchQuery');
      if (term && term !== searchTerm) {
        setSearchTerm(JSON.parse(term)[0]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setGroupBy("");
      sendRequest(searchTerm, page, groupBy);
    }
  }, [searchTerm, page, groupBy]);

  const sendRequest = async (term, page, groupBy) => {
    setLoading(true);
    try {
      const requestBody = {
        question: term,
        page: page
      };
  
      if (groupBy) {
        requestBody.group_by = groupBy;  // Only include group_by if it's selected
      }
      const res = await fetch('http://127.0.0.1:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      
      const data = await res.json();

      if (!res.ok || !data.data) {
        setError(true);
      } else {
        setSearchResult(data.data);
        setTotalPages(data.meta.total_page);
        setError(false);

        setMode(data.meta.mode);
        setAvailableGroupBy(data.meta.available_group_by || []);
      }

    } catch (error) {
      setError(true);
    }finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage); // Change page number on user input
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10">

        <div className="pt-0.5 pb-0.5 mx-auto w-[90%] rounded-lg min-h-96 bg-gradient-to-b from-[#69B2F1] from-60% to-[#FCA311] to-100%">
          <Resultheader/>

          <div className="min-h-80 w-[99.4%] mx-auto bg-white rounded-br-lg rounded-bl-lg p-5">
          {error ? (
            <div className="flex items-center justify-center h-screen">
              <p className="text-slate-800">"Sorry, we couldn't find anything 😞"</p>
            </div>
           ) : loading ? (
            <div className="flex items-center justify-center h-screen">
              <p className="text-slate-800">Loading...</p>
            </div>
          ) : (
            <>
               {mode !== "list" ? (
                <>
                <div className="flex justify-end">
                  <select className="bg-gray-200 p-2 rounded-lg" value={groupBy || ""} onChange={(e) => setGroupBy(e.target.value)} name="" id="">
                   <option value="" disabled>Select Group By</option>
                  {availableGroupBy.map((option, index) => (
                    <option key={index} value={option}>
                            {option}
                          </option>
                  ))}
                  </select>
                </div>

                <div className="w-[60%] flex items-center justify-center mx-auto">
                    <JsBarChart  dataUIB={searchResult}/>
                    <JsPieChart  dataUIB={searchResult}/>
                </div>
                </>
          ) : (
            <>
            <Resulttable data={searchResult} />
            
            <nav className="mt-5 text-center" aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                  <button 
                          onClick={() => handlePageChange(page - 1)} 
                          disabled={page === 1}
                          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          Previous
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => handlePageChange(index + 1)} 
                          className={`flex items-center justify-center px-4 h-10 leading-tight ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                <li>
                  <button 
                        onClick={() => handlePageChange(page + 1)} 
                        disabled={page === totalPages}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                  </button>
                </li>
              </ul>
            </nav>
            </>
          )}
        </>
      )}
          </div>

        </div>
        
      </div>
    </>
  );
}

