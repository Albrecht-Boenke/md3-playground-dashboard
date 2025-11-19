# 🌿 ANBAUVEREINIGUNG AI PLAYGROUND: Cannabis-Club UI Development Sandbox
**Version**: 3.0 · **Datum**: 2025-11-18 · **Projekt**: Anbauvereinigung WebApp
**Zweck**: Spezialisierte AI-Agent Playground für Cannabis-Club UI-Komponenten

---

## 🎯 MISSION & CANNABIS-CLUB-KONTEXT

### Cannabis-Club-spezifische Herausforderungen
Als **lizenzierter Cannabis-Club nach KCanG (Konsumcannabisgesetz)** hat die Anbauvereinigung einzigartige UI/UX-Anforderungen:

- **Compliance-UI**: Jede Komponente muss KCanG-konforme Datenerfassung unterstützen
- **Altersverifikation**: UI-Patterns für 18+ Verifikation und Identitätsprüfung
- **Cannabis-Produktkatalog**: Spezialisierte Komponenten für THC/CBD-Anzeige, Strain-Information
- **Limit-Tracking**: UI für Tages- (25g) und Monatslimits (50g) pro Mitglied
- **Mitgliederverwaltung**: Club-spezifische User-Management-Komponenten
- **Bestellabwicklung**: Cannabis-spezifische E-Commerce-Patterns

### Playground-Ziele für die Anbauvereinigung
Erstelle eine **Cannabis-Club-optimierte Entwicklungsumgebung** für:
- **Sichere Komponenten-Entwicklung** ohne Risiko für Live-Cannabis-Operationen
- **Compliance-Testing** aller UI-Komponenten vor Produktions-Deployment
- **Cannabis-UX-Patterns** die andere Projekte nicht haben (Strain-Cards, Limit-Tracker, etc.)
- **Rapid Prototyping** für Cannabis-Club-Features ohne Hauptprojekt zu beeinträchtigen

---

## 🏗️ ANBAUVEREINIGUNG-SPEZIFISCHE ARCHITEKTUR

### Monorepo-Integration (Bestehende Struktur)
```typescript
// Aktuelle Anbauvereinigung-Struktur
anbauvereinigung-webapp/
├── apps/
│   ├── homepage/              // Port 3000 - Öffentliche Website
│   ├── members/               // Port 3001 - Mitglieder-Portal
│   ├── operations/            // Port 3002 - Admin-Dashboard
│   └── playground/            // ← NEUE PLAYGROUND-APP (Port 3003)
│
├── packages/
│   ├── ui/                    // Design System (43 Komponenten)
│   ├── auth/                  // NextAuth + RBAC
│   ├── database/              // Prisma + Multi-Schema
│   ├── trpc/                  // API Layer
│   ├── email/                 // Resend Integration
│   ├── types/                 // Shared TypeScript Types
│   ├── utils/                 // Utility Functions
│   └── compliance/            // KCanG Compliance Engine
│
└── docs/                      // Konsolidierte Dokumentation
    ├── AI_PROJECT_CONTEXT.md
    ├── AI_DESIGN_CONTEXT.md
    ├── PROJECT_FILETREE.md
    └── BIG_PICTURE_TODO.md
```

### Tech-Stack-Exakte-Kompatibilität
```json
// playground/package.json - EXAKT wie Hauptprojekt
{
  "name": "playground",
  "dependencies": {
    "next": "15.5.2",                    // ← Exakt gleiche Version
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@mui/material": "7.3.1",           // Via pnpm overrides
    "@mui/icons-material": "7.3.1",
    "@mui/material-nextjs": "7.3.0",
    "@mui/x-date-pickers": "7.22.2",
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "typescript": "^5.0.0",
    
    // Shared Packages (lokale Referenzen)
    "@packages/ui": "workspace:*",
    "@packages/auth": "workspace:*",
    "@packages/database": "workspace:*",
    "@packages/trpc": "workspace:*",
    "@packages/types": "workspace:*",
    "@packages/utils": "workspace:*",
    "@packages/compliance": "workspace:*",
    
    // Playground-spezifische Additions
    "@monaco-editor/react": "^4.6.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.0",
    "react-beautiful-dnd": "^13.1.1",
    "recharts": "^2.8.0"                 // Für Cannabis-Analytics
  }
}
```

