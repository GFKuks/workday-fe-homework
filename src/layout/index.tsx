import { ReactNode } from "react";
import styles from "./layout.module.css";

interface ILayoutProps {
    children: ReactNode;
};

export const Layout = ({ children }: ILayoutProps) => (
    <div className={styles.layout__layoutOuterWrapper}>
        <div className={styles.layout__layoutWrapper}>
            {children}
        </div>
    </div>
);