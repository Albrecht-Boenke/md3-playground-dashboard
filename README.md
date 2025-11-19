# 🎮 MD3 Playground Dashboard

Material Design 3 Component Playground & Roadmap Tracker

## 📋 Projekt-Übersicht

2-tier Monorepo mit:
- **apps/homepage**: Öffentliche Landing Page (Port 3000)
- **apps/playground**: Component Playground mit Live-Editor & Roadmap Tracker (Port 3001)
- **packages/ui**: Shared UI Package (Atomic Design)

## 🏗️ Tech-Stack

- **Next.js**: 15.5.2
- **React**: 18.3.1
- **MUI**: 7.3.1
- **TypeScript**: 5.0.0
- **Turborepo**: 1.10.0
- **pnpm**: 10.19.0

## 🚀 Setup

### Voraussetzungen

- Node.js 20+
- pnpm 10.19.0

### Installation

```bash
# Dependencies installieren
pnpm install

# UI Package builden
pnpm --filter @packages/ui build

# Development Server starten
pnpm dev
```

## 📦 Scripts

```bash
# Development
pnpm dev                    # Startet beide Apps
pnpm dev:homepage          # Nur Homepage (Port 3000)
pnpm dev:playground        # Nur Playground (Port 3001)

# Build
pnpm build                 # Build alle Packages
pnpm build:homepage        # Build Homepage
pnpm build:playground      # Build Playground

# Type Checking
pnpm type-check            # TypeScript Check für alle Packages

# Clean
pnpm clean                 # Clean Build Artefakte
```

## 📁 Projektstruktur

```
md3-playground-dashboard/
├── apps/
│   ├── homepage/         # Landing Page App
│   └── playground/       # Playground Dashboard App
├── packages/
│   └── ui/               # Shared UI Package (Atomic Design)
│       └── src/
│           ├── atoms/    # 14 Atoms
│           ├── molecules/ # 8 Molecules
│           ├── organisms/ # 9 Organisms
│           ├── templates/ # 1 Template
│           └── theme.ts  # Material Design 3 Theme
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## 🎨 Atomic Design

Das UI Package folgt Atomic Design Prinzipien:

- **Atoms**: Minimale UI-Elemente (Button, Card, Chip, etc.)
- **Molecules**: Kombinationen von Atomen (TextField, Alert, Dialog)
- **Organisms**: Komplexe UI-Blöcke (Navigation, DataTable, Form)
- **Templates**: Layout-Strukturen (PageLayout)

## 📝 Nächste Schritte

1. Komponenten in `packages/ui` implementieren
2. Playground Features entwickeln
3. Roadmap Tracker implementieren
4. Homepage gestalten

## 📚 Dokumentation

Siehe `xAI_PLAYGROUND/` für detaillierte Dokumentation und Prompts.

