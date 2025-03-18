import * as React from 'react';
import { StyledDialog, CustomButton } from './styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';

interface ButtonKnowProps {
  children: React.ReactNode;
}

const ButtonLearnMore: React.FC<ButtonKnowProps> = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomButton onClick={handleClickOpen} {...props} variant='contained' size='small'>{children}</CustomButton>

      {/* Adicionar conteúdo: textos explicando o projeto*/}
      <StyledDialog onClose={handleClose} open={open}>
        <DialogTitle>title</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <CustomButton autoFocus onClick={handleClose} >
            Fechar
          </CustomButton>
        </DialogActions>
      </StyledDialog>

    </React.Fragment>
  )
};

export default ButtonLearnMore;