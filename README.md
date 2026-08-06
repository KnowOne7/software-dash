# CRMS - React + TypeScript + Vite + Tailwind CSS + Flowbite

A comprehensive CRM system built with React, TypeScript, Vite, and styled with Tailwind CSS and Flowbite components.

## 🎨 Tailwind CSS Configuration

### Overview
This project uses **Tailwind CSS v4.1.13** with extensive customization for a complete CRM design system.

### Content Paths
Tailwind is configured to scan the following paths for class usage:
```javascript
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite/**/*.js"
]
```

### Dark Mode
- **Mode**: Class-based dark mode (`darkMode: 'class'`)
- Toggle dark mode by adding/removing the `dark` class on the root element

### Plugins
The following Tailwind plugins are integrated:
- **@tailwindcss/forms** - Better default styles for form elements
- **@tailwindcss/typography** - Beautiful typographic defaults
- **flowbite/plugin** - Flowbite component styles and utilities

### Custom Theme Extensions

#### 🎨 Color Palette
Extensive custom color system with 100-900 shades for:
- **Primary**: `#e41f07` (Red) - 10 shades
- **Secondary**: `#ffa201` (Orange) - 10 shades
- **Success**: `#03C95A` (Green) - 10 shades
- **Danger**: `#E70D0D` (Red) - 10 shades
- **Warning**: `#FFC107` (Yellow) - 10 shades
- **Info**: `#1B84FF` (Blue) - 10 shades
- **Light**: `#F8F9FA` (Light Gray) - 10 shades
- **Gray**: Custom gray scale (100-900)
- **Pink**: `#FD3995` - 10 shades
- **Purple**: `#800080` - 10 shades
- **Skyblue**: `#0DCAF0` - 10 shades

**Additional Brand Colors**:
- Sidebar variants (sidebar-2 through sidebar-7)
- Semantic colors: `night-blue`, `dark-gray`, `royal-blue`, `indigo`, `darkaqua`, etc.
- Transparent variants for all main colors (e.g., `primary-transparent`, `success-transparent`)
- Dark mode specific colors: `dark-mode-body`, `dark-mode-dark`, `dark-border`, `dark-color`

#### 📐 Spacing & Sizing
- Custom spacing: `17` (68px)
- Custom widths: `sidebar` (252px), `90` (90%)
- Custom max-width: `sm` (400px)

#### 🔲 Border Radius
- `input`: 5px
- `defaultradius`: 5px

#### 🌑 Box Shadows
Custom shadow utilities:
- `shadow`, `xs`, `sm`, `md`, `lg`
- `dropshadow`: Enhanced drop shadow
- `custom_shadow`: Multi-layered shadow effect

#### 📱 Responsive Breakpoints
Custom breakpoints for precise responsive design:
```javascript
screens: {
  'sm': {'min': '576px'},
  'lg': {'min': '992px'},
  'xl': {'min': '1200px'},
  'xxl': {'min': '1400px'},
  'media-max-xs': {'max': '575.98px'},
  'media-max-sm': {'max': '767.98px'},
  'media-max-md': {'max': '991.98px'},
  'media-max-lg': {'max': '1199.98px'}
}
```

#### 🎨 Background Gradients
Pre-configured gradient utilities:
- `bg-primary-gradient`, `bg-secondary-gradient`, `bg-success-gradient`
- `bg-info-gradient`, `bg-warning-gradient`, `bg-danger-gradient`
- `bg-light-gradient`, `bg-dark-gradient`, `bg-indigo-gradient`
- `bg-teal-gradient`, `bg-orange-gradient`, `bg-purple-gradient`
- `bg-pink-gradient`, `bg-custom-gradient`, `bg-linear-gradient`
- `bg-striped`: Striped pattern for progress bars

#### 🔤 Typography
- **Primary Font**: "Golos Text" (sans-serif)
- **Icon Font**: FontAwesome

#### ✨ Animations
Custom animations:
- **progress-bar-animated**: Animated striped progress bars
- **ripple**: Ripple effect animation (2s infinite)
- **pulsate1**: Pulsating effect with scale and opacity (2s infinite)

#### 🎯 Other Utilities
- Custom rotation: `rotate-317` (317deg)
- Custom transform: `transition` scale
- Custom opacity: `50` (0.5)
- Custom z-index: `40` (1050)

---

## 🌊 Flowbite Integration

### Overview
**Flowbite v3.1.2** and **Flowbite React v0.12.9** are integrated to provide pre-built, accessible UI components.

### Installation
Dependencies installed:
```json
{
  "flowbite": "^3.1.2",
  "flowbite-react": "^0.12.9"
}
```

### Configuration

#### 1. Tailwind Config
Flowbite content paths and plugin are included in `tailwind.config.js`:
```javascript
content: [
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite/**/*.js"
],
plugins: [
  require('flowbite/plugin')
]
```

