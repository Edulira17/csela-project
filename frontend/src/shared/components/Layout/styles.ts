import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
`

export const LayoutMainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 768px){
    padding: 0.5rem;
  }
`