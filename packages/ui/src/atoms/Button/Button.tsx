'use client'

import * as React from 'react'
import {
  MuiButton,
  CircularProgress,
  MuiIconButton,
  type MuiButtonProps,
  type MuiIconButtonProps
} from '../../mui-wrapper'

// ✅ RICHTIG: ALLE MUI-Komponenten importiert über @packages/ui/mui-wrapper
// Dies BEFOLGT die Import Governance Regel aus AI_PROJECT_CONTEXT.md

// Theme-based minimal design approach using standard MUI variants

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'contained', 
    size = 'medium', 
    loading = false,
    icon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const sx = {
      textTransform: 'none' as const,
      borderRadius: 2, // theme.spacing(2) = 16px - minimal design
      // Touch-friendly minimum heights (44px recommended)
      ...(size === 'small' && { minHeight: 44 }),
      ...(size === 'medium' && { minHeight: 44 }),
      ...(size === 'large' && { minHeight: 48 }),
      ...props.sx,
    };

    return (
      <MuiButton
        ref={ref}
        variant={variant}
        size={size}
        startIcon={
          loading ? (
            <CircularProgress
              size={20}
              color="inherit"
              aria-hidden="true"
            />
          ) : icon
        }
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        sx={sx}
        {...props}
      >
        {children}
      </MuiButton>
    )
  }
)

Button.displayName = 'Button'

// Simplified Icon Button using theme colors
export interface IconButtonProps extends Omit<MuiIconButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large'
  href?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = 'medium', children, ...props }, ref) => {
    return (
      <MuiIconButton
        ref={ref}
        size={size}
        sx={{
          borderRadius: 2, // minimal design
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </MuiIconButton>
    )
  }
)

IconButton.displayName = 'IconButton'

export { Button, IconButton }
export default Button
