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

// MD3-konforme Button-Komponente nach AI_DESIGN_CONTEXT.md Spezifikationen

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
      borderRadius: 2, // MD3: 8px radius for buttons
      fontWeight: 500, // MD3: Medium font weight
      letterSpacing: 0, // MD3: Normal letter spacing
      // Responsive sizing und touch-friendly heights
      ...(size === 'small' && {
        padding: '8px 16px',
        fontSize: '0.875rem',
        minHeight: 44 // Touch-friendly minimum
      }),
      ...(size === 'medium' && {
        padding: '12px 24px',
        fontSize: '1rem',
        minHeight: 44 // Touch-friendly minimum
      }),
      ...(size === 'large' && {
        padding: '16px 32px',
        fontSize: '1.125rem',
        minHeight: 48 // Touch-friendly minimum
      }),
      // MD3 konforme Transitions (aus AI_ANALYSIS)
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
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
          ) : (
            icon
          )
        }
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-disabled={disabled || loading || undefined}
        sx={sx}
        {...props}
      >
        {children}
      </MuiButton>
    )
  }
)

Button.displayName = 'Button'

// MD3 IconButton Komponente
export interface IconButtonProps extends Omit<MuiIconButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large'
  href?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = 'medium', children, ...props }, ref) => {
    const sx = {
      borderRadius: 2, // MD3: 8px radius
      // MD3 konforme Größen
      ...(size === 'small' && { padding: 8 }),
      ...(size === 'medium' && { padding: 12 }),
      ...(size === 'large' && { padding: 16 }),
      // MD3 konforme Transitions
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...props.sx,
    };

    return (
      <MuiIconButton
        ref={ref}
        size={size}
        sx={sx}
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