// Theme
export { theme } from './theme';

// Export everything from mui-wrapper (this includes all MUI components with proper naming)
export * from './mui-wrapper';

// Atoms - our custom MD3 components
export { Button, IconButton } from './atoms/Button';
export type { ButtonProps, IconButtonProps } from './atoms/Button';
export { Typography } from './atoms/Typography';
export type { TypographyProps } from './atoms/Typography';
export { TextField } from './atoms/TextField';
export type { TextFieldProps } from './atoms/TextField';
export { Divider } from './atoms/Divider';
export type { DividerProps } from './atoms/Divider';
export { IconBase } from './atoms/Icon';
export type { IconProps } from './atoms/Icon';
export { Chip } from './atoms/Chip';
export type { ChipProps } from './atoms/Chip';
export { Avatar, AvatarGroup } from './atoms/Avatar';
export type { AvatarProps } from './atoms/Avatar';
export { Badge } from './atoms/Badge';
export type { BadgeProps } from './atoms/Badge';
export { LinearProgress } from './atoms/LinearProgress';
export type { LinearProgressProps } from './atoms/LinearProgress';
export { CircularProgress } from './atoms/CircularProgress';
export type { CircularProgressProps } from './atoms/CircularProgress';
export { Checkbox } from './atoms/Checkbox';
export type { CheckboxProps } from './atoms/Checkbox';
export { Switch } from './atoms/Switch';
export type { SwitchProps } from './atoms/Switch';
export { Slider } from './atoms/Slider';
export type { SliderProps } from './atoms/Slider';

// Re-export from MUI wrapper for components used downstream
export {
  MuiCard as Card,
  MuiCardHeader as CardHeader,
  MuiCardContent as CardContent,
  MuiCardActions as CardActions,
  MuiFormControl as FormControl,
  MuiInputLabel as InputLabel,
  MuiFormHelperText as FormHelperText,
  MuiSelect as Select,
  MuiMenuItem as MenuItem,
  MuiInputAdornment as InputAdornment,
} from './mui-wrapper';