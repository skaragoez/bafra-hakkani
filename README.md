# Bafra Nakşibendî Hakkani Derneği

Modern, spirituell stimmige Webseite für die Bafra Nakşibendî Hakkani Derneği in Samsun/Bafra.

## 🎯 Projektübersicht

Diese Webseite wurde entwickelt, um:
- Den religiösen Verein vorzustellen
- Über den Nakşibendî Hakkani Weg zu informieren
- Hatme-i Hacegan (jeden Donnerstag) anzukündigen
- Zukünftige Events zu veröffentlichen
- Eine seriöse, ruhige, respektvolle Online-Präsenz aufzubauen

## 🚀 Technologie-Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Sprache:** TypeScript
- **Content:** JSON-basiertes Content Management

## 📁 Projektstruktur

```
bafra-hakkani/
├── src/
│   ├── app/                      # Next.js App Router Seiten
│   │   ├── layout.tsx           # Root Layout mit SEO
│   │   ├── page.tsx             # Startseite
│   │   ├── hakkimizda/          # Über uns
│   │   ├── naksibendi-yolu/     # Nakşibendî Weg
│   │   ├── etkinlikler/         # Veranstaltungen
│   │   ├── iletisim/            # Kontakt
│   │   ├── sitemap.ts           # Dynamische Sitemap
│   │   └── robots.ts            # SEO Robots
│   ├── components/              # Wiederverwendbare Komponenten
│   │   ├── Header.tsx           # Navigation mit Mobile Menu
│   │   ├── Footer.tsx           # Footer
│   │   ├── EventCard.tsx        # Event-Komponente
│   │   ├── HeroSection.tsx      # Hero-Bereich
│   │   ├── PageSection.tsx      # Seiten-Container
│   │   └── StructuredData.tsx   # Schema.org JSON-LD
│   ├── data/                    # Content Management
│   │   ├── content.json         # Seitentexte
│   │   ├── events.json          # Veranstaltungen
│   │   └── seo.json            # SEO Metadata
│   └── styles/
│       └── globals.css          # Globale Styles & Theme
├── public/                      # Statische Assets
│   └── images/                  # Bilder & Logo
│       └── bafra-hakkani-logo_v2.0_transparent.png
└── package.json
```

## 🎨 Design-System

### Farbpalette

Die Webseite verwendet eine spirituell-ruhige Farbpalette:

- **Dunkelblau** (`#0E2A47`) - Hauptfarbe, Text
- **Grün** (`#2F8F5B`) - Akzent
- **Türkis** (`#1CA7A6`) - Highlights
- **Creme** (`#F9F7F4`) - Hintergrund

### Verwendung in CSS/Tailwind

```tsx
// Beispiele:
<div className="bg-dernek-blue text-white">
<div className="text-dernek-green border-dernek-turquoise">
<div className="bg-dernek-cream">
```

### Typografie

- **Primär:** Inter (Google Fonts)
- **Überschriften:** Montserrat (Google Fonts)

## 📝 Content Management

### Content bearbeiten

Alle Texte befinden sich in JSON-Dateien unter `src/data/`:

#### 1. Seitentexte (`content.json`)

```json
{
  "homepage": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "description": "..."
    }
  }
}
```

**Bearbeitung:**
- Öffnen Sie `src/data/content.json`
- Ändern Sie die gewünschten Texte
- Speichern Sie die Datei
- Die Änderungen werden automatisch übernommen

#### 2. Veranstaltungen (`events.json`)

```json
[
  {
    "id": "einzigartige-id",
    "title": "Event-Titel",
    "description": "Beschreibung",
    "schedule": "Wann findet es statt",
    "recurring": true,
    "type": "zikir",
    "details": {
      "includes": ["Punkt 1", "Punkt 2"],
      "participation": "Teilnahmeinfo"
    }
  }
]
```

**Neue Veranstaltung hinzufügen:**
1. Öffnen Sie `src/data/events.json`
2. Fügen Sie ein neues Objekt zum Array hinzu
3. Füllen Sie alle Felder aus
4. Speichern Sie die Datei

