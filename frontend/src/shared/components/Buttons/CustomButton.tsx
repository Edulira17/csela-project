import * as React from 'react';
import { StyledDialog, CustomButton } from './styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';

interface ButtonKnowProps {
  children: React.ReactNode;
  title: string;
  paragraphs: string[];
}

const ButtonLearnMore: React.FC<ButtonKnowProps> = ({ children, title, paragraphs, ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomButton onClick={handleClickOpen} {...props} variant='contained' size='small'>
        {children}
      </CustomButton>

      {/* refactor dialog -> componentizar o dialog*/}
      <StyledDialog onClose={handleClose} open={open}>
        <DialogTitle variant='h5'>{title}</DialogTitle>
        <DialogContent>
          {paragraphs.map((text, index) => (
            <Typography variant='body1' key={index} gutterBottom>
              {text}
            </Typography>
          ))}
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