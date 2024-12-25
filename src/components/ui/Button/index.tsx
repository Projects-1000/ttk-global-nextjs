import { ButtonProps } from '@/types/button.typs';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { HTMLAttributes, HTMLProps, MouseEventHandler } from 'react';
import './button.scss';

interface SubmitButtonProps extends ButtonProps {
  isSubmitting?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classCustom?: HTMLProps<HTMLElement>['className'];
  props?: Omit<
    HTMLAttributes<HTMLButtonElement>,
    'className' | 'type' | 'onClick' | 'disabled' | 'variant' | 'color' | 'size'
  >;
}

export default function SubmitButton({
  text = 'Click me',
  variant = 'contained',
  isSubmitting = false,
  isDirty = false,
  size = 'small',
  color = 'primary',
  iconPosition,
  icon,
  isPill = false,
  onClick,
  classCustom,
  type,
  props
}: SubmitButtonProps) {
  const isDisabled = type !== 'submit' ? false : isDirty && !isSubmitting ? false : true;
  const sizeClass = `btn__${size} ${isPill ? `btn--pill` : ''}`;
  const colorClass = `btn__${color}`;
  const iconClass = `${iconPosition === 'start' ? 'flex-row' : iconPosition === 'end' ? 'flex-row-reverse' : iconPosition === 'only' ? `btn__${size}--icon min-w-0` : ''}`;

  return (
    <Button
      variant={variant}
      disabled={isDisabled}
      className={`btn ${sizeClass} ${colorClass} ${iconClass} ${classCustom} ${isSubmitting && 'animate-pulse'} flex items-center gap-xs capitalize`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {iconPosition && icon}
      {iconPosition !== 'only' && text}
      {!iconPosition && isSubmitting && <CircularProgress className="ml-xs text-gray-400" size={16} />}
    </Button>
  );
}
