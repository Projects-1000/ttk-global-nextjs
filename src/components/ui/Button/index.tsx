import { ButtonProps } from '@/types/button.typs';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { MouseEventHandler } from 'react';

interface SubmitButtonProps extends ButtonProps {
  isSubmitting?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitButton({
  text = 'Click me',
  variant = 'contained',
  isSubmitting = false,
  isDirty = false,
  onClick
}: SubmitButtonProps) {
  const isDisabled = isDirty && !isSubmitting ? false : true;
  return (
    <Button
      variant={variant}
      disabled={isDisabled}
      color="primary"
      size="large"
      className={`btn bg-secondary-default ${isSubmitting && 'animate-pulse'} `}
      type="submit"
      onClick={onClick}
    >
      {text}
      {isSubmitting && <CircularProgress className="ml-2 text-gray-400" size={16} />}
    </Button>
  );
}
