'use client'

import * as React from 'react'
import { CircularProgress as MuiCircularProgress, type MuiCircularProgressProps } from '../mui-wrapper'

// MD3 Circular Progress Component für kreisförmige Fortschrittsanzeigen
// Unterstützt verschiedene Größen und Farben

export interface CircularProgressProps extends MuiCircularProgressProps {
  /**
   * Fortschrittswert zwischen 0 und 100 für determinate Variante
   */
  value?: number;
  /**
   * Variante des Fortschrittskreises
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * Farbschema des Fortschrittskreises
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   * Größe des Fortschrittskreises in Pixeln
   */
  size?: number | string;
  /**
   * Dicke des Fortschrittskreises
   */
  thickness?: number;
}

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({
    color = 'primary',
    variant = 'indeterminate',
    value,
    size = 40,
    thickness = 3.6,
    sx = {},
    ...props
  }, ref) => {

    // MD3 konforme Styling
    const progressSx = {
      // Standard Transition für MD3
      transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...sx,
    };

    return (
      <MuiCircularProgress
        ref={ref}
        color={color}
        variant={variant}
        value={value}
        size={size}
        thickness={thickness}
        sx={progressSx}
        {...props}
      />
    )
  }
)

CircularProgress.displayName = 'CircularProgress'

export { CircularProgress }
export default CircularProgress