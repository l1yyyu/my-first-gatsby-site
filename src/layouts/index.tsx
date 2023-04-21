import React, { ReactNode, createContext } from "react";
import classnames from "classnames";
import * as styles from "./index.module.less";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}
export const providerContext = createContext({});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <providerContext.Provider value={{}}>
      <div className={classnames(styles.container)}>
        <header className={styles.header}>头部</header>
        {children}
        <footer className={styles.footer}>尾部</footer>
      </div>
    </providerContext.Provider>
  );
};

export default Layout;
