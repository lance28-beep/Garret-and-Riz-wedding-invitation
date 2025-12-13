# Wedding Website Update Summary

## ✅ Completed Updates

### Couple Information
- **Groom**: Garret Rebagoda
- **Bride**: Rizalyn Samson
- **Nicknames**: Garret & Riz
- **Monogram**: Updated from "CK" to "GR"

### Wedding Details
- **Date**: March 18, 2026 (Tuesday)
- **Time**: 3:30 PM
- **Guest Arrival Time**: 2:45 PM (45 minutes before ceremony)
- **Entourage Arrival**: 2:45 PM

### Venue Information
- **Ceremony**: Santuario de San Vicente de Paul
- **Reception**: Bulwagan de San Vicente
- **Address**: 221 Tandang Sora Ave, Quezon City, 1116 Metro Manila
- **Note**: Both ceremony and reception are at the same location

### Theme & Colors
- **Theme**: Dusty Blue & Tan Motif
- **Primary Color**: #9EAFC0 (Dusty Blue)
- **Secondary Color**: #8B9DC3 (Dusty Blue variation)
- **Accent Colors**: #D2B48C (Tan), #C9B299 (Tan variation), #E8DED0 (Light beige)

### Dress Code
- **Female Sponsors**: Dusty Blue Dress/Gown
- **Male Sponsors**: Black Suit
- **Ladies (Guests)**: Formal Dress/Gown/Suit - Dusty Blue, Tan, or Beige
- **Gentlemen (Guests)**: Polo & Pants (Strictly no T-shirt) - Dusty Blue, Tan, or Beige

### Love Story
Updated with a new narrative focusing on faith, patience, and divine timing for Garret and Rizalyn.

### RSVP Deadline
Updated to: February 18, 2026

### Metadata & SEO
- Updated all meta tags and Open Graph data
- Updated structured data (JSON-LD) for search engines
- Updated event dates and times in schema

## 📋 TODO: Items for You to Complete

### 1. Entourage List
The entourage section in `content/site.ts` has been cleared. You need to add:
- Best Man & Maid/Matron of Honor
- Parents of the Bride and Groom
- Bridesmaids
- Groomsmen
- Secondary Sponsors (Candle, Cord, Veil)
- Flower Girls
- Ring/Coin Bearers

**Example format:**
```typescript
{ role: "Best Man", name: "Name Here" },
{ role: "Maid of Honor", name: "Name Here" },
{ role: "Father", name: "Father's Name", group: "riz-family" },
```

### 2. Principal Sponsors
The principal sponsors list in `content/site.ts` has been cleared. Add your sponsors:

**Example format:**
```typescript
{ name: "Mr. John Doe", spouse: "Mrs. Jane Doe" },
{ name: "Mrs. Single Sponsor", spouse: "" },
```

### 3. Venue Photos
The following image files need to be added to the `public/Details/` folder:
- `Santuario-de-San-Vicente-de-Paul.jpg` (ceremony venue photo)
- `Bulwagan-de-San-Vicente.jpg` (reception venue photo)

**Note**: The old photo references have been updated in the code, but you need to add the actual image files.

### 4. Couple Photos
Update the following photos in the appropriate folders:
- `/public/desktop-background/` - Desktop hero background images (5 images)
- `/public/mobile-background/` - Mobile hero background images (3+ images)
- `/public/monogram/monogram.png` - Update monogram to "GR" if needed
- Gallery photos and other couple images throughout the site

### 5. Google Drive Link
Update the SnapShare Google Drive link in `content/site.ts`:
```typescript
snapShare: {
  googleDriveLink: "YOUR_ACTUAL_GOOGLE_DRIVE_LINK_HERE",
  ...
}
```

### 6. QR Code for Gifts
Update the GCash QR code image:
- File location: `/public/QR/QR.png`
- Replace with your actual GCash QR code

### 7. Link Preview Image
Update the preview image for social media sharing:
- File location: `/public/Details/linkPreview.jpg`
- This appears when the website is shared on social media

### 8. Favicon & Icons
Update the favicon and app icons in `/public/favicon_io/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Ideally, create a custom "GR" monogram for these icons.

## 📝 Files Updated

1. **content/site.ts** - Main configuration file (couple info, dates, venues, theme)
2. **components/loader/Hero.tsx** - Updated monogram from "CK" to "GR"
3. **components/sections/wedding-timeline.tsx** - Updated couple names in descriptions
4. **components/sections/details.tsx** - Updated venue image references
5. **app/layout.tsx** - Updated metadata, dates, and preload links
6. **README.md** - Updated documentation with new couple info and dates

## 🎨 Color Palette Reference

Your Dusty Blue & Tan theme uses these colors:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dusty Blue | #9EAFC0 | Primary color |
| Dusty Blue Dark | #8B9DC3 | Secondary color |
| Tan | #D2B48C | Accent color |
| Tan Light | #C9B299 | Accent variation |
| Beige | #E8DED0 | Light accent |

## 🚀 Next Steps

1. Add your entourage and principal sponsors to `content/site.ts`
2. Replace venue photos in `/public/Details/`
3. Replace couple photos in all image folders
4. Update GCash QR code in `/public/QR/`
5. Update Google Drive link for photo sharing
6. Test the website locally: `pnpm dev`
7. Deploy to production when ready

## 📞 Important Notes

- **Arrival Time**: Make sure guests know to arrive by **2:45 PM** (45 minutes before the 3:30 PM ceremony)
- **Same Location**: Both ceremony and reception are at the same venue complex
- **Theme Colors**: Remind guests about the Dusty Blue and Tan color theme in their attire

---

**Last Updated**: December 13, 2025

