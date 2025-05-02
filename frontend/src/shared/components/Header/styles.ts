import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b22222;
`
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  color: #fff;
  padding: 0.5rem 1rem;
  color: #fff;

  h1 {
    font-size: 1.9rem;
    font-weight: bold;
  }

  .menu-dropdown-icon {
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    text-decoration: none;
  }

  @media screen and (max-width: 768px){
    display: flex;
    justify-content: space-between;

    img {
      width: 120px;
    }

    h1 {
      display: none;
    }
  }
`

export const HeaderLogo = styled.img`
  width: 150px; 
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  padding: 1rem;
`

export const HeaderLink = styled(Link)`
  background-color: #B22222;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;

  padding: .3rem 2.3rem;
  text-decoration: none;
  transition: .3s;

  &:hover {
    background-color: #fff;
    color: red;
  }
`

export const MobileMenuIcon  = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

export const MobileMenuContainer  = styled.div`
  position: absolute;
  top: 70px;
  right: 1rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  animation: slideDown 0.3s ease-in-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`







