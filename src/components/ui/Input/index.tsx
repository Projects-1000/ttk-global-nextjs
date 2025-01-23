import { ControlledInputProps } from '@/types/input.type';
import { FormHelperText, InputAdornment, TextField, Typography } from '@mui/material';
import './index.scss';
interface InputLabelProps extends Pick<ControlledInputProps, 'required' | 'disabled' | 'label' | 'error'> {
  inputId?: string;
}

const ControlledInput = ({
  label,
  defaultValue,
  disabled,
  multiline,
  placeholder,
  rows,
  size,
  type,
  variant,
  error,
  onChange,
  value,
  required,
  icon,
  className,
  inputColor,
  name,
  onInput,
  sx,
  slotProps
}: ControlledInputProps) => {
  const inputId = label?.toLowerCase().replace(/ /g, '-');
  return (
    <div className={`controlled-input flex w-full flex-col gap-s ${className}`}>
      {label && <InputLabel required={required} label={label} error={error} inputId={inputId} />}
      <TextField
        id={inputId}
        disabled={disabled}
        // helperText={error}
        error={!!error}
        value={value}
        type={type}
        multiline={multiline}
        rows={rows}
        size={size}
        onChange={onChange}
        fullWidth
        variant={variant}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" className="absolute left-m">
                {icon && icon}
              </InputAdornment>
            ),
            ...slotProps
          }
        }}
        onInput={onInput}
        className={`input relative ${icon ? 'controlled-input--icon' : ''} ${error ? 'controlled-input--error' : ''} ${inputColor ? inputColor : ''}`}
        sx={sx}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

const InputLabel = ({ required, label, error, inputId }: InputLabelProps) => {
  return (
    <label htmlFor={inputId} className="controlled-input__label flex items-center gap-2xs">
      <Typography
        className={`${error ? 'controlled-input__label--error' : ''} captop-bold text-inherit laptop:body-bold`}
      >
        {label}
      </Typography>
      {required && <Typography color="error"> *</Typography>}
    </label>
  );
};

export default ControlledInput;
