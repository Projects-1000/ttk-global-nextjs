import { ButtonProps } from '@/types/button.typs';
import { Button as MUIButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import './index.scss';

export default function Button({
  text = 'Click me',
  variant = 'contained',
  isSubmitting = false,
  isDirty = false,
  size,
  color = 'primary',
  iconPosition,
  icon,
  isPill = false,
  onClick,
  classCustom,
  type,
  props
}: ButtonProps) {
  const isDisabled = type !== 'submit' ? false : isDirty && !isSubmitting ? false : true;
  const sizeClass = `${size ? `btn__${size}` : `mobile:btn__small tablet:btn__medium laptop:btn__large`} ${isPill ? `btn--pill` : ''}`;
  const colorClass = `btn__${color}`;
  const iconClass = `${iconPosition === 'start' ? 'flex-row' : iconPosition === 'end' ? 'flex-row-reverse' : iconPosition === 'only' ? `btn__${size}--icon min-w-0` : ''}`;

  return (
    <MUIButton
      variant={variant}
      disabled={isDisabled}
      className={`btn ${sizeClass} ${colorClass} ${iconClass} ${classCustom} ${isSubmitting ? 'animate-pulse' : ''} flex items-center gap-xs normal-case`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {iconPosition && icon}
      {iconPosition !== 'only' && text}
      {!iconPosition && isSubmitting && <CircularProgress className="ml-xs text-gray-400" size={16} />}
    </MUIButton>
  );
}
