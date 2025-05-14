import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  background-color: #b22222;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h3,
  h4 {
    color: #fff;
  }
`;

export const AddressContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding: 1rem 1.5rem;
`;

export const LogoFooter = styled.img`
  width: 9vw;
  height: auto;
`;

export const LinkAddress = styled.a`
  text-align: center;
  font-size: 0.9rem;

  text-decoration: none;
  color: #c1c1c1;
  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const AboutUsContainer = styled.div`
  width: 30%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 0.9rem;
    text-align: justify;
    color: #c1c1c1;
  }
`;

export const TalkUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 2rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;

  .icon {
    font-size: 1.5rem;
    color: #c1c1c1;
    cursor: pointer;
    transition: 0.3s;
  }

  .icon:hover {
    color: #fff;
  }
`;
