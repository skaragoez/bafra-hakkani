# Content Management Guide

Diese Anleitung erklärt, wie Sie Inhalte auf der Webseite bearbeiten können, ohne programmieren zu müssen.

## 📝 Grundlagen

Alle Texte der Webseite befinden sich in einfachen JSON-Dateien im Ordner `src/data/`.

## 1️⃣ Seitentexte bearbeiten

**Datei:** `src/data/content.json`

### Startseite ändern

```json
{
  "homepage": {
    "hero": {
      "title": "Hier den Haupttitel ändern",
      "subtitle": "Hier den Untertitel ändern",
      "description": "Hier die Beschreibung ändern"
    }
  }
}
```

**So gehen Sie vor:**
1. Öffnen Sie die Datei `src/data/content.json`
2. Suchen Sie den Abschnitt, den Sie ändern möchten
3. Ändern Sie den Text zwischen den Anführungszeichen `"..."`
4. Speichern Sie die Datei
5. Die Webseite aktualisiert sich automatisch

### Andere Seiten

Die Struktur ist für alle Seiten gleich:
- `hakkimizda` → Hakkımızda (Über uns)
- `naksibendi` → Nakşibendî Yolu
- `etkinlikler` → Etkinlikler
- `iletisim` → İletişim

## 2️⃣ Veranstaltungen verwalten

**Datei:** `src/data/events.json`

### Neue Veranstaltung hinzufügen

```json
[
  {
    "id": "mevlid-2024",
    "title": "Mevlid-i Nebi Programı",
    "description": "Peygamber Efendimizin (s.a.v.) doğum günü münasebetiyle özel program.",
    "schedule": "20 Eylül 2024, Cuma, 20:00",
    "recurring": false,
    "type": "ozel",
    "details": {
      "includes": [
        "Mevlid Okuma",
        "Sohbet",
        "Dua"
      ],
      "participation": "Tüm kardeşlerimiz davetlidir."
    }
  }
]
```

**Feld-Erklärungen:**

| Feld | Bedeutung | Beispiel |
|------|-----------|----------|
| `id` | Eindeutige ID (keine Leerzeichen) | `"mevlid-2024"` |
| `title` | Titel der Veranstaltung | `"Mevlid-i Nebi"` |
| `description` | Beschreibung | `"Özel program..."` |
| `schedule` | Datum & Uhrzeit | `"20 Eylül 2024, 20:00"` |
| `recurring` | Wiederkehrend? | `true` oder `false` |
| `type` | Event-Typ (optional) | `"zikir"`, `"sohbet"`, `"ozel"` |
| `details.includes` | Programmpunkte | Liste in `[...]` |
| `details.participation` | Teilnahme-Info | `"Herkese açık"` |

### Veranstaltung löschen

Einfach den gesamten Block zwischen `{...}` entfernen, inklusive dem Komma davor/danach.

### Veranstaltung bearbeiten

Den entsprechenden Text zwischen den Anführungszeichen ändern.

## 3️⃣ Kontaktinformationen aktualisieren

**Datei:** `src/data/content.json`

Suchen Sie nach `"iletisim"`:

```json
{
  "iletisim": {
    "info": {
      "address": {
        "value": "Ihre vollständige Adresse hier"
      },
      "phone": {
        "value": "+90 XXX XXX XX XX"
      },
      "email": {
        "value": "info@bafra-hakkani.org"
      }
    }
  }
}
```

## 4️⃣ SEO (Suchmaschinen-Optimierung)

**Datei:** `src/data/seo.json`

### Meta-Beschreibungen ändern

```json
{
  "pages": {
    "/": {
      "title": "Titel für Startseite",
      "description": "Beschreibung für Google",
      "keywords": ["Keyword1", "Keyword2"]
    }
  }
}
```

**Wichtig:**
- `title`: Erscheint in Browser-Tab und Google-Suche (max. 60 Zeichen)
- `description`: Erscheint unter dem Link bei Google (max. 160 Zeichen)
- `keywords`: Suchbegriffe, durch Komma getrennt

## ⚠️ Wichtige Regeln

### JSON-Syntax beachten

✅ **Richtig:**
```json
{
  "title": "Mein Titel",
  "description": "Meine Beschreibung"
}
```

❌ **Falsch:**
```json
{
  "title": "Mein Titel"   <- Komma fehlt
  "description": "Meine Beschreibung"
}
```

### Sonderzeichen

Wenn Sie Anführungszeichen im Text brauchen:
```json
"text": "Das ist ein \"Zitat\" im Text"
```

Für Umlaute/türkische Zeichen einfach normal schreiben:
```json
"text": "İçerik güncellendi ğüşöçı"
```

### Listen

Arrays (Listen) haben eckige Klammern:
```json
"items": [
  "Punkt 1",
  "Punkt 2",
  "Punkt 3"
]
```

## 🔄 Änderungen live sehen

### Im Development-Modus:
1. Datei bearbeiten
2. Speichern
3. Browser aktualisiert sich automatisch

### Im Production-Modus:
1. Datei bearbeiten
2. Speichern
3. `npm run build` ausführen
4. Neu deployen

## 🆘 Hilfe bei Fehlern

### JSON-Validierung

Wenn die Webseite nach einer Änderung nicht mehr funktioniert:

1. Öffnen Sie https://jsonlint.com
2. Kopieren Sie den gesamten Inhalt Ihrer JSON-Datei
3. Klicken Sie "Validate JSON"
4. Der Validator zeigt genau, wo der Fehler ist

### Häufige Fehler

**Fehler:** `Unexpected token`
→ Komma fehlt oder ist zu viel

**Fehler:** `Unexpected end of JSON`
→ Geschweifte Klammer `}` fehlt

## 📚 Beispiele

### Beispiel 1: Event hinzufügen

**Vorher:**
```json
[
  {
    "id": "hatme-hacegan",
    "title": "Perşembe Hatme-i Hacegan",
    ...
  }
]
```

**Nachher:**
```json
[
  {
    "id": "hatme-hacegan",
    "title": "Perşembe Hatme-i Hacegan",
    ...
  },
  {
    "id": "yeni-event",
    "title": "Neues Event",
    "description": "Beschreibung",
    "schedule": "Datum",
    "recurring": false,
    "details": {
      "includes": ["Punkt 1"],
      "participation": "Offen"
    }
  }
]
```

### Beispiel 2: Text ändern

**Vorher:**
```json
"title": "Bafra Nakşibendî Hakkani Derneği"
```

**Nachher:**
```json
"title": "Bafra Nakşibendî Hakkani Derneği - Zikir ve Sohbet"
```

## 💡 Tipps

1. **Backup erstellen:** Vor größeren Änderungen die Datei kopieren
2. **Klein anfangen:** Erst kleine Änderungen testen
3. **Schritt für Schritt:** Nicht mehrere Dateien gleichzeitig ändern
4. **Validieren:** Bei Unsicherheit JSON-Validator verwenden

## 📞 Technischer Support

Bei Problemen oder Fragen:
1. JSON-Validator verwenden
2. Backup wiederherstellen
3. Entwickler kontaktieren

---

**Viel Erfolg beim Content-Management! 🎉**
