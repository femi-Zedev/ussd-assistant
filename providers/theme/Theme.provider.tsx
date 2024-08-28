



import { ReactNode, createContext, useContext } from 'react';
import { Theme } from './Theme.interface';

const DefaultTheme: Theme = {
  text: '',
  background: '',
  primary_base: '',
  primary_dark: '',
  primary_medium: '',
}



const ThemeContext = createContext<Theme>(DefaultTheme);

export const useTheme = () => useContext(ThemeContext) ;

type Props = {
  value: Theme;
  children: ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

