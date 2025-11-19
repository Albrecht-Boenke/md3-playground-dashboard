# 📁 Komponenten-Struktur & Best Practices

**Zweck**: Standard-Struktur für alle Komponenten im MD3 Playground Dashboard

---

## 🎯 Standard-Struktur

### Ordner-Struktur

**Jede Komponente muss in einem eigenen Ordner erstellt werden**:

```
packages/ui/src/
└── atoms/
    └── Button/
        ├── Button.tsx      # Haupt-Komponente
        └── index.ts        # Export-Datei
```

**WICHTIG**: 
- ✅ Jede Komponente in eigenem Ordner
- ✅ Ordner-Name = Komponenten-Name (PascalCase)
- ✅ `ComponentName.tsx` als Hauptdatei
- ✅ `index.ts` für Exports

---

## 📝 Komponenten-Template

### Button.tsx (Beispiel)

```typescript
'use client';

import * as React from 'react';
import { 
  Button as MuiButton, 
  ButtonProps as MuiButtonProps,
} from '@mui/material';

/**
 * Button Component
 * 
 * Material Design 3 compliant button component.
 * 
 * @example
 * ```tsx
 * <Button variant="contained">Click me</Button>
 * ```
 */
export interface ButtonProps extends MuiButtonProps {
  /**
   * Button variant following MD3 specifications
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text' | 'elevated';
  
  /**
   * Show loading state
   * @default false
   */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'contained', 
    loading = false,
    children, 
    disabled,
    ...props 
  }, ref) => {
    return (
      <MuiButton
        ref={ref}
        variant={variant}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
```

### index.ts (Export)

```typescript
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

### packages/ui/src/index.ts (Main Export)

```typescript
// Atoms
export { Button, IconButton } from './atoms/Button';
export type { ButtonProps, IconButtonProps } from './atoms/Button';
```

---

## ✅ Checkliste für neue Komponenten

### Vor der Implementierung
- [ ] Atomic Level bestimmt (Atom/Molecule/Organism/Template)
- [ ] Ordner-Struktur geplant
- [ ] MD3-Spezifikationen recherchiert

### Während der Implementierung
- [ ] Ordner erstellt: `packages/ui/src/[level]/[Component]/`
- [ ] `ComponentName.tsx` mit `'use client'` erstellt
- [ ] `forwardRef` verwendet
- [ ] `displayName` gesetzt
- [ ] TypeScript Interface definiert
- [ ] JSDoc Kommentare hinzugefügt
- [ ] MUI Props erweitert (nicht ersetzt)
- [ ] `index.ts` erstellt
- [ ] In `packages/ui/src/index.ts` exportiert

### Nach der Implementierung
- [ ] ESLint-Check: `pnpm lint` ✅
- [ ] TypeScript-Check: `pnpm type-check` ✅
- [ ] Build-Check: `pnpm --filter @packages/ui build` ✅
- [ ] Im Playground getestet
- [ ] Showcase-Komponente erstellt (optional)

---

## 🎨 Atomic Design Levels

### Atoms (14 Komponenten)
**Struktur**: `packages/ui/src/atoms/[Component]/`
**Beispiele**: Button, Card, Chip, Icon, Typography

**Charakteristika**:
- Minimale UI-Elemente
- Keine Business Logic
- Maximale Wiederverwendbarkeit
- Einzelne Datei pro Komponente

### Molecules (8 Komponenten)
**Struktur**: `packages/ui/src/molecules/[Component]/`
**Beispiele**: TextField, Alert, Dialog

**Charakteristika**:
- Kombinationen von 2+ Atomen
- Einfache Business Logic
- Spezifische Anwendungsfälle

### Organisms (9 Komponenten)
**Struktur**: `packages/ui/src/organisms/[Component]/`
**Beispiele**: Navigation, DataTable, Form

**Charakteristika**:
- Komplexe UI-Strukturen
- Erweiterte Business Logic
- Vollständige Features

### Templates (1 Komponente)
**Struktur**: `packages/ui/src/templates/[Component]/`
**Beispiele**: PageLayout

**Charakteristika**:
- Layout-Vorlagen
- Content-agnostisch
- Wiederverwendbare Strukturen

---

## 🔧 Technische Anforderungen

### 1. 'use client' Directive
**WICHTIG**: Alle Komponenten müssen `'use client'` haben

```typescript
'use client';

import * as React from 'react';
// ...
```

### 2. forwardRef
**WICHTIG**: Alle Komponenten müssen `forwardRef` verwenden

```typescript
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return <MuiButton ref={ref} {...props} />;
  }
);
```

### 3. displayName
**WICHTIG**: Alle Komponenten müssen `displayName` haben

```typescript
Button.displayName = 'Button';
```

### 4. TypeScript Interfaces
**WICHTIG**: Props Interface immer definieren

```typescript
export interface ButtonProps extends MuiButtonProps {
  /**
   * Prop description
   */
  customProp?: string;
}
```

### 5. MUI Props erweitern
**WICHTIG**: MUI Props erweitern, nicht ersetzen

```typescript
// ✅ Richtig: Erweitern
export interface ButtonProps extends MuiButtonProps {
  customProp?: string;
}

// ❌ Falsch: Ersetzen
export interface ButtonProps {
  // MUI Props fehlen
}
```

---

## 📚 Referenz: Button-Komponente (Beispiel)

Die Button-Komponente aus dem Hauptprojekt wurde bereits kopiert und dient als Referenz:

**Lage**: `packages/ui/src/atoms/Button/`

**Features**:
- ✅ `forwardRef` + `displayName`
- ✅ TypeScript Interfaces
- ✅ MUI Props erweitert
- ✅ Loading State
- ✅ Icon Support
- ✅ IconButton Export

**Verwendung**:
```typescript
import { Button, IconButton } from '@packages/ui';

<Button variant="contained">Click me</Button>
<IconButton><Icon /></IconButton>
```

---

## 🚨 Häufige Fehler vermeiden

### ❌ Falsch: Komponente ohne Ordner
```
packages/ui/src/atoms/Button.tsx  // ❌ Falsch
```

### ✅ Richtig: Komponente in Ordner
```
packages/ui/src/atoms/Button/Button.tsx  // ✅ Richtig
packages/ui/src/atoms/Button/index.ts
```

### ❌ Falsch: Kein forwardRef
```typescript
export const Button = ({ ...props }) => {  // ❌ Falsch
  return <MuiButton {...props} />;
};
```

### ✅ Richtig: Mit forwardRef
```typescript
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {  // ✅ Richtig
    return <MuiButton ref={ref} {...props} />;
  }
);
```

### ❌ Falsch: Kein displayName
```typescript
export const Button = React.forwardRef(...);
// ❌ displayName fehlt
```

### ✅ Richtig: Mit displayName
```typescript
export const Button = React.forwardRef(...);
Button.displayName = 'Button';  // ✅ Richtig
```

---

## 📖 Weitere Dokumentation

- **CODE_QUALITY.md**: Import-Regeln und Code-Qualität
- **IMPORT_RULES.md**: Detaillierte Import-Regeln
- **xAI_PLAYGROUND/MAIN_PROJECT/AI_DESIGN_CONTEXT.md**: Design System Dokumentation

---

**Dokument-Ende**: COMPONENT_STRUCTURE.md
**Zweck**: Standard-Struktur für alle Komponenten
**Referenz**: Button-Komponente in `packages/ui/src/atoms/Button/`