---

## 🌿 CANNABIS-SPEZIFISCHE KOMPONENTEN-BIBLIOTHEK

### Tier 1: Cannabis-Core-Komponenten (MVP)
```typescript
// Cannabis-Club-spezifische UI-Komponenten
const cannabisComponents = [
  // Produkt-Komponenten
  'StrainCard',              // Cannabis-Strain mit THC/CBD-Anzeige
  'ProductCatalog',          // Cannabis-Produktkatalog mit Filtern
  'PotencyIndicator',        // THC/CBD-Stärke-Anzeige
  'StrainEffectsChart',      // Wirkungsdiagramm (Sativa/Indica)
  
  // Compliance-Komponenten
  'AgeVerificationModal',    // 18+ Altersverifikation
  'LimitTracker',            // Tages-/Monatslimit-Anzeige
  'ComplianceAlert',         // KCanG-Compliance-Warnungen
  'MembershipStatusCard',    // Club-Mitgliedschaftsstatus
  
  // E-Commerce-Komponenten
  'CannabisCart',            // Cannabis-spezifischer Warenkorb
  'OrderSummaryCompliance',  // Bestellübersicht mit Compliance-Checks
  'PickupScheduler',         // Abholtermin-Planer
  'PaymentMethodSelector',   // Cannabis-konforme Zahlungsmethoden
  
  // Admin-Komponenten
  'MemberManagementTable',   // Mitgliederverwaltung
  'InventoryTracker',        // Cannabis-Lagerbestand
  'ComplianceReportViewer',  // KCanG-Berichte
  'AlertManagementPanel',    // Admin-Benachrichtigungen
] as const;
```

### Tier 2: Business-Logic-Komponenten
```typescript
const businessComponents = [
  // Analytics & Reporting
  'SalesAnalyticsDashboard', // Cannabis-Verkaufsanalysen
  'MemberEngagementChart',   // Mitglieder-Aktivität
  'ComplianceScoreCard',     // Compliance-Score-Anzeige
  'InventoryForecast',       // Lagerbestand-Prognose
  
  // Communication
  'MemberNotificationCenter', // Mitglieder-Benachrichtigungen
  'ComplianceEmailTemplate',  // E-Mail-Templates für Compliance
  'NewsletterEditor',         // Cannabis-Club-Newsletter
  'EventAnnouncementCard',    // Club-Events
  
  // Advanced Features
  'StrainRecommendationEngine', // AI-basierte Strain-Empfehlungen
  'MemberLoyaltyTracker',       // Treueprogramm-Komponenten
  'QualityControlInterface',    // Qualitätskontrolle-UI
  'SupplierManagementPanel',    // Lieferanten-Verwaltung
] as const;
```

---

## 🎨 CANNABIS-UX-PATTERNS & DESIGN-SYSTEM

### Anbauvereinigung-Theme-Integration
```typescript
// Playground nutzt exakt das gleiche Theme wie Hauptprojekt
import { createCustomTheme } from '@packages/ui/theme';
import { colors, typography, spacing } from '@packages/ui/tokens';

// Cannabis-spezifische Farberweiterungen
const cannabisThemeExtension = {
  cannabis: {
    // THC-Indikator-Farben
    thc: {
      low: '#4caf50',      // Grün für niedrige THC-Werte
      medium: '#ff9800',   // Orange für mittlere THC-Werte  
      high: '#f44336',     // Rot für hohe THC-Werte
    },
    
    // CBD-Indikator-Farben
    cbd: {
      low: '#e3f2fd',      // Hellblau für niedrige CBD-Werte
      medium: '#2196f3',   // Blau für mittlere CBD-Werte
      high: '#0d47a1',     // Dunkelblau für hohe CBD-Werte
    },
    
    // Strain-Typ-Farben
    strainType: {
      sativa: '#4caf50',   // Grün für Sativa
      indica: '#9c27b0',   // Lila für Indica
      hybrid: '#ff9800',   // Orange für Hybrid
    },
    
    // Compliance-Status-Farben
    compliance: {
      approved: '#4caf50',  // Grün für genehmigt
      pending: '#ff9800',   // Orange für ausstehend
      rejected: '#f44336',  // Rot für abgelehnt
      warning: '#ffc107',   // Gelb für Warnung
    },
  },
};
```

