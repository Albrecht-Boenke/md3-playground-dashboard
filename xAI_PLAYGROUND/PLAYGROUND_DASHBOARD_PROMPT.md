# 🎮 MD3 Playground Dashboard - Kimi k2 Optimierter Prompt
**Version**: 1.0 · **Datum**: 2025-01-18 · **Zweck**: Material Design 3 Component Playground & Roadmap Tracker

---

## 🎯 PROJEKT-ÜBERSICHT

Erstelle eine **Material Design 3 Component Playground & Roadmap Dashboard** als 2-tier Monorepo mit:
- **apps/homepage**: Öffentliche Landing Page
- **apps/playground**: Component Playground mit Live-Editor & Roadmap Tracker

**Tech-Stack**: Next.js 15.5.2, React 18.3.1, MUI 7.3.1, TypeScript 5.0.0, Turborepo, pnpm

---

## 🏗️ ARCHITEKTUR & STRUKTUR

### Monorepo-Struktur (2-Tier)

```
md3-playground-dashboard/
├── apps/
│   ├── homepage/              # Port 3000 - Landing Page
│   │   ├── app/
│   │   ├── components/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── playground/            # Port 3001 - Playground Dashboard
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── playground/
│       │   │   ├── page.tsx
│       │   │   └── [componentId]/
│       │   │       └── page.tsx
│       │   └── roadmap/
│       │       └── page.tsx
│       ├── components/
│       │   ├── playground/
│       │   │   ├── CodeEditor.tsx
│       │   │   ├── ComponentPreview.tsx
│       │   │   ├── PropsEditor.tsx
│       │   │   └── ComponentGrid.tsx
│       │   ├── roadmap/
│       │   │   ├── RoadmapCalendar.tsx
│       │   │   ├── TaskCard.tsx
│       │   │   └── TaskModal.tsx
│       │   ├── showcase/
│       │   │   ├── ButtonShowcase.tsx
│       │   │   ├── TextFieldShowcase.tsx
│       │   │   └── [15 Komponenten Showcases]
│       │   └── layout/
│       │       ├── Header.tsx
│       │       ├── Sidebar.tsx
│       │       └── Footer.tsx
│       ├── hooks/
│       │   ├── useRoadmap.ts
│       │   ├── usePlaygroundEditor.ts
│       │   └── useLocalStorage.ts
│       ├── constants/
│       │   └── components.ts
│       ├── types/
│       │   ├── roadmap.ts
│       │   └── playground.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── ui/                     # Shared UI Package (Atomic Design)
│       ├── src/
│       │   ├── atoms/          # 14 Atoms
│       │   │   ├── Button/
│       │   │   ├── Card/
│       │   │   ├── Chip/
│       │   │   └── ...
│       │   ├── molecules/      # 8 Molecules
│       │   │   ├── TextField/
│       │   │   ├── Alert/
│       │   │   └── ...
│       │   ├── organisms/      # 9 Organisms
│       │   │   ├── Navigation/
│       │   │   ├── DataTable/
│       │   │   └── ...
│       │   ├── templates/       # 1 Template
│       │   │   └── PageLayout/
│       │   ├── theme.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── package.json               # Root package.json
├── turbo.json                 # Turborepo Config
├── pnpm-workspace.yaml        # pnpm Workspaces
└── tsconfig.json              # Root TypeScript Config
```

### Atomic Design Prinzipien

**Atoms** (`packages/ui/src/atoms/`):
- Minimale UI-Elemente (Button, Card, Chip, Icon, Typography)
- Keine Business Logic
- Maximale Wiederverwendbarkeit
- Struktur: `ComponentName/ComponentName.tsx` + `index.ts`

**Molecules** (`packages/ui/src/molecules/`):
- Kombinationen von 2+ Atomen (TextField, Alert, Dialog)
- Einfache Business Logic (Form Validation)
- Struktur: `ComponentName/ComponentName.tsx` + `index.ts`

**Organisms** (`packages/ui/src/organisms/`):
- Komplexe UI-Blöcke (Navigation, DataTable, Form)
- Erweiterte Business Logic
- Struktur: `CategoryName/ComponentName/ComponentName.tsx` + `index.ts`

