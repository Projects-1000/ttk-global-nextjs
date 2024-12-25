import { HTMLAttributes, HTMLProps, MouseEventHandler } from 'react';

export interface ButtonProps {
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
  isDirty?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  isPill?: boolean;
  iconPosition?: 'only' | 'start' | 'end';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classCustom?: HTMLProps<HTMLElement>['className'];
  props?: Omit<
    HTMLAttributes<HTMLButtonElement>,
    'className' | 'type' | 'onClick' | 'disabled' | 'variant' | 'color' | 'size'
  >;
}
