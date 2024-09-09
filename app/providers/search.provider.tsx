import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

export const useSearchValue = () => useContext(SearchContext);


export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};