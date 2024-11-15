'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type ContextProps = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
};

const NavigationContext = createContext<ContextProps>({
  activeLink: '',
  setActiveLink: (): string => '',
});

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState('');

  return (
    <NavigationContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigationProvider = () => useContext(NavigationContext);
