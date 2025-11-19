# 🚀 MD3 Playground Dashboard - Schritt-für-Schritt Setup Anleitung

**Projekt**: md3-playground-dashboard  
**Zweck**: Material Design 3 Component Playground & Roadmap Tracker  
**Tech-Stack**: Next.js 15.5.2, React 18.3.1, MUI 7.3.1, Turborepo, pnpm

---

## 📋 VORBEREITUNG

### 1. GitHub Repository erstellen

```bash
# Auf GitHub.com:
# 1. Klicke auf "New repository"
# 2. Name: "md3-playground-dashboard"
# 3. Visibility: Private (oder Public)
# 4. KEINE README, .gitignore oder License hinzufügen
# 5. Klicke "Create repository"
```

### 2. Lokales Verzeichnis vorbereiten

```bash
# Navigiere zu deinem Dev-Ordner
cd ~/Dev  # oder wo auch immer deine Projekte sind

# Erstelle neues Verzeichnis
mkdir md3-playground-dashboard
cd md3-playground-dashboard

# Git initialisieren
git init
git branch -M main

# Remote hinzufügen (ersetze [dein-username] mit deinem GitHub Username)
git remote add origin https://github.com/[dein-username]/md3-playground-dashboard.git
```

---

## 🤖 PHASE 1: KIMI K2 PROMPT AUSFÜHREN

### Schritt 1: Kimi k2 öffnen

1. Gehe zu https://kimi.moonshot.cn (oder deine Kimi k2 Instanz)
2. Erstelle neuen Chat

### Schritt 2: Prompt hochladen

**Option A: Datei hochladen**
1. Lade die Datei `xAI_PLAYGROUND/PLAYGROUND_DASHBOARD_PROMPT.md` hoch
2. Sage zu Kimi k2: "Implementiere dieses Projekt basierend auf dem hochgeladenen Prompt"

**Option B: Prompt kopieren**
1. Öffne `xAI_PLAYGROUND/PLAYGROUND_DASHBOARD_PROMPT.md`
2. Kopiere den gesamten Inhalt
3. Füge ihn in Kimi k2 ein
4. Sage: "Implementiere dieses Projekt vollständig"

### Schritt 3: Kimi k2 arbeiten lassen

- Kimi k2 wird die komplette Projektstruktur erstellen
- Warte bis alle Dateien generiert sind
- Kimi k2 sollte dir eine Zusammenfassung geben

---

## 📥 PHASE 2: CODE VON KIMI K2 ÜBERNEHMEN

### Schritt 1: Code von Kimi k2 exportieren

**Option A: Kimi k2 Export-Funktion**
- Falls Kimi k2 einen Export-Button hat, nutze diesen
- Lade alle Dateien als ZIP herunter

**Option B: Manuell kopieren**
- Kopiere alle generierten Dateien von Kimi k2
- Erstelle die Dateien manuell in deinem lokalen Verzeichnis

### Schritt 2: Dateien in lokales Verzeichnis kopieren

```bash
# Stelle sicher, dass du im Projekt-Verzeichnis bist
cd ~/Dev/md3-playground-dashboard

# Falls Kimi k2 ein ZIP exportiert hat:
unzip kimi-export.zip -d .

# Oder kopiere die Dateien manuell in die richtige Struktur
```

### Schritt 3: Projektstruktur verifizieren

```bash
# Prüfe ob die Struktur stimmt
tree -L 3 -I 'node_modules'

# Sollte zeigen:
# md3-playground-dashboard/
# ├── apps/
# │   ├── homepage/
# │   └── playground/
# ├── packages/
# │   └── ui/
# ├── package.json
# ├── turbo.json
# └── pnpm-workspace.yaml
```

---

## 📦 PHASE 3: DEPENDENCIES INSTALLIEREN

### Schritt 1: pnpm installieren (falls nicht vorhanden)

```bash
# Prüfe ob pnpm installiert ist
pnpm --version

# Falls nicht:
npm install -g pnpm@10.19.0
```

### Schritt 2: Dependencies installieren

```bash
# Im Root-Verzeichnis
cd ~/Dev/md3-playground-dashboard

# Installiere alle Dependencies
pnpm install

# Das kann einige Minuten dauern
```

### Schritt 3: Verifiziere Installation

```bash
# Prüfe ob alle Packages korrekt installiert sind
pnpm list --depth=0

# Prüfe ob MUI 7.3.1 korrekt resolved wurde
pnpm list @mui/material
# Sollte zeigen: @mui/material@7.3.1
```

---

## 🏗️ PHASE 4: PROJEKT BUILDEN

### Schritt 1: TypeScript kompilieren

```bash
# Im Root-Verzeichnis
pnpm type-check

# Sollte ohne Fehler durchlaufen
```

### Schritt 2: UI Package builden

```bash
# Build UI Package
pnpm --filter @packages/ui build

# Oder mit Turbo
pnpm build --filter=@packages/ui
```

### Schritt 3: Apps builden

```bash
# Build beide Apps
pnpm build

# Oder einzeln:
pnpm build:homepage
pnpm build:playground
```

---

## 🚀 PHASE 5: ENTWICKLUNGSSERVER STARTEN

### Schritt 1: Beide Apps starten

```bash
# Im Root-Verzeichnis
pnpm dev

# Das startet:
# - homepage auf http://localhost:3000
# - playground auf http://localhost:3001
```

### Schritt 2: Oder einzeln starten

```bash
# Nur Homepage
pnpm dev:homepage
# → http://localhost:3000

# Nur Playground
pnpm dev:playground
# → http://localhost:3001
```

### Schritt 3: Verifiziere dass alles läuft

