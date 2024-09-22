import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PhoneContextProps {
  phoneValue: string;
  setPhoneValue: (value: string) => void;
}

const PhoneContext = createContext<PhoneContextProps>(
  {} as PhoneContextProps
);

export const usePhoneValue = () => useContext(PhoneContext);


export const PhoneProvider = ({ children }: { children: ReactNode }) => {
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <PhoneContext.Provider value={{ phoneValue, setPhoneValue }}>
      {children}
    </PhoneContext.Provider>
  );
};