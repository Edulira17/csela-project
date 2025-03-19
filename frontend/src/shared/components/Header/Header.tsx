import { HeaderContainer, HeaderNav, HeaderLink, HeaderTitle, HeaderLogo } from "./styles";

import LogoCsela from './assets/LOGO CSELA.png'



const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLogo src={LogoCsela} alt="Logo do CSELA" />
        <h1>CENTRO SOCIAL E EDUCAIONAL DO LAGO DO ALEIXO - CSELA</h1>
      </HeaderTitle>
      <HeaderNav>
        <HeaderLink to="/">Início</HeaderLink>
        <HeaderLink to="history">História</HeaderLink>
        <HeaderLink to="workshops">Oficinas</HeaderLink>
        <HeaderLink to="forms">Matricule-se</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
