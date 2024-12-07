import { useEffect, useState, useContext } from 'react';
import { SearchContext } from "../context/searchContext";

export default function SidebarHistory() {

  const { setSearchTerm } = useContext(SearchContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = sessionStorage.getItem('searchQuery');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const filteredHistory = [...new Set(parsedHistory)]; // Filter duplikat
      setHistory(filteredHistory);
      
    }
  }, []);

  const handleHistoryClick = (item) => {
    // Pindahkan item yang diklik ke atas
    setSearchTerm(item);

    const updatedHistory = [item, ...history.filter(historyItem => historyItem !== item)];

    // Update history di sessionStorage
    sessionStorage.setItem('searchQuery', JSON.stringify(updatedHistory));

    // Update state history
    setHistory(updatedHistory);
  };

  return (
    <>
      <div className="m-5 w-[80%] h-[60%]">
        <p className="text-sm font-bold ml-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
          Recent Conversation
        </p>
        <div className="h-[80%] overflow-auto">
          
          {history.length > 0 ? (
            history.map((item, index) => (
              <p  key={index} className="mt-2 text-white text-sm truncate p-1 hover:bg-blue-300 rounded-md duration-300" onClick={() => setSearchTerm(item)}>
                {item}
              </p>
              ))
              ) : (
              <p className="mt-8 text-white text-sm">
                No recent conversation
              </p>
          )}

        </div>
      </div>
    </>
  );
}