1. Öffne Browser: http://localhost:3000 (Homepage)
2. Öffne Browser: http://localhost:3001 (Playground)
3. Beide sollten ohne Fehler laden

---

## 🔍 PHASE 6: FEHLERSUCHE & ANPASSUNGEN

### Häufige Probleme

**Problem 1: MUI Version Mismatch**
```bash
# Lösung: pnpm overrides prüfen
cat package.json | grep -A 10 "overrides"

# Falls falsch, korrigiere package.json
# Dann: pnpm install --force
```

**Problem 2: TypeScript Fehler**
```bash
# Lösung: TypeScript neu kompilieren
pnpm type-check

# Falls Fehler in packages/ui:
cd packages/ui
pnpm build
cd ../..
```

**Problem 3: Monaco Editor lädt nicht**
```bash
# Lösung: Prüfe ob 'use client' Directive vorhanden
# In apps/playground/components/playground/CodeEditor.tsx
# Sollte mit 'use client' beginnen
```

**Problem 4: Workspace Dependencies nicht gefunden**
```bash
# Lösung: pnpm install erneut ausführen
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

---

## 📤 PHASE 7: CODE ZU GITHUB PUSHEN

### Schritt 1: .gitignore prüfen

```bash
# Stelle sicher dass .gitignore existiert
cat .gitignore

# Sollte enthalten:
# node_modules/
# .next/
# dist/
# .turbo/
# .env.local
```

### Schritt 2: Ersten Commit erstellen

```bash
# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit: MD3 Playground Dashboard

- 2-tier Monorepo (homepage + playground)
- Atomic Design UI Package
- Material Design 3 Theme
- Component Playground mit Monaco Editor
- Roadmap Tracker mit LocalStorage
- Next.js 15.5.2, React 18.3.1, MUI 7.3.1"
```

### Schritt 3: Zu GitHub pushen

```bash
# Main Branch pushen
git push -u origin main

# Falls GitHub noch keinen Main Branch hat:
git push -u origin main --force
```

---

## 🌐 PHASE 8: VERCEL DEPLOYMENT

### Schritt 1: Vercel Account & Projekt

1. Gehe zu https://vercel.com
2. Logge dich ein (oder erstelle Account)
3. Klicke "Add New Project"
4. Wähle GitHub Repository "md3-playground-dashboard"
5. Klicke "Import"

### Schritt 2: Vercel Konfiguration

**Für Homepage App:**
- **Framework Preset**: Next.js
- **Root Directory**: `apps/homepage`
- **Build Command**: `cd ../.. && pnpm build --filter=homepage`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

**Für Playground App:**
- **Framework Preset**: Next.js
- **Root Directory**: `apps/playground`
- **Build Command**: `cd ../.. && pnpm build --filter=playground`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

### Schritt 3: Environment Variables

- **Keine erforderlich** für MVP (LocalStorage-basiert)

### Schritt 4: Deploy

1. Klicke "Deploy"
2. Warte bis Build fertig ist
3. Öffne die Preview-URLs

### Schritt 5: Custom Domains (Optional)

- Homepage: `homepage.vercel.app` oder Custom Domain
- Playground: `playground.vercel.app` oder Custom Domain

---

## ✅ VERIFIZIERUNGS-CHECKLISTE

Nach dem Setup solltest du prüfen:

### Lokale Entwicklung
- [ ] `pnpm dev` startet beide Apps
- [ ] Homepage lädt auf http://localhost:3000
- [ ] Playground lädt auf http://localhost:3001
- [ ] Keine Console Errors
- [ ] TypeScript kompiliert ohne Fehler

### Playground Features
- [ ] Component Gallery zeigt 15 Komponenten
- [ ] Component Detail Pages funktionieren
- [ ] Monaco Editor lädt und funktioniert
- [ ] Live Preview aktualisiert sich
- [ ] Props Editor funktioniert
- [ ] Roadmap Page lädt
- [ ] Tasks können erstellt/editiert werden
- [ ] LocalStorage speichert Daten

### Homepage Features
- [ ] Landing Page lädt
- [ ] Navigation funktioniert
- [ ] Responsive Design funktioniert

### Build & Deployment
- [ ] `pnpm build` funktioniert
- [ ] Vercel Deployment erfolgreich
- [ ] Beide Apps sind live

---

## 🆘 SUPPORT & HILFE

### Wenn etwas nicht funktioniert:

1. **Prüfe Logs**:
   ```bash
   # Terminal Output prüfen
   # Browser Console prüfen (F12)
   ```

2. **Prüfe Dependencies**:
   ```bash
   pnpm list --depth=0
   pnpm outdated
   ```

3. **Clean Build**:
   ```bash
   pnpm clean
   rm -rf node_modules
   rm pnpm-lock.yaml
   pnpm install
   pnpm build
   ```

4. **TypeScript neu kompilieren**:
   ```bash
   pnpm type-check
   ```

---

## 📝 NÄCHSTE SCHRITTE

Nach erfolgreichem Setup:

1. **Komponenten erweitern**: Füge weitere Komponenten zu `packages/ui` hinzu
2. **Roadmap ausfüllen**: Nutze den Roadmap Tracker für deine Projekte
3. **Homepage anpassen**: Passe die Homepage an deine Bedürfnisse an
4. **Features hinzufügen**: Erweitere den Playground mit neuen Features

---

## 🎉 FERTIG!

Wenn alles funktioniert, hast du:
- ✅ Ein funktionierendes 2-tier Monorepo
- ✅ Material Design 3 Component Playground
- ✅ Roadmap Tracker mit LocalStorage
- ✅ Atomic Design UI Package
- ✅ Beide Apps deployed auf Vercel

**Viel Erfolg mit deinem MD3 Playground Dashboard!** 🚀

