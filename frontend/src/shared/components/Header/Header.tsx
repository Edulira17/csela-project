import { HeaderContainer, HeaderNav, HeaderLink, HeaderTitle, HeaderLogo, DropdownMenuButton, DropdownMenuContainer } from "./styles";
import LogoCsela from './assets/LOGO CSELA.png'
import { useDebugValue, useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      };

      if (isMobile && isDropdownOpen) {
        document.addEventListener("touchstart", handleTouchOutside);
      };

      return () => {
        document.addEventListener("touchstart", handleTouchOutside);
      }
    }
  }, [isMobile, isDropdownOpen]);

  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLogo src={LogoCsela} alt="Logo do CSELA" />
        <h1>CENTRO SOCIAL E EDUCAIONAL DO LAGO DO ALEIXO - CSELA</h1>
      </HeaderTitle>
      {isMobile && (
        <HeaderNav>
          <HeaderLink to="/">Início</HeaderLink>
          <HeaderLink to="history">História</HeaderLink>
          <HeaderLink to="workshops">Oficinas</HeaderLink>
          <HeaderLink to="forms">Matricule-se</HeaderLink>
        </HeaderNav>
      )};

      {isMobile && (
        <>
          <DropdownMenuButton onClick={toggleDropdown}>☰ Menu</DropdownMenuButton>
          {
            isMobile && (
              <DropdownMenuContainer ref={dropdownRef}>
                <HeaderLink to="/" onClick={() => setIsDropdownOpen(false)}>Início</HeaderLink>
                <HeaderLink to="/history" onClick={() => setIsDropdownOpen(false)}>História</HeaderLink>
                <HeaderLink to="/workshops" onClick={() => setIsDropdownOpen(false)}>Oficinas</HeaderLink>
                <HeaderLink to="/forms" onClick={() => setIsDropdownOpen(false)}>Matricule-se</HeaderLink>
              </DropdownMenuContainer>
            )
          }
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
