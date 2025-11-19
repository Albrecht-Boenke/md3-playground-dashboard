'use client'

import * as React from 'react'
import { MuiChip, type MuiChipProps } from '../mui-wrapper'

// MD3 Chip Component mit allen Varianten
// Aus AI_DESIGN_CONTEXT.md: basic, deletable, clickable

export interface ChipProps extends MuiChipProps {
  variant?: 'filled' | 'outlined'
  size?: 'small' | 'medium'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ variant = 'filled', size = 'medium', ...props }, ref) => {
    const sx = {
      // MD3 konforme Chip-Stile mit Evaluation-Function für Server-Komponenten
      borderRadius: 2,
      fontWeight: 500, // MD3 Medium
      letterSpacing: 0,
      // MD3 Finite Transition Values
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...props.sx,
    };

    return (
      <MuiChip
        ref={ref}
        variant={variant}
        size={size}
        sx={sx}
        {...props}
      />
    )
  }
)

Chip.displayName = 'Chip'

export { Chip }
export default Chip