import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
export const HeaderTitle = styled.div`
  background-color: #B22222;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  color: #fff;
  padding: .5rem;
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
  border-radius: 10px;

  padding: .3rem 2.3rem;
  text-decoration: none;
  transition: .3s;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 0 1px black;
    color: red;
    font-weight: bold;
  }
`

export const MobileMenuIcon  = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  .menu-dropdown-icon{
    background-color: #fff;
  }
`

export const MobileMenuContainer  = styled.div`
  position: absolute;
  top: 135px;
  left: 30px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;

`







