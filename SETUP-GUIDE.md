# Mr. Cuba Website Setup Guide

## 🎉 Your website is ready!

A beautiful, minimalistic single-page website for Mr. Cuba's motorbike tours has been created.

## 📸 Adding Your Photos

### Step 1: Add photos to the project

Place your tour photos in the `/public/images/` folder. The website supports JPG, PNG, and WebP formats.

### Step 2: Update the photo references in App.tsx

Open `src/App.tsx` and update the image arrays:

#### Hero Images (3-5 photos recommended)
These will rotate in the hero section:
```typescript
const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg'
]
```

#### Gallery Images (as many as you want!)
These appear in the photo gallery:
```typescript
const galleryImages = [
  '/images/tour-1.jpg',
  '/images/tour-2.jpg',
  '/images/tour-3.jpg',
  '/images/tour-4.jpg',
  // Add more...
]
```

#### About Section Image
Add Mr. Cuba's photo:
```typescript
const aboutContent = {
  name: 'Mr. Cuba',
  description: `Your description here...`,
  image: '/images/mr-cuba-profile.jpg'
}
```

## ✏️ Customizing Content

### Update Contact Information

In `src/App.tsx`, update the `contactInfo` object:
```typescript
const contactInfo = {
  phone: '+84 XXX XXX XXX',        // Your phone number
  email: 'mrcuba@example.com',     // Your email
  whatsapp: '+84 XXX XXX XXX',     // WhatsApp number (format: +country_code number)
  facebook: 'https://facebook.com/yourpage',
  instagram: 'https://instagram.com/yourhandle'
}
```

### Update About Section

Modify the `aboutContent` object in `src/App.tsx`:
```typescript
const aboutContent = {
  name: 'Mr. Cuba',
  description: `Write your story here...
  
You can use multiple paragraphs by separating them with blank lines.`,
  image: '/images/mr-cuba.jpg'
}
```

### Update Testimonials

Edit the `testimonials` array in `src/App.tsx`:
```typescript
const testimonials = [
  {
    name: 'Customer Name',
    country: 'Country',
    text: 'Their testimonial...',
    rating: 5
  },
  // Add more testimonials...
]
```

## 🚀 Running the Website

### Development Mode
```bash
npm run dev
```
Then open http://localhost:5173 in your browser

### Build for Production
```bash
npm run build
```
The built files will be in the `dist` folder, ready to deploy!

## 🎨 Color Customization

The website uses a gold/amber color scheme. To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#D4AF37',      // Main accent color (currently gold)
  secondary: '#1a1a1a',    // Dark text color
  accent: '#f5f5f5'        // Light background color
}
```

## 📱 Features Included

✅ Responsive design (looks great on mobile, tablet, and desktop)
✅ Smooth scrolling navigation
✅ Animated hero section with image slideshow
✅ Photo gallery with lightbox viewer
✅ Testimonials section with star ratings
✅ Contact section with clickable phone, email, and WhatsApp
✅ Social media links
✅ SEO-optimized with meta tags

## 🔧 Structure

```
src/
  components/
    Navigation.tsx    - Top navigation bar
    Hero.tsx         - Hero section with slideshow
    About.tsx        - About Mr. Cuba section
    Gallery.tsx      - Photo gallery with lightbox
    Testimonials.tsx - Customer testimonials
    Contact.tsx      - Contact information
    Footer.tsx       - Footer section
  App.tsx            - Main app (customize content here!)
  index.css          - Global styles
```

## 💡 Tips

1. **Image sizes**: Use images that are at least 1920x1080 for best quality
2. **Image format**: WebP is recommended for smaller file sizes
3. **Hero images**: Choose 3-5 stunning photos that showcase your tours
4. **Gallery**: Add 12-20 photos showing variety (landscapes, people, food, bikes, etc.)
5. **About photo**: Use a clear portrait of yourself with your motorbike

## 🐛 Need Help?

If you encounter any issues or need to make changes, check:
- Console errors in browser (F12)
- Make sure all image paths are correct
- Ensure images are in `/public/images/` folder

Enjoy your new website! 🎊

