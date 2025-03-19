import { Outlet } from "react-router-dom";

import { LayoutContainer, LayoutMainContent } from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutMainContent>
        <Outlet />
      </LayoutMainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