**Templates** (`packages/ui/src/templates/`):
- Layout-Strukturen (PageLayout, DashboardLayout)
- Struktur: `ComponentName/ComponentName.tsx` + `index.ts`

**WICHTIG**: Alle Komponenten müssen:
- `'use client'` Directive haben
- `forwardRef` + `displayName` verwenden
- TypeScript Interfaces mit JSDoc dokumentieren
- In `index.ts` exportiert werden
- MUI Props erweitern (nicht ersetzen)

---

## 📦 EXAKTE VERSIONIERUNGEN

### Root package.json

```json
{
  "name": "md3-playground-dashboard",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@10.19.0",
  "scripts": {
    "build": "turbo run build",
    "build:homepage": "turbo run build --filter=homepage",
    "build:playground": "turbo run build --filter=playground",
    "dev": "turbo run dev",
    "dev:homepage": "turbo run dev --filter=homepage",
    "dev:playground": "turbo run dev --filter=playground",
    "lint": "turbo run lint",
    "type-check": "turbo run type-check",
    "clean": "turbo run clean",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.1",
    "@testing-library/jest-dom": "^6.8.0",
    "@testing-library/react": "^16.3.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^20.19.11",
    "@vitest/ui": "^4.0.3",
    "eslint": "^8.57.1",
    "prettier": "^3.0.0",
    "turbo": "^1.10.0",
    "typescript": "^5.0.0",
    "vitest": "^4.0.3"
  },
  "pnpm": {
    "overrides": {
      "@mui/material": "7.3.1",
      "@mui/system": "7.3.1",
      "@mui/icons-material": "7.3.1",
      "@mui/x-date-pickers": "7.22.2",
      "@mui/material-nextjs": "7.3.0",
      "@emotion/react": "11.14.0",
      "@emotion/styled": "11.14.1",
      "next": "15.5.2",
      "vite": ">=7.1.11"
    }
  },
  "dependencies": {
    "@mui/icons-material": "^7.3.1",
    "@mui/material-nextjs": "^7.3.0"
  }
}
```

### apps/playground/package.json

```json
{
  "name": "playground",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next .turbo"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.3.1",
    "@mui/material": "^7.3.1",
    "@mui/material-nextjs": "^7.3.0",
    "@mui/system": "^7.3.1",
    "@monaco-editor/react": "^4.6.0",
    "@packages/ui": "workspace:*",
    "date-fns": "^3.6.0",
    "next": "15.5.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "uuid": "^9.0.1",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/node": "^20.19.11",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@types/uuid": "^9.0.6",
    "eslint": "^8.57.1",
    "eslint-config-next": "15.5.2",
    "typescript": "^5.0.0"
  }
}
```

### apps/homepage/package.json

```json
{
  "name": "homepage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next .turbo"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.3.1",
    "@mui/material": "^7.3.1",
    "@mui/material-nextjs": "^7.3.0",
    "@mui/system": "^7.3.1",
    "@packages/ui": "workspace:*",
    "next": "15.5.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20.19.11",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8.57.1",
    "eslint-config-next": "15.5.2",
    "typescript": "^5.0.0"
  }
}
```

### packages/ui/package.json

