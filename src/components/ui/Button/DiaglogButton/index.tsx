import { DialogButtonProps } from '@/types/button.type';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import {
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuProps,
  Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactNode, useState } from 'react';

export default function DialogButton({
  dialogButton = <BorderColorRoundedIcon />,
  title,
  variant = 'text',
  description,
  children = null,
  isOpen = false,
  className
}: DialogButtonProps) {
  const [open, setOpen] = useState(isOpen);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant={variant} onClick={handleClickOpen} className={className}>
        {dialogButton}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={SlideUpTransition}
        keepMounted
        onClose={handleClose}
        fullWidth
        // disableScrollLock
        maxWidth="sm"
        aria-describedby="alert-dialog-slide-description"
        className=""
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="">
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}

const SlideUpTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const menuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 200,
      overflowY: 'auto'
    }
  },
  disableScrollLock: true
};
