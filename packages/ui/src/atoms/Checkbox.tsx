'use client'

import * as React from 'react'
import { MuiCheckbox, type MuiCheckboxProps } from '../mui-wrapper'

// MD3 Checkbox Component für Auswahloptionen
// Unterstützt verschiedene Zustände und Indeterminate-Status

export interface CheckboxProps extends MuiCheckboxProps {
  /**
   * Ob die Checkbox auf indeterminate steht
   */
  indeterminate?: boolean;
  /**
   * Farbschema der Checkbox
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'default';
  /**
   * Größe der Checkbox
   */
  size?: 'small' | 'medium';
  /**
   * Ob die Checkbox deaktiviert ist
   */
  disabled?: boolean;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({
    color = 'primary',
    size = 'medium',
    disabled = false,
    indeterminate = false,
    sx = {},
    ...props
  }, ref) => {

    // MD3 konforme Styling
    const checkboxSx = {
      // Standard Transition für MD3
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&.MuiCheckbox-root': {
        '&:hover': {
          backgroundColor: 'rgba(var(--mui-palette-action-activeChannel) / var(--mui-palette-action-hoverOpacity))',
        },
      },
      ...sx,
    };

    return (
      <MuiCheckbox
        ref={ref}
        color={color === 'default' ? undefined : color}
        size={size}
        disabled={disabled}
        indeterminate={indeterminate}
        sx={checkboxSx}
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
export default Checkbox