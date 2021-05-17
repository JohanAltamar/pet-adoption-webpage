import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const inHomePage = pathname === "/";

  return (
    <>
      <Navbar home={inHomePage} />
      {/* CONTENT */}
      {inHomePage && <article className={styles.imageContainer}></article>}
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
