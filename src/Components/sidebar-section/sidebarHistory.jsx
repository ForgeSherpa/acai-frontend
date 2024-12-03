import { useEffect, useState } from 'react';

export default function SidebarHistory() {

  const [history, setHistory] = useState('');

  useEffect(() => {
    const storedHistory = sessionStorage.getItem('searchQuery');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
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
              <p key={index} className="mt-2 text-white text-sm truncate p-1 hover:bg-blue-300 rounded-md duration-300">
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
