import { Outlet } from "react-router-dom";
import { LayoutContainer, Content } from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
