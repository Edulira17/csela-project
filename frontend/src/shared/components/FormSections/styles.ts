import styled from "styled-components";


export const FormGroup = styled.div`
  width: 80%;
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .input-error {
    outline: 2px solid rgb(255, 72, 72);
  }

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }
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

// export const CustomInput = styled`
//   width: 100%;
//   padding: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   background: #f9f9f9;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;