### Cannabis-spezifische Design-Patterns
```typescript
// Strain-Card-Pattern
interface StrainCardProps {
  strain: {
    name: string;
    type: 'sativa' | 'indica' | 'hybrid';
    thcContent: number;        // Prozent
    cbdContent: number;        // Prozent
    effects: string[];         // ['euphoric', 'relaxing', 'creative']
    flavors: string[];         // ['citrus', 'earthy', 'sweet']
    description: string;
    image: string;
    pricePerGram: number;
    availability: 'in-stock' | 'low-stock' | 'out-of-stock';
    complianceApproved: boolean;
  };
  onAddToCart: (quantity: number) => void;
  onViewDetails: () => void;
  maxQuantity?: number;        // Basierend auf Mitgliederlimits
}

// Compliance-Alert-Pattern
interface ComplianceAlertProps {
  type: 'age-verification' | 'daily-limit' | 'monthly-limit' | 'membership-status';
  severity: 'info' | 'warning' | 'error';
  message: string;
  actionRequired?: boolean;
  onAction?: () => void;
  autoHide?: boolean;
}

// Limit-Tracker-Pattern
interface LimitTrackerProps {
  member: {
    id: string;
    name: string;
    dailyLimit: number;        // 25g
    monthlyLimit: number;      // 50g
    dailyUsed: number;
    monthlyUsed: number;
  };
  showDetails?: boolean;
  onLimitExceeded?: (type: 'daily' | 'monthly') => void;
}
```

---

## 🎮 PLAYGROUND-FEATURES FÜR CANNABIS-ENTWICKLUNG

### 1. Cannabis-Component-Gallery
```typescript
// Playground-Interface für Cannabis-Komponenten
interface CannabisPlaygroundComponent {
  id: string;
  name: string;
  category: 'cannabis-product' | 'compliance' | 'member-management' | 'analytics';
  cannabisSpecific: true;
  complianceLevel: 'KCanG-required' | 'business-logic' | 'ui-only';
  
  code: {
    tsx: string;
    props: object;
    mockData: {
      strains?: StrainData[];
      members?: MemberData[];
      orders?: OrderData[];
      complianceAlerts?: ComplianceAlert[];
    };
  };
  
  testing: {
    complianceScenarios: ComplianceTestCase[];
    edgeCases: EdgeCaseTest[];
    accessibilityChecks: A11yTest[];
  };
  
  migration: {
    targetApp: 'members' | 'operations' | 'homepage';
    kcanGCompliance: boolean;
    dataPrivacyCompliant: boolean;
    auditTrailRequired: boolean;
  };
}
```

