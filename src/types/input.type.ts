import { TextFieldProps } from '@mui/material';

export interface ControlledInputProps
  extends Pick<
    TextFieldProps,
    | 'onChange'
    | 'value'
    | 'size'
    | 'variant'
    | 'placeholder'
    | 'disabled'
    | 'rows'
    | 'multiline'
    | 'defaultValue'
    | 'type'
    | 'required'
    | 'className'
  > {
  inputColor?: string;
  error?: string;
  label?: string;
  icon?: React.ReactNode;
}
