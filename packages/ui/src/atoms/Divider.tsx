'use client'

import * as React from 'react'
import { MuiDivider, type MuiDividerProps } from '../mui-wrapper'

// MD3 Divider Component für horizontale und vertikale Trennungen
// Aus AI_DESIGN_CONTEXT.md Liste der 14 Atom-Komponenten

export interface DividerProps extends MuiDividerProps {
  orientation?: 'horizontal' | 'vertical'
  flexItem?: boolean
  light?: boolean
  variant?: 'fullWidth' | 'inset' | 'middle'
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({
    orientation = 'horizontal',
    variant = 'fullWidth',
    light = false,
    flexItem = false,
    ...props
  }, ref) => {
    const sx = {
      // MD3 konforme Divider-Stile
      borderColor: 'rgba(0, 0, 0, 0.12)', // MD3 Standard-Divider-Farbe im Light Mode
      ...props.sx,
    };

    return (
      <MuiDivider
        ref={ref}
        orientation={orientation}
        variant={variant}
        light={light}
        flexItem={flexItem}
        sx={sx}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'

export { Divider }
export default Divider