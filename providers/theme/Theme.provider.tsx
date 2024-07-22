


import { ReactNode, createContext } from 'react';
import { Theme } from './Theme.interface';

const DefaultTheme: Theme = {
  text: '',
  background: '',
  primary_base: ''
}

const ThemeContext = createContext<Theme>(DefaultTheme);

type Props = {
  value: Theme;
  children: ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

