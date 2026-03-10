---
title: Inkonsistenzen & TODOs
---

# Bekannte Inkonsistenzen

## 🔴 Kritisch

### 1. Cera Variable DEMO — Font-Lizenz
Das Figma-Design verwendet "Cera Variable DEMO" — eine Trial-Version der Schrift.
**Aktion:** Kommerzielle Lizenz erwerben oder auf Inter Tight umstellen.

### 2. Highlight-Farbe divergiert
- Figma: `#c63ba3` (pink-lila)
- Tailwind: `#F61A75` (pink-rot)
- Beide werden verwendet. Einheitlich definieren.

## 🟡 Mittel

### 3. Text-Farben leicht verschoben
- Figma `#31363c` → Tailwind `#32363D` (1 Hex off)
- Figma `#474747` → Tailwind `#484848`
- Kaum sichtbar, aber sollte synchronisiert werden.

### 4. Dark BG nicht als Token
`#0E1012` wird als Dark-Mode-Hintergrund verwendet, ist aber nirgendwo als benannter Token definiert. Nur hardcoded in Templates.
**Fix:** `dark: '#0E1012'` in Tailwind-Config hinzufügen.

### 5. Zwei `_picture.antlers.html`
`components/_picture.antlers.html` und `_picture_new.antlers.html` — tote Datei entfernen.

## 🟢 Verbesserungen

### 6. Tokens-Sync Figma ↔ Code
Mit [Tokens Studio](https://tokens.studio) Figma-Plugin können Tokens direkt aus Figma in die `tailwind.config.site.js` gepusht werden.

### 7. `download`-Modul fehlt in Figma
Das Page-Builder-Modul `_download.antlers.html` existiert im Code, ist aber nicht im Figma dokumentiert.

### 8. `special_configurator` und `special_sales`
Sehr individuelle Module, schlecht dokumentiert. Screenshots oder Beschreibungen ergänzen.
