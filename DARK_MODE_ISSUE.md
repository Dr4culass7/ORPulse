# Dark Mode Issue - Investigation Report

## Problem Description
The dark/light theme toggle button is not working despite implementing VueUse's `useDark` composable. The button appears to change state (sun/moon icons toggle) but the actual dark mode styling is not being applied to the application.

## What Has Been Tested ✅

### 1. VueUse Implementation Approaches
- [x] **Basic `useDark()` implementation** - Simple default usage
- [x] **Shared composable pattern** - Using `createSharedComposable(useDark)` for global state
- [x] **Manual DOM manipulation** - Added `onChanged` callback with explicit HTML class management
- [x] **Event handler debugging** - Fixed `@click="toggleTheme"` vs `@click="toggleTheme()"`

### 2. State Management Verification
- [x] **Global state synchronization** - Confirmed `isDark` reactive ref updates correctly
- [x] **localStorage persistence** - Verified user preferences are being saved/loaded
- [x] **System preference detection** - Confirmed it respects OS dark mode settings

### 3. Tailwind CSS Configuration
- [x] **Dark mode configuration** - Confirmed `darkMode: 'class'` in `tailwind.config.js`
- [x] **CSS compilation** - Added test classes to verify dark: variants are compiled
- [x] **HTML class application** - Added logging to verify `dark` class on `<html>` element

### 4. Implementation Details Tested
- [x] **Component imports** - Verified VueUse imports are correct
- [x] **Package dependencies** - Confirmed `@vueuse/core` is installed and up to date
- [x] **Template bindings** - Verified `isDark` reactive state updates in template
- [x] **Debug logging** - Added extensive console logging to track state changes

## Current Implementation
```typescript
// src/composables/useSharedDark.ts
const useSharedDarkBase = createSharedComposable(() => 
  useDark({
    onChanged(dark: boolean) {
      const html = document.documentElement
      if (dark) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  })
)
```

## Likely Root Causes (Unresolved)

### 1. **SSR/Hydration Mismatch** 🔴
- Vue 3 SSR might cause client-server state mismatch
- DOM manipulation might be happening before client hydration completes
- **Test**: Add `onMounted` wrapper and test in purely client-side environment

### 2. **CSS Specificity Issues** 🔴  
- Dark mode classes might be overridden by other CSS
- CSS-in-JS or scoped styles could interfere with Tailwind classes
- **Test**: Check computed styles in DevTools, verify CSS cascade

### 3. **Timing Issues** 🔴
- `useDark` might be called before DOM is ready
- Race condition between Vue reactivity and DOM manipulation
- **Test**: Delay dark mode initialization until `nextTick` or `onMounted`

### 4. **Build Process Issues** 🔴
- Vite HMR might interfere with class application
- Production build might behave differently than dev mode
- **Test**: Build for production and test dark mode functionality

### 5. **Browser-Specific Issues** 🔴
- Different browsers might handle `document.documentElement.classList` differently
- Security policies might block DOM manipulation
- **Test**: Try different browsers, check console for errors

## Console Debug Output Pattern
```
🚀 Dark mode initialized: { isDark: false, htmlHasDarkClass: false, ... }
🔄 Toggle theme clicked, current isDark: false
🔧 Manual dark mode change: { dark: true }
☀️/🌙 Applied/Removed dark class from html
🔧 Final HTML classes: "dark" (or empty)
```

## Next Steps for Resolution
1. **DOM Inspection**: Manually verify in DevTools that `<html class="dark">` is actually present
2. **CSS Debugging**: Check if dark: classes are being applied in computed styles
3. **Production Testing**: Build and test in production environment
4. **Browser Testing**: Test across different browsers
5. **Framework Conflict**: Check for conflicts with other CSS frameworks or Vue plugins

## Files Modified
- `src/composables/useSharedDark.ts` - Shared composable with manual DOM control
- `src/components/layout/AppHeader.vue` - Toggle button implementation
- `tailwind.config.js` - Confirmed `darkMode: 'class'` configuration

## Environment
- Vue 3 with `<script setup>`
- Vite development server
- Tailwind CSS v4 
- VueUse v13.8.0
- Development environment: Linux/Chrome

---
**Status**: 🔴 Unresolved - Requires further investigation into SSR/timing/CSS specificity issues