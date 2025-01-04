import { NavBarItemProps } from '@/components/ui/layout/NavBar';
import { HTMLAttributes, HTMLProps, MouseEventHandler, ReactNode } from 'react';

export enum ButtonSizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large'
}
export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'type' | 'onClick' | 'variant' | 'color' | 'size'> {
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
  isDirty?: boolean;
  size?: keyof typeof ButtonSizeEnum;
  color?: 'primary' | 'secondary';
  isPill?: boolean;
  iconPosition?: 'only' | 'start' | 'end';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classCustom?: HTMLProps<HTMLElement>['className'];
  disabled?:boolean
  // props?: Omit<
  //   HTMLAttributes<HTMLButtonElement>,
  //   'className' | 'type' | 'onClick' | 'disabled' | 'variant' | 'color' | 'size'
  // >;
  children?: ReactNode;
}

export interface NavButtonProps extends NavBarItemProps {
  isLeafButton: boolean;
  isMobile: boolean;
}