### 2. Cannabis-Mock-Data-Generator
```typescript
// Realistische Cannabis-Testdaten für Playground
const mockDataGenerator = {
  strains: [
    {
      id: 'strain_001',
      name: 'Blue Dream',
      type: 'hybrid',
      thcContent: 18.5,
      cbdContent: 0.8,
      effects: ['euphoric', 'creative', 'relaxing'],
      flavors: ['berry', 'sweet', 'vanilla'],
      description: 'Beliebte Sativa-dominante Hybridsorte mit ausgewogenen Effekten.',
      pricePerGram: 12.50,
      availability: 'in-stock',
      complianceApproved: true,
      harvestDate: '2024-10-15',
      thcRange: { min: 17.0, max: 20.0 },
      cbdRange: { min: 0.5, max: 1.2 },
    },
    {
      id: 'strain_002', 
      name: 'White Widow',
      type: 'indica',
      thcContent: 22.3,
      cbdContent: 0.3,
      effects: ['relaxing', 'sleepy', 'pain-relief'],
      flavors: ['earthy', 'woody', 'spicy'],
      description: 'Klassische Indica-Sorte für entspannende Abendstunden.',
      pricePerGram: 14.00,
      availability: 'low-stock',
      complianceApproved: true,
      harvestDate: '2024-11-01',
      thcRange: { min: 20.0, max: 25.0 },
      cbdRange: { min: 0.1, max: 0.5 },
    },
  ],
  
  members: [
    {
      id: 'member_001',
      name: 'Max Mustermann',
      email: 'max@example.com',
      membershipNumber: 'BRC-2024-001',
      joinDate: '2024-01-15',
      status: 'active',
      ageVerified: true,
      dailyLimit: 25,
      monthlyLimit: 50,
      dailyUsed: 8.5,
      monthlyUsed: 127.3,
      complianceScore: 98,
      lastOrder: '2024-11-17',
    },
  ],
  
  complianceAlerts: [
    {
      id: 'alert_001',
      type: 'monthly-limit-exceeded',
      severity: 'error',
      memberId: 'member_001',
      message: 'Mitglied hat Monatslimit von 50g überschritten (52.3g)',
      timestamp: new Date(),
      resolved: false,
      actionRequired: true,
    },
  ],
};
```

### 3. KCanG-Compliance-Simulator
```typescript
// Compliance-Testing-Umgebung im Playground
interface ComplianceSimulator {
  // Simuliere verschiedene Compliance-Szenarien
  scenarios: {
    'age-verification-failure': {
      description: 'Benutzer unter 18 Jahren versucht Zugang';
      expectedBehavior: 'Zugang verweigern, Warnung anzeigen';
      testData: { birthDate: '2010-01-01' };
    };
    
    'daily-limit-exceeded': {
      description: 'Mitglied überschreitet 25g Tageslimit';
      expectedBehavior: 'Bestellung blockieren, Limit-Warnung anzeigen';
      testData: { dailyUsed: 20, requestedQuantity: 8 };
    };
    
    'monthly-limit-exceeded': {
      description: 'Mitglied überschreitet 50g Monatslimit';
      expectedBehavior: 'Bestellung blockieren, Admin benachrichtigen';
      testData: { monthlyUsed: 48, requestedQuantity: 5 };
    };
    
    'non-approved-product': {
      description: 'Versuch nicht-genehmigte Produkte zu bestellen';
      expectedBehavior: 'Produkt ausblenden, Compliance-Log erstellen';
      testData: { complianceApproved: false };
    };
  };
  
  // Automatische Compliance-Checks
  runComplianceCheck: (component: React.Component, scenario: string) => ComplianceResult;
}
```

---

## 🚀 ANBAUVEREINIGUNG-SPEZIFISCHE IMPLEMENTIERUNGS-ROADMAP

### Phase 1: Cannabis-Foundation (3-4 Tage)
**Ziel**: Playground-Setup mit Cannabis-spezifischen Grundlagen

```bash
# Setup im bestehenden Monorepo
cd apps/
npx create-next-app@latest playground --typescript --app
cd playground/

# Installiere exakt gleiche Versionen wie Hauptprojekt
pnpm install next@15.5.2 react@18.3.1 @mui/material@7.3.1
pnpm install @monaco-editor/react react-hook-form zod recharts

# Verlinke lokale Packages
pnpm install @packages/ui@workspace:* @packages/auth@workspace:*
pnpm install @packages/database@workspace:* @packages/compliance@workspace:*
```

