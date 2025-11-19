'use client'

import * as React from 'react'
import { MuiIcon, MuiSvgIcon, type MuiIconProps, type MuiSvgIconProps } from '../mui-wrapper'

// MD3 Icon Component System
// Nutzt alle spezifizierten Icons aus @mui/icons-material

export interface IconProps extends MuiIconProps {
  // Keine zusätzlichen Props, nutzt die Standard-Props für eine konsistente API
}

const IconBase = (IconComponent: React.ElementType) => {
  return React.forwardRef<SVGSVGElement, IconProps>(
    (props, ref) => {
      const sx = {
        // MD3 konforme Icon-Stile
        ...props.sx,
      };

      return (
        <IconComponent
          ref={ref}
          sx={sx}
          {...props}
        />
      )
    }
  )
}

export { IconBase }
export default IconBase