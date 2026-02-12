# Deployment Guide - Bafra Nakşibendî Hakkani Derneği

Diese Anleitung erklärt, wie Sie die Webseite online veröffentlichen können.

## 🎯 Empfohlene Plattform: Vercel

Vercel ist die einfachste und beste Lösung für Next.js-Projekte.

### Schritt-für-Schritt Anleitung

#### 1. GitHub Repository erstellen

```bash
# Im Projektordner:
git init
git add .
git commit -m "Initial commit: Bafra Hakkani Webseite"

# Repository auf GitHub erstellen (über github.com)
# Dann lokales Repo verbinden:
git remote add origin https://github.com/IHR-USERNAME/bafra-hakkani.git
git branch -M main
git push -u origin main
```

#### 2. Bei Vercel registrieren

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Klicken Sie "Sign Up"
3. Wählen Sie "Continue with GitHub"
4. Autorisieren Sie Vercel

#### 3. Projekt deployen

1. Klicken Sie "Add New Project"
2. Importieren Sie Ihr GitHub Repository
3. Vercel erkennt automatisch Next.js
4. Klicken Sie "Deploy"
5. Warten Sie 2-3 Minuten
6. Fertig! ✅

#### 4. Custom Domain einrichten (optional)

1. Domain kaufen (z.B. bei [Namecheap](https://namecheap.com))
2. In Vercel: Settings → Domains
3. Domain hinzufügen: `bafra-hakkani.org`
4. DNS-Einträge bei Ihrem Domain-Anbieter aktualisieren
5. Auf Aktivierung warten (1-48 Stunden)

### Umgebungsvariablen in Vercel

1. Projekt Settings öffnen
2. "Environment Variables" auswählen
3. Hinzufügen:
   - `NEXT_PUBLIC_SITE_URL`: Ihre Domain
   - Weitere nach Bedarf

### Automatische Deployments

✅ **Nach dem Setup:**
- Jeder `git push` deployed automatisch
- Preview-Deployments für Branches
- Production-Deployment für `main` Branch

## 🌐 Alternative: Netlify

### Deployment-Schritte

1. Bei [netlify.com](https://netlify.com) registrieren
2. "Add new site" → "Import an existing project"
3. GitHub Repository auswählen
4. Build-Einstellungen:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. "Deploy site" klicken

### Netlify Configuration

Erstellen Sie `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 📦 Alternative: Statischer Export

Für traditionelles Hosting (Shared Hosting, FTP):

### 1. Next.js konfigurieren

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 2. Build erstellen

```bash
npm run build
```

### 3. Upload

Der Ordner `out` enthält alle statischen Dateien:
- Via FTP auf Server hochladen
- In public_html oder www Ordner

⚠️ **Einschränkungen:**
- Keine Server-Side Features
- Keine dynamischen Routen
- Keine Image-Optimierung

## 🔒 SSL/HTTPS einrichten

### Bei Vercel/Netlify
✅ Automatisch aktiviert

### Bei eigenem Server
1. [Let's Encrypt](https://letsencrypt.org) nutzen
2. Certbot installieren:
   ```bash
   sudo certbot --nginx
   ```

## 📊 Analytics einrichten (optional)

### Google Analytics

1. Google Analytics Konto erstellen
2. Tracking-ID erhalten (z.B. `G-XXXXXXXXXX`)
3. In Vercel Environment Variables:
   - `NEXT_PUBLIC_GA_ID`: Ihre ID
4. Code in `src/app/layout.tsx` hinzufügen:

```tsx
// Google Analytics Script
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

## 🔄 Content Updates

### Nach Vercel Deployment:

1. JSON-Datei lokal bearbeiten
2. Änderungen committen:
   ```bash
   git add .
   git commit -m "Content update: neue Veranstaltung"
   git push
   ```
3. Vercel deployed automatisch neu
4. Nach 2-3 Minuten live

## 🐛 Troubleshooting

### Build-Fehler

```bash
# Lokal testen:
npm run build

# Bei Fehlern:
npm run lint
```

### Deployment schlägt fehl

1. Logs in Vercel prüfen
2. Node.js Version prüfen:
   ```json
   // package.json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

### Seite lädt nicht

1. Browser-Cache leeren
2. Hard Reload: `Cmd/Ctrl + Shift + R`
3. DNS-Propagation prüfen: [whatsmydns.net](https://whatsmydns.net)

## 📱 Performance-Check

Nach Deployment testen:

1. **PageSpeed Insights**
   - https://pagespeed.web.dev
   - URL eingeben
   - Ziel: > 90 Score

2. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - URL eingeben
   - Alle Tests sollten grün sein

## 🔐 Sicherheit

### Empfohlene Headers

In Vercel via `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 📈 SEO nach Deployment

1. **Google Search Console**
   - https://search.google.com/search-console
   - Property hinzufügen
   - Sitemap submitten: `https://ihre-domain.org/sitemap.xml`

2. **Bing Webmaster Tools**
   - https://www.bing.com/webmasters
   - Site hinzufügen
   - Sitemap submitten

## ✅ Deployment Checklist

- [ ] GitHub Repository erstellt
- [ ] Bei Vercel/Netlify registriert
- [ ] Projekt deployed
- [ ] Domain eingerichtet (falls gewünscht)
- [ ] SSL aktiv (HTTPS)
- [ ] Umgebungsvariablen gesetzt
- [ ] SEO: Sitemap submitted
- [ ] Analytics eingerichtet (optional)
- [ ] Performance-Test > 90
- [ ] Mobile-Test bestanden
- [ ] Content geprüft

## 🎉 Fertig!

Ihre Webseite ist jetzt live und weltweit erreichbar!

---

## 📞 Support

Bei Problemen:
1. Vercel/Netlify Dokumentation prüfen
2. GitHub Issues erstellen
3. Support kontaktieren