**Deliverables**:
- [ ] Next.js 15 App mit exakter Tech-Stack-Kompatibilität
- [ ] Integration aller @packages/* aus Hauptprojekt
- [ ] Cannabis-Theme-Extension (THC/CBD-Farben, Strain-Typen)
- [ ] Mock-Data-Generator für Cannabis-Testdaten
- [ ] Basis-Navigation (/playground, /cannabis-components, /compliance-testing)

### Phase 2: Cannabis-Component-Gallery (5-7 Tage)
**Ziel**: Spezialisierte Cannabis-UI-Komponenten entwickeln

**Deliverables**:
- [ ] StrainCard mit THC/CBD-Anzeige und Effekt-Tags
- [ ] ProductCatalog mit Cannabis-spezifischen Filtern
- [ ] LimitTracker für Tages-/Monatslimits
- [ ] AgeVerificationModal mit KCanG-Compliance
- [ ] ComplianceAlert-System für verschiedene Warnungen
- [ ] CannabisCart mit Limit-Validierung
- [ ] Live-Code-Editor mit Cannabis-Mock-Data
- [ ] Split-View: Code + Cannabis-Component-Preview

### Phase 3: Compliance-Testing-Suite (3-4 Tage)
**Ziel**: KCanG-Compliance-Validierung für alle Komponenten

**Deliverables**:
- [ ] KCanG-Compliance-Simulator mit Test-Szenarien
- [ ] Automatische Compliance-Checks für Komponenten
- [ ] Age-Verification-Testing-Tools
- [ ] Limit-Tracking-Validation-Suite
- [ ] Audit-Trail-Generator für Compliance-Logs
- [ ] DSGVO-Compliance-Checker für Datenverarbeitung

### Phase 4: Cannabis-Business-Logic-Integration (4-5 Tage)
**Ziel**: Integration mit bestehenden Anbauvereinigung-Packages

**Deliverables**:
- [ ] @packages/compliance Integration für echte KCanG-Checks
- [ ] @packages/database Integration für Member-/Product-Daten
- [ ] @packages/auth Integration für Rollen-basierte Komponenten
- [ ] @packages/trpc Integration für API-Mocking
- [ ] Real-Data-Preview-Modus (mit echten DB-Daten)
- [ ] Migration-Pipeline zu members/operations Apps

### Phase 5: Cannabis-Analytics & Reporting (3-4 Tage)
**Ziel**: Business-Intelligence-Komponenten für Cannabis-Club

**Deliverables**:
- [ ] SalesAnalyticsDashboard mit Cannabis-Metriken
- [ ] MemberEngagementChart (Strain-Präferenzen, Kaufverhalten)
- [ ] ComplianceScoreCard mit KCanG-Metriken
- [ ] InventoryForecast für Cannabis-Lagerbestand
- [ ] StrainPopularityChart (THC/CBD-Trends)
- [ ] ComplianceReportViewer für Behörden-Reports

### Phase 6: Production-Ready Cannabis-Playground (2-3 Tage)
**Ziel**: Produktionsreife Playground-Umgebung

**Deliverables**:
- [ ] Performance-Optimierung für Cannabis-Daten-Visualisierung
- [ ] Error-Boundaries für Cannabis-spezifische Fehler
- [ ] LocalStorage-Persistence für Playground-Einstellungen
- [ ] Export-Funktionen für Cannabis-Komponenten
- [ ] Migration-Documentation für Cannabis-Components
- [ ] Deployment auf Port 3003 (neben anderen Apps)

---

## 🌿 CANNABIS-SPEZIFISCHE SUCCESS-METRICS

### Cannabis-Business-KPIs
- **Strain-Component-Entwicklungszeit**: <3 Stunden pro Cannabis-Komponente
- **Compliance-Validierung**: 100% KCanG-konforme Komponenten
- **Migration-Erfolgsrate**: >95% erfolgreiche Playground→Production-Migration
- **Cannabis-UX-Konsistenz**: 100% Material Design 3 + Cannabis-Theme

### Compliance-Metriken
- **KCanG-Compliance-Score**: 100% für alle Komponenten
- **Age-Verification-Tests**: 100% Erfolgsrate
- **Limit-Tracking-Genauigkeit**: 100% korrekte Berechnungen
- **Audit-Trail-Vollständigkeit**: 100% nachverfolgbare Aktionen

### Cannabis-User-Experience
- **Strain-Katalog-Ladezeit**: <1 Sekunde für 100+ Strains
- **THC/CBD-Visualisierung**: <500ms Rendering-Zeit
- **Compliance-Check-Response**: <200ms für Limit-Validierung
- **Cannabis-Cart-Performance**: <100ms für Quantity-Updates

---

## 🎯 CANNABIS-CLUB-SPEZIFISCHE AI-AGENT-ANWEISUNGEN

### Für Cannabis-Component-Entwicklung
```markdown
Als AI-Agent für die Anbauvereinigung solltest du:

1. **Cannabis-Compliance-First entwickeln**
   - Jede Komponente muss KCanG § 11-18 berücksichtigen
   - Altersverifikation (18+) in allen relevanten Komponenten
   - Tages- (25g) und Monatslimits (50g) immer validieren
   - Audit-Trail für alle Cannabis-bezogenen Aktionen

2. **Cannabis-UX-Patterns verwenden**
   - THC/CBD-Anzeige mit Farbkodierung (Grün/Blau/Rot)
   - Strain-Typ-Visualisierung (Sativa/Indica/Hybrid)
   - Effekt-Tags für Cannabis-Wirkungen
   - Geschmacks-Profile für Strain-Beschreibungen

3. **Anbauvereinigung-Design-System einhalten**
   - Verwende @packages/ui Komponenten als Basis
   - Erweitere mit Cannabis-spezifischen Patterns
   - Material Design 3 + Cannabis-Theme-Extension
   - Responsive Design für alle Geräte

4. **Realistische Cannabis-Daten verwenden**
   - Deutsche Strain-Namen und -Beschreibungen
   - Realistische THC/CBD-Werte (5-30% THC, 0-20% CBD)
   - Cannabis-Club-typische Preise (8-20€/g)
   - KCanG-konforme Produktkategorien
```

### Cannabis-Playground-Usage-Guidelines
```markdown
Nutze das Cannabis-Playground für:

✅ **Cannabis-Produkt-Komponenten** (Strain-Cards, Product-Catalog)
✅ **Compliance-UI-Testing** (Age-Verification, Limit-Tracking)
✅ **Cannabis-E-Commerce-Patterns** (Cart, Checkout, Order-Summary)
✅ **Member-Management-UI** (Club-spezifische User-Interfaces)
✅ **Cannabis-Analytics-Dashboards** (Sales, Inventory, Compliance)

❌ **Echte Cannabis-Transaktionen** (nur Mock-Data)
❌ **Produktions-Compliance-Logs** (nur Playground-Testing)
❌ **Echte Mitgliederdaten** (nur anonymisierte Test-Daten)
❌ **Live-Zahlungsabwicklung** (nur UI-Mockups)
```

---

## 🔗 INTEGRATION MIT ANBAUVEREINIGUNG-HAUPTPROJEKT

### Cannabis-Component-Migration-Pipeline
```typescript
// Playground → Hauptprojekt Migration für Cannabis-Komponenten
// 1. Entwicklung im Cannabis-Playground
// apps/playground/components/cannabis/StrainCard.tsx

// 2. Migration zu packages/ui (falls generisch)
// packages/ui/src/molecules/StrainCard/StrainCard.tsx

// 3. Oder direkte Migration zu spezifischer App
// apps/members/src/components/cannabis/StrainCard.tsx
// apps/operations/src/components/inventory/StrainCard.tsx

// 4. Import in Anbauvereinigung-Apps
import { StrainCard } from '@packages/ui';
// oder
import { StrainCard } from '../components/cannabis/StrainCard';
```

### Shared Cannabis-Resources
```typescript
// Playground nutzt alle Anbauvereinigung-Ressourcen
import { colors, typography, spacing } from '@packages/ui/tokens';
import { createCustomTheme } from '@packages/ui/theme';
import { useAuth, useRole } from '@packages/auth';
import { useCompliance } from '@packages/compliance';
import { prisma } from '@packages/database';
import { trpc } from '@packages/trpc/client';

// Cannabis-spezifische Utilities
import { calculateLimits, validateAge, checkCompliance } from '@packages/compliance';
import { formatCannabisPrice, formatTHCContent } from '@packages/utils';
```

### Cannabis-Mock-Data-Integration
```typescript
// Realistische Anbauvereinigung-Testdaten
const anbauvereinigungMockData = {
  club: {
    name: 'Anbauvereinigung e.V.',
    licenseNumber: 'CC-DE-2025-001',
    maxMembers: 500,
    currentMembers: 287,
    location: 'Berlin, Deutschland',
  },
  
  strains: [
    // Deutsche Cannabis-Sorten mit realistischen Daten
    { name: 'Berliner Weisse', type: 'sativa', thc: 19.2, cbd: 0.8 },
    { name: 'Schwarzwälder Kush', type: 'indica', thc: 23.1, cbd: 1.2 },
    { name: 'Rheinland Haze', type: 'hybrid', thc: 16.8, cbd: 2.1 },
  ],
  
  complianceScenarios: [
    // KCanG-spezifische Test-Szenarien
    'Mitglied überschreitet Tageslimit',
    'Nicht-verifiziertes Alter',
    'Ungenehmigtes Produkt',
    'Behörden-Audit-Simulation',
  ],
};
```

---

## 📊 CANNABIS-CLUB-MONITORING & ANALYTICS

### Playground-Metriken für Cannabis-Entwicklung
```typescript
interface CannabisPlaygroundMetrics {
  componentDevelopment: {
    cannabisComponentsCreated: number;
    complianceTestsPassed: number;
    kcanGViolationsFound: number;
    migrationSuccessRate: number;
  };
  
  complianceTesting: {
    ageVerificationTests: number;
    limitTrackingTests: number;
    auditTrailValidations: number;
    dsgvoComplianceChecks: number;
  };
  
  cannabisUXMetrics: {
    strainCardInteractions: number;
    thcCbdVisualizationViews: number;
    complianceAlertTriggers: number;
    memberLimitCheckRequests: number;
  };
  
  performanceMetrics: {
    cannabisDataLoadTime: number;
    complianceCheckLatency: number;
    strainCatalogRenderTime: number;
    limitCalculationSpeed: number;
  };
}
```

---

## 🌿 CANNABIS-SPEZIFISCHE DEPLOYMENT-KONFIGURATION

### Turbo-Integration für Playground
```json
// turbo.json - Playground zu Pipeline hinzufügen
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "dev:playground": {
      "dependsOn": ["@packages/ui#build"],
      "cache": false,
      "persistent": true
    }
  }
}
```

### Package.json Scripts-Erweiterung
```json
// Root package.json - Playground-Scripts hinzufügen
{
  "scripts": {
    "dev:playground": "turbo run dev --filter=playground",
    "build:playground": "turbo run build --filter=playground",
    "playground:cannabis-components": "turbo run dev --filter=playground --env-mode=cannabis",
    "playground:compliance-testing": "turbo run dev --filter=playground --env-mode=compliance"
  }
}
```

---

**Dokument-Ende**: PLAYGROUND_DASHBOARD_NEW.md (Version 3.0)
**Projekt**: Anbauvereinigung Cannabis-Club WebApp
**Zweck**: Spezialisierte AI-Agent Playground für Cannabis-Club UI-Entwicklung
**Nächste Schritte**: Cannabis-Playground-Implementierung nach Anbauvereinigung-Roadmap starten

---

## 🎯 QUICK-START FÜR ANBAUVEREINIGUNG-ENTWICKLUNG

```bash
# 1. Cannabis-Playground erstellen
cd apps/
npx create-next-app@latest playground --typescript --app

# 2. Anbauvereinigung-Dependencies installieren
cd playground/
pnpm install @packages/ui@workspace:* @packages/compliance@workspace:*

# 3. Cannabis-Mock-Data setup
mkdir -p data/cannabis/
echo "export const mockStrains = [...]" > data/cannabis/strains.ts

# 4. Playground starten
pnpm dev # Läuft auf Port 3003

# 5. Erste Cannabis-Komponente entwickeln
mkdir -p components/cannabis/
# Erstelle StrainCard.tsx mit THC/CBD-Anzeige
```

**Bereit für Cannabis-Club UI-Entwicklung!** 🌿