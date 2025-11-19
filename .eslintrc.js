/**
 * ESLint Configuration für MD3 Playground Dashboard
 * 
 * WICHTIG: Verhindert direkte MUI-Imports in Apps
 * - Apps dürfen nur @packages/ui importieren
 * - packages/ui darf direkt @mui/material importieren
 */

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript Strict Rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off', // Ignoriere Next.js generated files
  },
  overrides: [
    {
      // Erlaube direkte MUI-Imports NUR in packages/ui
      files: ['packages/ui/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      // Strengere Regeln für Apps - Verhindere direkte MUI-Imports
      files: ['apps/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@mui/material',
                message:
                  '❌ Direkte MUI-Imports sind in Apps verboten. Verwende stattdessen: import { Component } from "@packages/ui"',
              },
              {
                name: '@mui/icons-material',
                message:
                  '❌ Direkte MUI-Imports sind in Apps verboten. Verwende stattdessen: import { Component } from "@packages/ui"',
              },
              {
                name: '@mui/system',
                message:
                  '❌ Direkte MUI-Imports sind in Apps verboten. Verwende stattdessen: import { Component } from "@packages/ui"',
              },
            ],
          },
        ],
      },
    },
    {
      // Ausnahme für Layout-Dateien: Erlaube Next.js-spezifische MUI-Imports
      files: ['apps/**/layout.tsx', 'apps/**/providers.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@mui/material',
                message:
                  '❌ Direkte MUI-Imports sind in Apps verboten. Ausnahme: @mui/material/styles, @mui/material/CssBaseline sind für Layout erlaubt',
              },
              {
                name: '@mui/icons-material',
                message:
                  '❌ Direkte MUI-Imports sind in Apps verboten. Verwende stattdessen: import { Component } from "@packages/ui"',
              },
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'dist/',
    'build/',
    '*.config.js',
    '*.config.ts',
    'pnpm-lock.yaml',
    '**/next-env.d.ts',
  ],
};
