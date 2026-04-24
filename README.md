# Coffee Shop Website

A scalable, responsive coffee shop website built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Card.tsx     # Generic card component for displaying items
│   │   └── ButtonCard.tsx # Button-style card component
│   └── sections/        # Page section components
│       ├── Navbar.tsx
│       ├── MenuSection.tsx
│       ├── EngagementSection.tsx
│       ├── SocialProofSection.tsx
│       ├── CallToActionSection.tsx
│       └── Footer.tsx
├── data/                # Data files for content
│   ├── menu.json        # Coffee menu items
│   ├── socialProofData.ts # Testimonials and prompts
│   └── engagementData.ts # Engagement options
├── types/               # TypeScript type definitions
├── styles/              # Custom styles
└── assets/              # Images and other assets
```

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Scalable Content**: Easily add more menu items, testimonials, and engagement options
- **Reusable Components**: Card and ButtonCard components for consistent UI
- **Data-Driven**: Content managed through JSON and TypeScript files

## Adding More Content

### Menu Items
Add new coffee items to `src/data/menu.json`:
```json
{
  "id": 7,
  "name": "New Coffee",
  "description": "Description here",
  "price": 100,
  "image": "/images/newcoffee.jpg"
}
```

### Testimonials
Add to `src/data/socialProofData.ts`:
```typescript
export const testimonials = [
  // existing items...
  { text: "New testimonial text here." },
];
```

### Engagement Options
Add to `src/data/engagementData.ts`:
```typescript
export const engagementOptions: EngagementOption[] = [
  // existing options...
  { label: "New Option", emoji: "🔥" },
];
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
