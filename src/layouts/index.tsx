import React, { ReactNode, createContext } from "react";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}
export const providerContext = createContext({});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <providerContext.Provider value={{}}>
      <header>头部</header>
      {children}
      <footer>尾部</footer>
    </providerContext.Provider>
  );
};

export default Layout;
