# 🛡️ Code Quality & Import Rules

**Zweck**: Automatische Prüfung und Verhinderung von direkten MUI-Imports in Apps

---

## 🚫 Import-Regeln

### ✅ ERLAUBT

**In Apps (homepage, playground)**:
```typescript
// ✅ Korrekt: Import über @packages/ui
import { Button, Card, Typography } from '@packages/ui';
import { theme } from '@packages/ui';

// ✅ Korrekt: Next.js-spezifische MUI-Imports (nur in layout.tsx)
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
```

**In packages/ui**:
```typescript
// ✅ Korrekt: Direkte MUI-Imports sind in packages/ui erlaubt
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { IconButton } from '@mui/material';
```

### ❌ VERBOTEN

**In Apps (homepage, playground)**:
```typescript
// ❌ VERBOTEN: Direkte MUI-Imports (außer in layout.tsx)
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';

// ❌ VERBOTEN: Deep Imports
import { Button } from '@packages/ui/src/atoms/Button';

// ❌ VERBOTEN: Relative Imports zu packages
import { Button } from '../../../packages/ui/src/atoms/Button';
```

---

## 🔧 Automatische Prüfung

### ESLint

ESLint prüft automatisch alle Dateien und verhindert direkte MUI-Imports in Apps:

```bash
# Lint-Check ausführen
pnpm lint

# Lint mit Auto-Fix (wo möglich)
pnpm lint --fix
```

**ESLint-Regel**: `no-restricted-imports`
- Verhindert `@mui/material`, `@mui/icons-material`, `@mui/system` in Apps
- Erlaubt diese Imports nur in `packages/ui/**`
- Ausnahme: `layout.tsx` und `providers.tsx` dürfen `@mui/material/styles` und `@mui/material/CssBaseline` importieren

### TypeScript

TypeScript Path Aliases stellen sicher, dass Imports korrekt aufgelöst werden:

```json
{
  "paths": {
    "@packages/*": ["./packages/*/src"]
  }
}
```

---

## 📁 Komponenten-Struktur

### Standard-Struktur für alle Komponenten

```
packages/ui/src/
└── atoms/
    └── Button/
        ├── Button.tsx      # Komponente mit 'use client'
        └── index.ts        # Export
```

**WICHTIG**:
- ✅ Jede Komponente in eigenem Ordner
- ✅ `ComponentName.tsx` als Hauptdatei
- ✅ `index.ts` für Exports
- ✅ `'use client'` Directive für Client Components
- ✅ `forwardRef` + `displayName` verwenden
- ✅ TypeScript Interfaces definieren

### Beispiel: Button-Komponente (bereits implementiert)

```typescript
// packages/ui/src/atoms/Button/Button.tsx
'use client';

import * as React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  // Custom Props
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return <MuiButton ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';
```

```typescript
// packages/ui/src/atoms/Button/index.ts
export { Button, IconButton } from './Button';
export type { ButtonProps, IconButtonProps } from './Button';
```

```typescript
// packages/ui/src/index.ts
export { Button, IconButton } from './atoms/Button';
export type { ButtonProps, IconButtonProps } from './atoms/Button';
```

---

## 🎯 Best Practices

### 1. Komponenten-Erstellung

**Schritte**:
1. Erstelle Ordner: `packages/ui/src/[level]/[Component]/`
2. Erstelle `ComponentName.tsx` mit `'use client'`
3. Verwende `forwardRef` + `displayName`
4. Erweitere MUI Props (nicht ersetzen)
5. Erstelle `index.ts` für Exports
6. Exportiere in `packages/ui/src/index.ts`
7. Teste in Playground

### 2. Import-Patterns

**In Apps**:
```typescript
// ✅ Immer über @packages/ui
import { Button, Card, TextField } from '@packages/ui';
```

**In packages/ui**:
```typescript
// ✅ Direkte MUI-Imports erlaubt
import { Button as MuiButton } from '@mui/material';
```

### 3. TypeScript Interfaces

**Immer Props Interface definieren**:
```typescript
export interface ButtonProps extends MuiButtonProps {
  /**
   * Custom prop description
   */
  customProp?: string;
}
```

---

## 🚨 Fehlerbehebung

### ESLint-Fehler: "Direkte MUI-Imports sind verboten"

**Problem**: Direkter MUI-Import in App erkannt

**Lösung**:
1. Prüfe ob Komponente in `@packages/ui` existiert
2. Falls nicht: Erstelle Komponente in `packages/ui`
3. Importiere über `@packages/ui`

**Beispiel**:
```typescript
// ❌ Falsch
import { Button } from '@mui/material';

// ✅ Richtig
import { Button } from '@packages/ui';
```

### TypeScript-Fehler: "Cannot find module '@packages/ui'"

**Problem**: Path Alias nicht aufgelöst

**Lösung**:
1. Prüfe `tsconfig.json` → `paths`
2. Stelle sicher, dass `@packages/ui` gebaut wurde: `pnpm --filter @packages/ui build`
3. Neustart TypeScript Server in IDE

---

## 📝 Checkliste für neue Komponenten

- [ ] Ordner-Struktur: `packages/ui/src/[level]/[Component]/`
- [ ] `ComponentName.tsx` mit `'use client'`
- [ ] `forwardRef` + `displayName` verwendet
- [ ] TypeScript Interface definiert
- [ ] MUI Props erweitert (nicht ersetzt)
- [ ] `index.ts` erstellt
- [ ] In `packages/ui/src/index.ts` exportiert
- [ ] ESLint-Check bestanden: `pnpm lint`
- [ ] TypeScript-Check bestanden: `pnpm type-check`
- [ ] Im Playground getestet

---

## 🔍 Verifikation

### Lint-Check
```bash
pnpm lint
```

### Type-Check
```bash
pnpm type-check
```

### Build-Check
```bash
pnpm build
```

---

## 📚 Weitere Dokumentation

- **IMPORT_RULES.md**: Detaillierte Import-Regeln
- **xAI_PLAYGROUND/MAIN_PROJECT/AI_DESIGN_CONTEXT.md**: Design System Dokumentation
- **xAI_PLAYGROUND/MAIN_PROJECT/AI_PROJECT_CONTEXT.md**: Projekt-Kontext

---

**Dokument-Ende**: CODE_QUALITY.md
**Zweck**: Verhindert direkte MUI-Imports und stellt Code-Qualität sicher
**Nächste Aktualisierung**: Bei neuen Regeln oder Patterns

