import styled from "styled-components";

export const ResponsiveContainerForm = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  max-width: 1070px;
  width: 100%;
  margin: 0 auto;
  background: #ececec;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2{
    text-align: center;
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;	
  display: flex;
  justify-content: space-around;
  
  padding: 1rem;
`;




