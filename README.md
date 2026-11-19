# Goethe's Theory of Light & Colour

An interactive laboratory for exploring Johann Wolfgang von Goethe's theory of colour and his morphological observations.

## Repository Structure

```text
Goethe-s-theory-of-light/
├── assets/
│   └── diagrams/
├── docs/
│   ├── goethe_optics_guide.md
│   └── morphology_metamorphosis.md
├── src/
│   ├── components/
│   │   ├── BoundarySpectrum.tsx
│   │   ├── ComparisonMatrix.tsx
│   │   ├── RetinalAfterimage.tsx
│   │   ├── TurbidMedium.tsx
│   │   └── UrpflanzeEngine.tsx
│   ├── engine/
│   │   ├── opticsCalculations.ts
│   │   └── plantMorphology.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

## Interactive Features

1. **Prismatic Edge Simulator** — Adjust aperture width, glass density, and screen distance.
2. **Turbid Media Renderer** — Explore transmitted warm light and scattered blue sky colour.
3. **Retinal Dynamics Sandbox** — Practise complementary-colour afterimages.
4. **Metamorphosis Visualiser** — Explore expansion and contraction through plant organs.
5. **Comparison Matrix** — Compare Newton and Goethe's frameworks.

## Quick Start

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```
