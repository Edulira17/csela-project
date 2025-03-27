import styled from "styled-components";
import InputMask from 'react-input-mask'

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
  width: 80%;	
  display: flex;
  gap: 1rem;
`;



export const FormGroup = styled.div`
  width: 80%;
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CustomInput = styled(InputMask)`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;