```json
{
  "name": "@packages/ui",
  "version": "0.1.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist .turbo"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.3.1",
    "@mui/material": "^7.3.1",
    "@mui/system": "^7.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.0.0"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

---

## 🎨 MATERIAL DESIGN 3 THEME

### Theme-Konfiguration (`packages/ui/src/theme.ts`)

```typescript
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3366FF',
      light: '#6B9AFF',
      dark: '#003DA5',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF9696',
      dark: '#C4303D',
    },
    success: { main: '#1DB854' },
    warning: { main: '#FFB81C' },
    error: { main: '#FF5252' },
    info: { main: '#2196F3' },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 400 },
    h2: { fontSize: '2.5rem', fontWeight: 400 },
    h3: { fontSize: '2rem', fontWeight: 500 },
    h4: { fontSize: '1.75rem', fontWeight: 500 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
  },
  shape: {
    borderRadius: 12, // MD3 Medium
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});
```

---

## 🎮 PLAYGROUND FEATURES

### 1. Component Gallery (`/playground`)

**Features**:
- Grid-Layout mit allen 15 Komponenten
- Search & Filter (Category, Tags)
- Component Cards mit Preview
- Click öffnet Detail-Page

**15 Core Components**:
1. Button (contained, outlined, text, elevated)
2. TextField (outlined, filled, standard)
3. Card (Header, Content, Actions)
4. Chip (Avatar, Icon, Delete)
5. Alert (success, error, warning, info)
6. Dialog/Modal (Confirm Pattern)
7. Snackbar (Positioning, Auto-dismiss)
8. Progress (Linear, Circular)
9. Tabs (Icons, Labels)
10. Menu/Dropdown (Icons, Disabled)
11. Checkbox (Indeterminate)
12. RadioGroup (Label, Helper)
13. Switch (Labels)
14. Slider (Range, Single)
15. Autocomplete (Search, Multi-Select)

### 2. Component Detail Page (`/playground/[componentId]`)

**Layout**:
- Breadcrumb Navigation
- Component Title & Description
- Tab Navigation: Overview | Examples | API | Variants
- Live Demo mit Props Editor
- Code Snippets (Copy Button)
- Props Table (Name, Type, Default, Description)
- All Variants Showcase

### 3. Code Editor & Live Preview

**Split-View Layout**:
- Left: Monaco Editor (JSX/TypeScript/JSON)
- Right: Live Component Preview
- Real-time Updates
- Error Boundary für Safe Rendering
- Copy Code Button
- Export as JSON/Markdown

**Monaco Editor Config**:
```typescript
import Editor from '@monaco-editor/react';

<Editor
  height="100%"
  language="typescript"
  theme="vs-dark"
  value={code}
  onChange={handleCodeChange}
  options={{
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    formatOnPaste: true,
  }}
/>
```

### 4. Props Editor

**Features**:
- Form-basierte Props Bearbeitung
- Type-aware Input Fields
- Real-time Preview Update
- Zod Schema Validation
- Preset Configurations
- Reset to Defaults

### 5. Roadmap Tracker (`/roadmap`)

**Features**:
- 6-Weeks Timeline View
- Daily Task Cards
- Drag-and-Drop (optional)
- Task Status (Todo, In Progress, Done, Blocked)
- Task Editor Modal (Title, Description, Priority, Assignee)
- Category Filters (Features, Bugs, Refactoring, Chores)
- Progress Indicator (% completed per week)
- LocalStorage Persistence
- Export to JSON/Markdown

**Roadmap Data Structure**:
```typescript
interface Week {
  week: number;
  title: string;
  description: string;
  days: Day[];
}

