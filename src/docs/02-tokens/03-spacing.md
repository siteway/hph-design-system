---
title: Spacing
---

# Spacing

Abstände nutzen ebenfalls `clamp()` für konsistentes, responsives Spacing.

## Padding & Margin Scale

| Token | Wert | Min → Max |
|---|---|---|
| `extraSmall` | `clamp(10px, 2.5vmin, 31.25px)` | 10px → 31px |
| `small` | `clamp(20px, 5vmin, 62.5px)` | 20px → 62px |
| `default` | `clamp(40px, 10vmin, 125px)` | 40px → 125px |
| `large` | `clamp(60px, 15vmin, 187.5px)` | 60px → 187px |
| `extraLarge` | `clamp(80px, 20vmin, 250px)` | 80px → 250px |
| `hero` | `12vh` | Viewport-abhängig |

## Verwendung

```html
<section class="py-default px-small">
  <div class="mb-large">...</div>
</section>
```
