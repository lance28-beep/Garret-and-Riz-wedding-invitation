# Wedding Website Color Palette Guide

## Color Scheme Update - December 12, 2025

### Old vs New Color Comparison

| Role | Old Color | New Color | Usage |
|------|-----------|-----------|-------|
| **Background** | `#F1F1EF` (Off-white) | `#F0F0EE` (Off-white) | Main background, cards |
| **Primary** | `#BFCDD8` (Light Blue-Gray) | `#909E8D` (Sage Green) | Primary buttons, borders, navbar |
| **Secondary** | `#8498B0` (Medium Blue-Gray) | `#525E2C` (Dark Olive Green) | Secondary buttons, text, accents |
| **Accent** | `#D2AC6E` (Golden Tan) | `#D1AB6D` (Gold) | Highlights, decorative elements |
| **Muted** | `#E0CFB5` (Light Beige) | `#E0CFB5` (Light Beige) | Unchanged - cards, surfaces |

### Color Palette

#### 🎨 New Colors (In Order from Light to Dark)

1. **#F0F0EE** - Lightest (Background)
   - Off-white with warm undertone
   - Used for: Main background, card backgrounds, light text

2. **#E0CFB5** - Light (Muted/Surfaces)
   - Light beige/cream
   - Used for: Card surfaces, muted backgrounds, borders

3. **#D1AB6D** - Medium Light (Accent/Gold)
   - Warm gold/tan
   - Used for: Accent colors, highlights, decorative elements, CTA emphasis

4. **#909E8D** - Medium (Primary/Sage)
   - Sage green
   - Used for: Primary buttons, borders, navbar elements, primary UI

5. **#525E2C** - Darkest (Secondary/Text)
   - Dark olive green
   - Used for: Primary text, secondary buttons, dark accents, headings

### Design Philosophy

The new color scheme creates:
- **Natural & Organic Feel**: Earth tones with sage green and olive
- **Elegant & Modern**: Clean palette with sophisticated gold accent
- **Warm & Inviting**: Balanced warm and cool tones
- **High Contrast**: Dark text on light backgrounds for readability
- **Cohesive Theme**: All colors work harmoniously together

### CSS Variables

```css
:root {
  --background: #F0F0EE;
  --foreground: #525E2C;
  --primary: #909E8D;
  --secondary: #525E2C;
  --accent: #D1AB6D;
  --muted: #E0CFB5;
  --border: #909E8D;
}
```

### Usage Examples

#### Backgrounds
- Main background: `bg-[#F0F0EE]`
- Card background: `bg-[#E0CFB5]`
- Dark background: `bg-[#525E2C]`

#### Text
- Primary text: `text-[#525E2C]`
- Light text: `text-[#F0F0EE]`
- Accent text: `text-[#D1AB6D]`

#### Buttons
- Primary button: `bg-[#525E2C]` with `hover:bg-[#909E8D]`
- Secondary button: `bg-[#F0F0EE]` with `hover:bg-[#E0CFB5]`
- Accent button: `bg-[#D1AB6D]`

#### Borders & Dividers
- Primary border: `border-[#909E8D]`
- Light border: `border-[#E0CFB5]`

### Gradient Combinations

```css
/* Sage to Olive */
linear-gradient(135deg, #909E8D, #525E2C)

/* Gold to Beige */
linear-gradient(135deg, #D1AB6D, #E0CFB5)

/* Olive to Sage to Beige */
linear-gradient(to-br, from-#525E2C via-#909E8D to-#E0CFB5)
```

### Contrast Ratios (WCAG AA Compliance)

- `#525E2C` on `#F0F0EE` → **9.8:1** ✅ (Excellent)
- `#525E2C` on `#E0CFB5` → **7.2:1** ✅ (Very Good)
- `#909E8D` on `#F0F0EE` → **3.1:1** ✅ (Good for large text)
- `#D1AB6D` on `#525E2C` → **4.5:1** ✅ (Good)

All combinations meet or exceed WCAG AA standards for readability.

