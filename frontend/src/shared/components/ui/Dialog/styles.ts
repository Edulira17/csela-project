import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";




export const CustomButton = styled(Button)({
  backgroundColor: '#b22222',
  color: '#fff',
  border: '2px solid transparent',
  transition: 'all 0.3s ease-in-out',


  '&:hover': {
    backgroundColor: '#fff',
    border: '2px solid #b22222',
    color: '#b22222',
  }
});

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