#### 2. Vite Config
Flowbite is optimized for Vite bundling in `vite.config.ts`:
```javascript
optimizeDeps: {
  include: ['flowbite']
}
```

#### 3. CSS Imports
Flowbite styles are imported in `src/main.tsx`:
```javascript
import 'flowbite';
import "flowbite/dist/flowbite.css";
```

### Flowbite Initialization System

#### FlowbiteProvider
A custom provider (`src/providers/flowbiteProvider.tsx`) ensures Flowbite components are initialized:
- Initializes on component mount
- Re-initializes on route changes
- Handles dynamic content rendering

```typescript
import FlowbiteProvider from './providers/flowbiteProvider'

<FlowbiteProvider theme={theme}>
  <App />
</FlowbiteProvider>
```

#### FlowbiteInitializer
Global initializer in `src/main.tsx` that:
- Runs on app startup
- Performs multiple initialization passes to ensure all components are ready
- Handles timing issues with dynamic content

#### useDynamicFlowbite Hook
Custom hook (`src/hooks/useDynamicFlowbite.ts`) for dynamic content:
```typescript
import { useDynamicFlowbite } from './hooks/useDynamicFlowbite';

const { initializeFlowbite, reinitializeFlowbite } = useDynamicFlowbite();
```

**Features**:
- `initializeFlowbite()`: Initialize Flowbite components
- `reinitializeFlowbite()`: Reinitialize with delay for DOM updates
- `useDataTableFlowbite()`: Specialized hook for data tables with dynamic content

### Flowbite Components Used
The project extensively uses Flowbite components including:
- **Modals**: Dynamic modals in data tables and forms
- **Dropdowns**: Navigation and action menus
- **Tooltips**: Contextual help
- **Offcanvas**: Side panels and drawers
- **Tabs**: Content organization
- **Accordions**: Collapsible content sections

### Usage Example
```typescript
// Using Flowbite modal with dynamic initialization
import { useDynamicFlowbite } from '@/hooks/useDynamicFlowbite';

const MyComponent = () => {
  const { reinitializeFlowbite } = useDynamicFlowbite();
  
  useEffect(() => {
    // Reinitialize after dynamic content loads
    reinitializeFlowbite();
  }, [data]);
  
  return (
    <button data-modal-target="my-modal" data-modal-toggle="my-modal">
      Open Modal
    </button>
  );
};
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Key Dependencies

### UI & Styling
- **tailwindcss**: ^4.1.13
- **flowbite**: ^3.1.2
- **flowbite-react**: ^0.12.9
- **@tailwindcss/forms**: Included
- **@tailwindcss/typography**: Included
- **daisyui**: ^5.1.23
- **antd**: ^5.26.1
- **primereact**: ^10.9.6

### Icons
- **@fortawesome/fontawesome-free**: ^6.7.2
- **@tabler/icons-webfont**: ^3.34.0
- **react-feather**: ^2.0.10

### Charts & Visualization
- **apexcharts** & **react-apexcharts**: Chart library
- **chart.js** & **react-chartjs-2**: Chart components
- **@fullcalendar**: Calendar components

### Other
- **React**: ^19.1.1
- **TypeScript**: ~5.8.3
- **Vite**: ^7.1.7
- **Redux Toolkit**: ^2.8.2

---

## 🎯 Design System Usage

### Using Custom Colors
```jsx
<div className="bg-primary text-white">Primary Button</div>
<div className="bg-primary-500">Primary Shade 500</div>
<div className="bg-primary-transparent">Primary Transparent</div>
```

### Using Custom Gradients
```jsx
<div className="bg-primary-gradient">Gradient Background</div>
<div className="bg-striped">Striped Pattern</div>
```

### Using Custom Shadows
```jsx
<div className="shadow-dropshadow">Enhanced Shadow</div>
<div className="shadow-custom_shadow">Custom Multi-layer Shadow</div>
```

### Using Custom Animations
```jsx
<div className="animate-ripple">Ripple Effect</div>
<div className="animate-pulsate1">Pulsating Element</div>
```

### Dark Mode
```jsx
<div className="bg-white dark:bg-dark-mode-body">
  <p className="text-title dark:text-dark-color">Content</p>
</div>
```

---

## 📝 Notes

- All Flowbite components automatically initialize on route changes
- For dynamic content (modals, dropdowns in data tables), use `useDynamicFlowbite` hook
- Custom CSS is located in `src/style/custom.css` and `src/style/style.css`
- The project uses class-based dark mode - toggle by adding `dark` class to root element
- Base path is configured as `/template/` in Vite config

---

## 🤝 Contributing

When adding new components:
1. Use existing Tailwind utilities when possible
2. Follow the established color system
3. Ensure Flowbite components are properly initialized
4. Test in both light and dark modes
5. Verify responsive behavior across all breakpoints

---

## 📄 License

This project is private and proprietary.
