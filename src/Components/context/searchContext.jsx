import React, { createContext, useState } from "react";

//creating search context
export const SearchContext = createContext(); 

//buat search provider to support search context
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(() => { 
    const term = sessionStorage.getItem('searchQuery'); //ambil history dan parse json ke js
    return term ? JSON.parse(term)[0] : ''; //set default for searchterm yaitu nilai pertama dari searchQuery
  });

  const [isNewChat, setIsNewChat] = useState(false);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, isNewChat, setIsNewChat }}>
      {children}
    </SearchContext.Provider>
  );
};
