import { ControlledInputProps } from '@/types/input.type';
import { AccountCircle } from '@mui/icons-material';
import { InputAdornment, TextField, Typography } from '@mui/material';
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
  icon
}: ControlledInputProps) => {
  const inputId = label?.toLowerCase().replace(/ /g, '-');
  return (
    <div className={`controlled-input w-full flex flex-col gap-s`}>
      {label && <InputLabel required={required} label={label} error={error} inputId={inputId} />}
      <TextField
        id={inputId}
        disabled={disabled}
        helperText={error}
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
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" className="absolute left-m">
                {icon ? icon : <AccountCircle />}
              </InputAdornment>
            )
          }
        }}
        className={`input relative ${icon ? 'controlled-input--icon' : ''} ${error ? 'controlled-input--error' : ''}`}
      />
    </div>
  );
};

const InputLabel = ({ required, label, error, inputId }: InputLabelProps) => {
  return (
    <label htmlFor={inputId} className="controlled-input__label flex items-center gap-2xs">
      <Typography
        variant="body1"
        className={`${error ? 'controlled-input__label--error' : ''} text-inherit subtitle-bold laptop:body-bold`}
      >
        {label}
      </Typography>
      {required && <Typography color="error"> *</Typography>}
    </label>
  );
};

export default ControlledInput;
