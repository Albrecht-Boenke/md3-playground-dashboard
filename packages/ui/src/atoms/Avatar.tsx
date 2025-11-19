'use client'

import * as React from 'react'
import { MuiAvatar, type MuiAvatarProps, MuiAvatarGroup } from '../mui-wrapper'

// MD3 Avatar Component für User-Profile
// Mehrere Varianten für Standard-Use-Cases

export interface AvatarProps extends MuiAvatarProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'circular' | 'rounded' | 'square'
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({
    size = 'medium',
    variant = 'circular',
    ...props
  }, ref) => {
    const sx = {
      // MD3 konforme Avatar-Sizing
      ...(size === 'small' && { width: 32, height: 32 }),
      ...(size === 'medium' && { width: 40, height: 40 }),
      ...(size === 'large' && { width: 56, height: 56 }),
      // Standard Transition für MD3
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...props.sx,
    };

    return (
      <MuiAvatar
        ref={ref}
        variant={variant}
        sx={sx}
        {...props}
      />
    )
  }
)

Avatar.displayName = 'Avatar'

// AvatarGroup für Avatar-Bündelung
export const AvatarGroup: typeof MuiAvatarGroup = MuiAvatarGroup;

export { Avatar }
export default Avatar