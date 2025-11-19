'use client'

import * as React from 'react'
import { MuiBadge, type MuiBadgeProps } from '../mui-wrapper'

// MD3 Badge Component für Status-Indikationen
// Verschiedene Content-Varianten und Positionen unterstützt

export interface BadgeProps extends Omit<MuiBadgeProps, 'variant' | 'color'> {
  status?: 'success' | 'error' | 'warning' | 'info' | 'default'
  size?: 'small' | 'medium' | 'large'
  variant?: 'dot' | 'standard'  // Remove 'string' as it's not a valid MUI variant
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    status = 'default',
    variant = 'standard',
    size = 'medium',
    max = 99,
    overlap = 'rectangular',
    showZero = false,
    ...props
  }, ref) => {

    let badgeColor: 'success' | 'error' | 'warning' | 'info' | 'primary' = 'primary';
    switch (status) {
      case 'success':
        badgeColor = 'success';
        break;
      case 'error':
        badgeColor = 'error';
        break;
      case 'warning':
        badgeColor = 'warning';
        break;
      case 'info':
        badgeColor = 'info';
        break;
      default:
        badgeColor = 'primary';
    }

    const sx = {
      // MD3 konforme Badge-Sizing
      ...(size === 'small' && { '& .MuiBadge-badge': { width: 16, height: 16, fontSize: 10 } }),
      ...(size === 'medium' && { '& .MuiBadge-badge': { width: 20, height: 20, fontSize: 12 } }),
      ...(size === 'large' && { '& .MuiBadge-badge': { width: 24, height: 24, fontSize: 14 } }),
      // MD3 Transition
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...props.sx,
    };

    return (
      <MuiBadge
        ref={ref}
        color={badgeColor}
        variant={variant}
        max={max}
        overlap={overlap}
        showZero={showZero}
        sx={sx}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
export default Badge