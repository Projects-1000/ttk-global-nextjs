export interface ButtonProps {
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
  isDirty?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  isPill?: boolean;
  iconPosition?: 'only' | 'start' | 'end';
  icon?: React.ReactNode;
}
