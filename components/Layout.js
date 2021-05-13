import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, categories }) => {
  const { pathname } = useRouter();

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <div className="relative">
          <Navbar home={pathname === "/"} />
          {pathname === "/" && <img src="/dog.jpg" />}
        </div>
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      ></div>
    </div>
  );
};

export default Layout;
