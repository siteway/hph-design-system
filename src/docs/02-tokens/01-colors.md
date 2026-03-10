---
title: Farben
---

# Farben

## Primary — Markenfarbe Blau

| Token | Hex | Verwendung |
|---|---|---|
| `primary.DEFAULT` | `#0040B8` | Hauptfarbe, Buttons, Links |
| `primary.middle` | `#0078FF` | Hover-States, Highlights |
| `primary.light` | `#027CEC` | Hero-Gradient, Akzente |
| `primary.dark` | `#0038AF` | Pressed-States |
| `primary.extralight` | `#C3D7EE` | Hintergründe, Badges |

## Dark — Dunkler Modus

| Token | Hex | Verwendung |
|---|---|---|
| `dark` | `#0E1012` | Dark-Mode Hintergrund, Sektionen |

## Neutral — Grautöne

| Token | Hex | Verwendung |
|---|---|---|
| `neutral.extraLight` | `#F4F4F4` | Seiten-BG, Karten-BG |
| `neutral.light` | `#EFEFEF` | Trennlinien, Felder |
| `neutral.middle` | `#D4D4D4` | Borders, Disabled |
| `neutral.DEFAULT` | `#B7BDC4` | Platzhalter-Text |
| `neutral.dark` | `#484848` | Sekundärer Text |

## Text

| Token | Hex | Verwendung |
|---|---|---|
| `fontColor.DEFAULT` | `#32363D` | Body-Text (Standard) |
| `fontColor.light` | `#484848` | Sekundärer Text |

## Highlight / Akzent

| Token | Hex | Verwendung |
|---|---|---|
| `highlight` | `#F61A75` | CTAs, Badges, Akzente |

## ⚠️ Bekannte Inkonsistenzen

- Figma `#31363c` vs. Tailwind `#32363D` (Text-Default, leicht abweichend)
- Figma `#474747` vs. Tailwind `#484848` (Text-Light)
- Figma-Akzentfarbe `#c63ba3` ist nicht definiert in Tailwind
- `#0E1012` (Dark BG) fehlt in Tailwind-Tokens, nur hardcoded in Templates
