import {
  HeaderContainer,
  HeaderNav,
  HeaderLink,
  HeaderTitle,
  HeaderLogo,
  MobileMenuIcon,
  MobileMenuContainer,
} from "./styles";
import LogoCsela from "./assets/LOGO CSELA.png";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLogo src={LogoCsela} alt="Logo do CSELA" />
        <h1>CENTRO SOCIAL E EDUCAIONAL DO LAGO DO ALEIXO</h1>
        {isMobile && (
          <MobileMenuIcon onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FaBars className="menu-dropdown-icon" />
          </MobileMenuIcon>
        )}
      </HeaderTitle>

      {isMobile && isDropdownOpen && (
        <MobileMenuContainer ref={dropdownRef}>
          <HeaderLink to="/" onClick={() => setIsDropdownOpen(false)}>
            Início
          </HeaderLink>
          <HeaderLink to="/history" onClick={() => setIsDropdownOpen(false)}>
            História
          </HeaderLink>
          <HeaderLink to="/workshops" onClick={() => setIsDropdownOpen(false)}>
            Oficinas
          </HeaderLink>
          <HeaderLink to="/forms" onClick={() => setIsDropdownOpen(false)}>
            Matricule-se
          </HeaderLink>
        </MobileMenuContainer>
      )}

      {!isMobile && (
        <HeaderNav>
          <HeaderLink to="/">Início</HeaderLink>
          <HeaderLink to="/history">História</HeaderLink>
          <HeaderLink to="/workshops">Oficinas</HeaderLink>
          <HeaderLink to="/forms">Matricule-se</HeaderLink>
        </HeaderNav>
      )}
    </HeaderContainer>

  );
};

export default Header;