interface Day {
  day: string;
  title: string;
  tasks: Task[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'critical' | 'high' | 'medium' | 'low';
  estimatedHours: number;
  category: 'feature' | 'bug' | 'refactoring' | 'chore';
  notes: string;
  discussionPoints: string[];
}
```

---

## 🏠 HOMEPAGE APP

### Minimal Landing Page

**Routes**:
- `/` - Hero Section + Features
- `/about` - About Page
- `/contact` - Contact Form

**Features**:
- Material Design 3 "outlined" Style
- Responsive Design
- Uses `@packages/ui` Components
- Clean, Professional Layout

---

## 🔧 TECHNISCHE ANFORDERUNGEN

### Next.js 15.5.2 App Router

**Root Layout** (`apps/playground/app/layout.tsx`):
```typescript
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@packages/ui/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

### TypeScript Config

**Root tsconfig.json**:
```json
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "paths": {
      "@packages/*": ["./packages/*/src"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next", "dist"]
}
```

### Turborepo Config (`turbo.json`)

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"],
      "cache": true
    },
    "@packages/ui#build": {
      "dependsOn": [],
      "outputs": ["dist/**"],
      "cache": true
    },
    "homepage#build": {
      "dependsOn": ["@packages/ui#build"],
      "outputs": [".next/**"],
      "cache": true
    },
    "playground#build": {
      "dependsOn": ["@packages/ui#build"],
      "outputs": [".next/**"],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    },
    "clean": {
      "cache": false
    }
  }
}
```

### pnpm Workspace (`pnpm-workspace.yaml`)

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

---

## 📋 IMPLEMENTIERUNGS-CHECKLISTE

### Phase 1: Foundation (Tag 1-2)
- [ ] Monorepo-Struktur erstellen
- [ ] Root package.json mit pnpm overrides
- [ ] turbo.json konfigurieren
- [ ] pnpm-workspace.yaml erstellen
- [ ] TypeScript Configs (Root + Apps + Packages)
- [ ] packages/ui mit Atomic Design Struktur
- [ ] Theme-System in packages/ui
- [ ] Basis-Komponenten (Button, Card, Typography)

### Phase 2: Playground App (Tag 3-5)
- [ ] Next.js 15.5.2 App Router Setup
- [ ] Root Layout mit Theme Provider
- [ ] Navigation (Header, Sidebar, Footer)
- [ ] Component Gallery Page
- [ ] Component Detail Page mit Tabs
- [ ] Monaco Editor Integration
- [ ] Live Preview Component
- [ ] Props Editor
- [ ] Component Registry (constants/components.ts)

### Phase 3: Roadmap Tracker (Tag 6-7)
- [ ] Roadmap Page Layout
- [ ] 6-Weeks Timeline View
- [ ] Task Cards
- [ ] Task Modal (Create/Edit)
- [ ] LocalStorage Persistence
- [ ] Progress Indicators
- [ ] Export Functions (JSON/Markdown)

### Phase 4: Component Showcases (Tag 8-10)
- [ ] 15 Component Showcases erstellen
- [ ] Alle Varianten dokumentieren
- [ ] Props Tables
- [ ] Code Examples
- [ ] Best Practices

### Phase 5: Homepage App (Tag 11-12)
- [ ] Minimal Landing Page
- [ ] Hero Section
- [ ] About Page
- [ ] Contact Form
- [ ] Responsive Design

### Phase 6: Polish & Testing (Tag 13-14)
- [ ] Error Boundaries
- [ ] Loading States
- [ ] Accessibility Checks
- [ ] Performance Optimization
- [ ] Mobile Responsive Testing

---

## 🎯 QUALITÄTSSTANDARDS

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Atomic Design Prinzipien
- ✅ MUI Props erweitern (nicht ersetzen)
- ✅ `forwardRef` + `displayName` für alle Komponenten
- ✅ JSDoc Dokumentation

### Accessibility
- ✅ ARIA Labels
- ✅ Keyboard Navigation
- ✅ Color Contrast (WCAG AA)
- ✅ Screen Reader Support

### Performance
- ✅ Code Splitting
- ✅ Lazy Loading für Monaco Editor
- ✅ Image Optimization
- ✅ Bundle Size Optimization

---

## 🚀 DEPLOYMENT

### Vercel Setup
- **Homepage**: `apps/homepage` → Port 3000
- **Playground**: `apps/playground` → Port 3001
- **Build Command**: `pnpm build`
- **Install Command**: `pnpm install`
- **Root Directory**: `.` (Monorepo Root)

### Environment Variables
- Keine erforderlich für MVP (LocalStorage-basiert)

---

## 📝 WICHTIGE HINWEISE

1. **Atomic Design**: Alle Komponenten müssen in `packages/ui` nach Atomic Design strukturiert sein
2. **Versionierung**: Exakt die Versionen aus diesem Prompt verwenden
3. **MUI Integration**: `@mui/material-nextjs` für App Router verwenden
4. **LocalStorage**: Roadmap-Daten in LocalStorage speichern (keine DB nötig)
5. **Monaco Editor**: `'use client'` Directive für Editor-Komponenten
6. **TypeScript**: Strict mode aktiviert
7. **pnpm Workspaces**: Alle Packages als `workspace:*` referenzieren

---

## ✅ ERFOLGS-KRITERIEN

Das Projekt ist erfolgreich wenn:
- ✅ Beide Apps starten (`pnpm dev`)
- ✅ Playground zeigt 15 Komponenten
- ✅ Monaco Editor funktioniert
- ✅ Live Preview aktualisiert sich
- ✅ Roadmap speichert in LocalStorage
- ✅ Homepage lädt ohne Fehler
- ✅ Alle Komponenten aus `@packages/ui` importierbar
- ✅ TypeScript kompiliert ohne Fehler
- ✅ Build funktioniert (`pnpm build`)

---

**ENDE DES PROMPTS**

