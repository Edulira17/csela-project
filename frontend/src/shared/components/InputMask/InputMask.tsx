import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

interface CustomInputMaskProps {
  mask: string;
  label: string
}




const CustomInputMask: React.FC<CustomInputMaskProps> = ({ mask, label }) => {

  return (
    <InputMask mask={mask} maskChar="">
      {(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      )}
    </InputMask>
  )
}
export default CustomInputMask;