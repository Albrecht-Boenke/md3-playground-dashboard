'use client'

import * as React from 'react'
import { MuiSlider, type MuiSliderProps } from '../mui-wrapper'

// MD3 Slider Component für Werteauswahl
// Unterstützt Einzel- und Bereichsauswahl mit verschiedenen Modi

export interface SliderProps extends Omit<MuiSliderProps, 'value' | 'onChange'> {
  /**
   * Aktueller Wert oder Wertebereich
   */
  value?: number | number[];
  /**
   * Callback bei Wertänderung
   */
  onChange?: (event: Event, value: number | number[]) => void;
  /**
   * Minimaler Wert
   */
  min?: number;
  /**
   * Maximaler Wert
   */
  max?: number;
  /**
   * Schrittweite
   */
  step?: number;
  /**
   * Ob der Wert angezeigt werden soll
   */
  valueLabelDisplay?: 'on' | 'auto' | 'off';
  /**
   * Ob Markierungen angezeigt werden sollen
   */
  marks?: boolean | Array<{ value: number; label?: string }>;
  /**
   * Ob der Slider deaktiviert ist
   */
  disabled?: boolean;
  /**
   * Ob Mehrfachauswahl (Range) unterstützt wird
   */
  range?: boolean;
  /**
   * Farbschema des Sliders
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  ({
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    color = 'primary',
    disabled = false,
    range = false,
    valueLabelDisplay = 'off',
    marks = false,
    sx = {},
    onChange,
    ...props
  }, ref) => {

    // MD3 konforme Styling
    const sliderSx = {
      // Standard Transition für MD3
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      // Erhöhte Sichtbarkeit des Track
      '& .MuiSlider-track': {
        height: 4,
        border: 'none',
      },
      // Größerer Rail für bessere Klickfläche
      '& .MuiSlider-rail': {
        height: 4,
        borderRadius: 2,
        opacity: 0.2,
      },
      // Größerer Thumb für bessere Bedienung
      '& .MuiSlider-thumb': {
        width: 20,
        height: 20,
        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0px 0px 0px 8px rgba(var(--mui-palette-primary-mainChannel) / 0.08)',
        },
        '&.Mui-focusVisible': {
          boxShadow: '0px 0px 0px 8px rgba(var(--mui-palette-primary-mainChannel) / 0.16)',
        },
      },
      ...sx,
    };

    return (
      <MuiSlider
        ref={ref}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        color={color}
        disabled={disabled}
        marks={marks}
        valueLabelDisplay={valueLabelDisplay}
        // Range-Modus aktivieren wenn range=true
        {...(range && { max: max, min: min })}
        sx={sliderSx}
        {...props}
      />
    )
  }
)

Slider.displayName = 'Slider'

export { Slider }
export default Slider