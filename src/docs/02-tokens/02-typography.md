---
title: Typografie
---

# Typografie

## Schriften

### Cera Variable — Überschriften
Die primäre Heading-Schrift. **Achtung:** Im Figma wird "Cera Variable DEMO" verwendet — kommerzielle Lizenz prüfen!

```css
font-family: 'Cera Variable', 'Inter Tight', Inter, system-ui, sans-serif;
```

### Inter — Fließtext & UI
Kostenlos über Google Fonts.

```css
font-family: Inter, system-ui, sans-serif;
```

### Inter Tight — Spezialfälle
Für große Display-Texte und Ziffern.

## Fluid Type Scale

Alle Größen nutzen `clamp()` für flüssiges Skalieren zwischen Breakpoints.

| Token | Wert | Ca. Bereich |
|---|---|---|
| `text-custom-sm` | `0.8rem` | 12.8px |
| `text-custom-base` | `1rem` | 16px |
| `text-custom-xl` | `clamp(16px, 3vw+1rem, 19px)` | 16–19px |
| `text-custom-2xl` | `clamp(18px, 3vw+1rem, 21px)` | 18–21px |
| `text-custom-3xl` | `clamp(22px, 3vw+1rem, 26px)` | 22–26px |
| `text-custom-4xl` | `clamp(28px, 3vw+1rem, 40px)` | 28–40px |
| `text-custom-5xl` | `clamp(34px, 4vw+1rem, 60px)` | 34–60px |
| `text-custom-6xl` | `clamp(42px, 5vw+1rem, 70px)` | 42–70px |
