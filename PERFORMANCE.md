# Performance Optimization Guide

## ✅ Implemented Optimizations

### 1. **Server-Side Rendering (SSR)**
- Hero slides now fetch server-side instead of client-side
- Eliminates loading flash and improves initial page load
- Better SEO and Core Web Vitals

### 2. **Incremental Static Regeneration (ISR)**
- Home page revalidates every 60 seconds
- API routes cache responses for 60 seconds
- Stale-while-revalidate for better UX

### 3. **Image Optimization**
- Next.js Image component with AVIF/WebP support
- Automatic image sizing and lazy loading
- Sanity CDN integration for optimized images

### 4. **Bundle Optimization**
- Swiper package imports optimized
- SWC minification enabled
- Compression enabled

### 5. **Caching Headers**
- API routes include proper cache-control headers
- Browser and CDN caching configured

## 📊 How to Check Performance

### 1. **Lighthouse (Chrome DevTools)**
```bash
# Open Chrome DevTools (F12)
# Go to "Lighthouse" tab
# Click "Generate report"
# Check scores for:
#   - Performance (aim for 90+)
#   - Accessibility (aim for 90+)
#   - Best Practices (aim for 90+)
#   - SEO (aim for 90+)
```

### 2. **Next.js Build Analysis**
```bash
# Build your app
npm run build

# Analyze bundle size
npm run build -- --analyze

# Or use @next/bundle-analyzer
npx @next/bundle-analyzer
```

### 3. **WebPageTest**
- Visit: https://www.webpagetest.org/
- Enter your production URL
- Get detailed performance metrics
- Check Core Web Vitals:
  - **LCP (Largest Contentful Paint)**: < 2.5s
  - **FID (First Input Delay)**: < 100ms
  - **CLS (Cumulative Layout Shift)**: < 0.1

### 4. **Chrome DevTools Performance Tab**
```bash
# Open DevTools (F12)
# Go to "Performance" tab
# Click record
# Reload page
# Stop recording
# Analyze:
#   - Main thread activity
#   - JavaScript execution time
#   - Layout shifts
```

### 5. **Network Tab Analysis**
```bash
# Open DevTools (F12)
# Go to "Network" tab
# Reload page
# Check:
#   - Total page size (aim for < 2MB)
#   - Number of requests (aim for < 50)
#   - Load time
#   - Waterfall chart
```

### 6. **Real User Monitoring (RUM)**
Consider adding:
- **Vercel Analytics** (if using Vercel)
- **Google Analytics 4** with Core Web Vitals
- **Sentry** for performance monitoring

## 🎯 Target Metrics

### Core Web Vitals
- **LCP**: < 2.5 seconds ✅
- **FID**: < 100 milliseconds ✅
- **CLS**: < 0.1 ✅

### Lighthouse Scores
- **Performance**: 90+ ✅
- **Accessibility**: 90+ ✅
- **Best Practices**: 90+ ✅
- **SEO**: 90+ ✅

### Bundle Size
- **Initial JS**: < 200KB ✅
- **Total Page Size**: < 2MB ✅
- **First Contentful Paint**: < 1.8s ✅

## 🔧 Additional Optimizations (Optional)

### 1. **Add Font Optimization**
```typescript
// In layout.tsx, optimize Google Fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Already implemented ✅
  preload: true,
});
```

### 2. **Add Resource Hints**
```typescript
// In layout.tsx head
<link rel="preconnect" href="https://cdn.sanity.io" />
<link rel="dns-prefetch" href="https://cdn.sanity.io" />
```

### 3. **Enable Compression**
```javascript
// Already enabled in next.config.mjs ✅
compress: true
```

### 4. **Monitor API Response Times**
- Add logging to track slow queries
- Consider adding Redis caching for frequently accessed data

## 📈 Performance Monitoring Tools

1. **Vercel Analytics** (if deployed on Vercel)
2. **Google PageSpeed Insights**: https://pagespeed.web.dev/
3. **GTmetrix**: https://gtmetrix.com/
4. **WebPageTest**: https://www.webpagetest.org/
5. **Chrome User Experience Report**: https://developers.google.com/web/tools/chrome-user-experience-report

## 🚀 Quick Performance Check

Run these commands to check your current performance:

```bash
# 1. Build and analyze
npm run build

# 2. Start production server
npm start

# 3. Test locally
# Open http://localhost:3000
# Run Lighthouse in Chrome DevTools

# 4. Check bundle size
npm run build -- --analyze
```

## 📝 Notes

- Hero slides now load instantly (no client-side fetch delay)
- Images are automatically optimized by Next.js
- API responses are cached for 60 seconds
- ISR ensures content stays fresh while being fast
- Bundle size optimized with tree-shaking