**Felder:**
- `id`: Eindeutige ID (z.B. `"mevlid-2024"`)
- `title`: Titel der Veranstaltung
- `description`: Beschreibung
- `schedule`: Zeitplan (z.B. `"15. März 2024, 19:00 Uhr"`)
- `recurring`: `true` für wiederkehrende Events
- `type`: Event-Typ (optional)
- `details.includes`: Liste der Programmpunkte
- `details.participation`: Teilnahme-Information

#### 3. SEO Metadata (`seo.json`)

Enthält alle SEO-relevanten Daten:
- Meta-Titles
- Meta-Descriptions
- Keywords
- Organization-Daten

## 🛠️ Installation & Entwicklung

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn Package Manager

### Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Öffnen Sie http://localhost:3000
```

### Produktions-Build

```bash
# Build erstellen
npm run build

# Build lokal testen
npm start
```

## 🌐 Deployment

### Empfohlen: Vercel

1. Projekt auf GitHub hochladen
2. Bei [Vercel](https://vercel.com) registrieren
3. "New Project" → Repository auswählen
4. Deploy starten
5. Fertig! Automatische Deployments bei jedem Git Push

### Alternative: Netlify

1. Projekt auf GitHub hochladen
2. Bei [Netlify](https://netlify.com) registrieren
3. "Add new site" → Repository auswählen
4. Build Command: `npm run build`
5. Publish directory: `.next`

### Statischer Export (für traditionelles Hosting)

```bash
# In next.config.ts ändern:
const nextConfig = {
  output: 'export'
};

# Build erstellen
npm run build

# Der Ordner 'out' enthält die statischen Dateien
```

## 📱 Responsive Design

Die Webseite ist vollständig responsive:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔍 SEO Features

✅ Meta Tags (Title, Description, Keywords)
✅ Open Graph (Facebook, LinkedIn)
✅ Twitter Cards
✅ Schema.org strukturierte Daten:
  - Organization
  - LocalBusiness
  - Event (für Hatme-i Hacegan)
✅ Sitemap (automatisch generiert)
✅ robots.txt
✅ Semantisches HTML

## 🎯 Zukünftige Erweiterungen

Die Architektur ist vorbereitet für:

### Video-Archiv
```json
// src/data/videos.json (zu erstellen)
[
  {
    "id": "video-1",
    "title": "Sohbet Titel",
    "url": "https://youtube.com/...",
    "date": "2024-02-12"
  }
]
```

### PDF-Downloads
```json
// src/data/pdfs.json (zu erstellen)
[
  {
    "id": "pdf-1",
    "title": "Zikir Metni",
    "url": "/pdfs/zikir.pdf"
  }
]
```

### Mehrsprachigkeit

Das Projekt ist strukturiert, um i18n einfach hinzuzufügen:
1. `next-intl` installieren
2. Übersetzungsdateien erstellen
3. Layout erweitern

## 📞 Support & Wartung

### Häufige Aufgaben

**Text ändern:**
→ `src/data/content.json` bearbeiten

**Event hinzufügen:**
→ `src/data/events.json` bearbeiten

**Farbe ändern:**
→ `src/app/globals.css` (`:root` Variablen)

**Neue Seite hinzufügen:**
1. Ordner in `src/app/` erstellen
2. `page.tsx` erstellen
3. Navigation in `src/components/Header.tsx` erweitern
4. SEO in `src/data/seo.json` hinzufügen

## 🔧 Entwickler-Notizen

### Wichtige Commands

```bash
npm run dev          # Development Server
npm run build        # Production Build
npm run start        # Production Server lokal
npm run lint         # ESLint prüfen
```

### Code-Stil

- TypeScript für Type Safety
- Funktionale React Components
- Tailwind für Styling
- JSON für Content Management

### Performance

- Next.js Image Component für optimierte Bilder
- Static Generation für alle Seiten
- Lazy Loading
- Minimale Bundle-Size

## 📄 Lizenz

© 2024 Bafra Nakşibendî Hakkani Derneği. Alle Rechte vorbehalten.

---

## 🙏 Kontakt

Für technische Fragen zur Webseite:
- Öffnen Sie ein GitHub Issue
- Oder kontaktieren Sie den Entwickler

Für Vereins-Anfragen:
- Siehe Kontaktseite auf der Webseite
