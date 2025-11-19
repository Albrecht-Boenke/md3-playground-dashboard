'use client'

import * as React from 'react'
import { MuiLinearProgress, type MuiLinearProgressProps } from '../mui-wrapper'

// MD3 Linear Progress Component für Fortschrittsanzeigen
// Unterstützt verschiedene Modi und Stile

export interface LinearProgressProps extends MuiLinearProgressProps {
  /**
   * Fortschrittswert zwischen 0 und 100 für determinate Variante
   */
  value?: number;
  /**
   * Pufferwert für buffer Variante
   */
  valueBuffer?: number;
  /**
   * Variante des Fortschrittsbalkens
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  /**
   * Farbschema des Fortschrittsbalkens
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  ({
    color = 'primary',
    variant = 'indeterminate',
    value,
    valueBuffer,
    sx = {},
    ...props
  }, ref) => {

    // MD3 konforme Styling
    const progressSx = {
      // Standard Transition für MD3
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      // Höhe für bessere Sichtbarkeit
      height: '4px',
      borderRadius: '2px',
      // Hintergrundfarbe für besseren Kontrast
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      ...sx,
    };

    return (
      <MuiLinearProgress
        ref={ref}
        color={color}
        variant={variant}
        value={value}
        valueBuffer={valueBuffer}
        sx={progressSx}
        {...props}
      />
    )
  }
)

LinearProgress.displayName = 'LinearProgress'

export { LinearProgress }
export default LinearProgress