import { useEffect, useState, useContext } from 'react';
import { SearchContext } from "../context/searchContext";

export default function SidebarHistory() {

  const { setSearchTerm, searchTerm } = useContext(SearchContext);
  const [history, setHistory] = useState([]);

  const updateHistory = () => {
    const storedHistory = sessionStorage.getItem('searchQuery');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const filteredHistory = [...new Set(parsedHistory)]; // Filter duplicates
      setHistory(filteredHistory);
    }
  };

  useEffect(() => {
    updateHistory();
  }, []); // Runs once when component mounts

  // Use this effect to re-fetch history whenever it changes
  useEffect(() => {
    const interval = setInterval(() => {
      updateHistory();
    }, 1000); //1000 ini 1 detik untuk render ulang saat ada history baru, kalau 1ms bisa juga cuman takut computer gak kuat karena artinya komputer harus menjalankan fungsi itu 1000 kali per detik.

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="m-5 w-[80%] h-[60%]">
        <p className="text-sm font-bold ml-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#69B2F1] from-60% to-[#FCA311] to-100%">
          Recent Conversation
        </p>
        <div className="h-[80%] overflow-auto">
          
          {history.length > 0 ? (
            history.map((item, index) => (
              <p key={index} className={`mt-2 text-white text-sm truncate p-1 hover:bg-blue-300 rounded-md duration-300 ${item === searchTerm ? 'bg-blue-500' : ''}`} onClick={() => {
                  if(item === searchTerm) return;
                  setSearchTerm(item); // Set ulang setelah reset
              }}>
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
