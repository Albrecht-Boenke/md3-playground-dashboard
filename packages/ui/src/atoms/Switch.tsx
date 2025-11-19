'use client'

import * as React from 'react'
import { MuiSwitch, type MuiSwitchProps } from '../mui-wrapper'

// MD3 Switch Component für Ja/Nein-Auswahl
// Unterstützt verschiedene Farben und Größen

export interface SwitchProps extends MuiSwitchProps {
  /**
   * Farbschema des Switch
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'default';
  /**
   * Größe des Switch
   */
  size?: 'small' | 'medium';
  /**
   * Ob der Switch deaktiviert ist
   */
  disabled?: boolean;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({
    color = 'primary',
    size = 'medium',
    disabled = false,
    sx = {},
    ...props
  }, ref) => {

    // MD3 konforme Styling
    const switchSx = {
      // Standard Transition für MD3
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&.MuiSwitch-root': {
        '&:hover': {
          backgroundColor: 'rgba(var(--mui-palette-action-activeChannel) / var(--mui-palette-action-hoverOpacity))',
        },
      },
      '& .MuiSwitch-switchBase': {
        // Verbesserte Sichtbarkeit des Thumb
        color: 'background.paper',
        '&.\u002b.Mui-checked': {
          color: 'background.paper',
          '& + .MuiSwitch-track': {
            opacity: 0.7,
          },
        },
      },
      '& .MuiSwitch-track': {
        // Transparenter Track für bessere Sichtbarkeit
        backgroundColor: 'action.active',
        opacity: 0.3,
      },
      ...sx,
    };

    return (
      <MuiSwitch
        ref={ref}
        color={color === 'default' ? undefined : color}
        size={size}
        disabled={disabled}
        sx={switchSx}
        {...props}
      />
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }
export default Switch