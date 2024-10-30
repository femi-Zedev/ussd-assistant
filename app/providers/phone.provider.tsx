import React, { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';

interface PhoneContextProps {
  phoneValue: string;
  debouncedPhoneValue: string;
  isDebouncing: boolean;
  setPhoneValue: (value: string) => void;
  setDebouncedPhoneValue: (value: string) => void;
}

const PhoneContext = createContext<PhoneContextProps>(
  {} as PhoneContextProps
);

export const usePhoneValue = () => useContext(PhoneContext);


export const PhoneProvider = ({ children }: { children: ReactNode }) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [debouncedPhoneValue, setDebouncedPhoneValue] = useState('');
  const [isDebouncing, setIsDebouncing] = useState(false);
  const debounceDelay = 1000; // Define your debounce delay here

  // Debouncing logic moved from useDebounce
  useEffect(() => {
    setIsDebouncing(true); // Start debouncing when value changes

    const id = setTimeout(() => {
      setDebouncedPhoneValue(debouncedPhoneValue);
      setPhoneValue(phoneValue) // Set the debounced value after delay
      setIsDebouncing(false); // Stop debouncing after setting value
    }, debounceDelay);

    return () => clearTimeout(id); // Clean up the timeout if value changes or component unmounts
  }, [debouncedPhoneValue ]);

  return (
    <PhoneContext.Provider
      value={{ phoneValue, debouncedPhoneValue, isDebouncing, setPhoneValue, setDebouncedPhoneValue }}
    >
      {children}
    </PhoneContext.Provider>
  );
};