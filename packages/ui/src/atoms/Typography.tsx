'use client'

import * as React from 'react'
import { MuiTypography, type MuiTypographyProps } from '../mui-wrapper'

// MD3 Typography-Komponente mit allen spezifizierten Varianten aus AI_DESIGN_CONTEXT.md
// Variants: h1-h6, body1, body2, caption (8 total)

export interface TypographyProps extends MuiTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'
  component?: React.ElementType
  gutterBottom?: boolean
  noWrap?: boolean
  paragraph?: boolean
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({
    variant = 'body1',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    children,
    ...props
  }, ref) => {
    const sx = {
      // MD3 konforme Typographie aus AI_DESIGN_CONTEXT.md Spezifikationen
      ...props.sx,
    };

    return (
      <MuiTypography
        ref={ref}
        variant={variant}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        sx={sx}
        {...props}
      >
        {children}
      </MuiTypography>
    )
  }
)

Typography.displayName = 'Typography'

export { Typography }
export default Typography