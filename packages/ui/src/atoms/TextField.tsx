'use client'

import * as React from 'react'
import {
  MuiTextField,
  type MuiTextFieldProps
} from '../mui-wrapper'

// MD3 TextField Component mit den drei spezifizierten Varianten
// Variants: filled, outlined, standard (aus AI_DESIGN_CONTEXT.md)

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'small' | 'medium'
  required?: boolean
  error?: boolean
  helperText?: string
}

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({
    variant = 'outlined',  // MD3-Favorit
    size = 'medium',
    fullWidth = true,
    margin = 'normal',
    ...props
  }, ref) => {
    const sx = {
      // MD3 konforme Styling-Prams
      ...props.sx,
    };

    return (
      <MuiTextField
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        margin={margin}
        sx={sx}
        {...props}
      />
    )
  }
)

TextField.displayName = 'TextField'

export { TextField }
export default TextField