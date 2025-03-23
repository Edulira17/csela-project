import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

const CustomInputMask: React.FC = () => {
  return (
    <InputMask mask="999.999.999-99" maskChar="">
      {(inputProps) => (
        <TextField
          {...inputProps}
          label="CPF"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      )}
    </InputMask>
  );
};

export default CustomInputMask;