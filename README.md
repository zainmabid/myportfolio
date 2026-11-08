# Zain Mashhood Abid (ZMA) — Executive Portfolio

A refined, industrial-editorial personal portfolio website for **Zain Mashhood Abid**, Founder & Managing Director at **Zaintegrated Solutions**, Solutions Architect & Consultant for RFID, Auto-ID, Warehouse Automation, and ERP.

Built with **Vite + React 19 + TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react** icons.

---

## 1. Quick Start

### Prerequisites
- Node.js (v18+ recommended, verified on Node v24)
- npm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 2. Design System & Concept

### Concept: "Precision & Traceability"
Designed like a refined industrial label and shipping asset tracking system meeting modern high-end editorial design: calm, confident, and executive.

- **Theme Palette (CSS Variables)**:
  - **Light Theme**:
    - Background: `#F4F6F8`
    - Surface: `#FFFFFF`
    - Ink: `#0F1B26`
    - Muted: `#5A6B79`
    - Line: `#D5DCE2`
  - **Dark Theme**:
    - Background: `#0B141B`
    - Surface: `#121F29`
    - Ink: `#E8EEF2`
    - Muted: `#8FA1AE`
    - Line: `#243441`
  - **Signal Amber Accent**: `#F5B800` (used sparingly on key highlights, active filter chips, timeline nodes, and primary action buttons).
  - **Deep Teal Secondary**: `#0E7C86` (links, secondary badges).
  - **Red Laser**: `#EF4444` (used for the single-pass laser sweep across the signature barcode on load).
- **Typography**:
  - Headings: `Archivo` (variable width and weight axes)
  - Body: `Public Sans` with line length restricted under 75 characters.
  - Loaded via Google Fonts with `font-display: swap`.
- **Signature Elements**:
  - **Dynamic Barcode Generator (`src/components/Barcode.tsx`)**: Generates an authentic industrial barcode from text with a single-pass animated red laser scan line on initial load (automatically disabled when `prefers-reduced-motion` is active).
  - **Asset Tag Cards**: Styled like physical asset registers and shipping labels with a 4px amber top accent bar, subtle industrial borders, and technical metadata tags.

---

## 3. Editing Content (`src/data/content.ts`)

**All content in the application lives in ONE file: `src/data/content.ts`.**
No content is hard-coded inside React components.

### 3.1 Updating Personal Info & Experience Years
Edit the `person` object in `src/data/content.ts`:
```ts
person: {
  name: 'Zain Mashhood Abid',
  headline: 'RFID, Auto-ID and Enterprise Automation Consultant | Founder, Zaintegrate',
  location: 'Lahore, Pakistan',
  relocationStatus: 'Open to relocation',
  email: 'zainmabid@gmail.com',
  phone: '+92 320 527 0594',
  linkedin: 'https://www.linkedin.com/in/zainmabid/',
  yearsExperience: 10, // Change anytime
  about: '...'
}
```

### 3.2 Swapping in Brand Logos
In `PORTFOLIO_DATA.brands`, each entry supports an optional `logo` image URL:
```ts
{
  id: 'unilever',
  name: 'Unilever',
  descriptor: 'FMCG & Consumer Goods',
  logo: '/brands/unilever.svg' // Place SVG/PNG into public/brands/
}
```
If `logo` is omitted or undefined, a clean typography wordmark is rendered automatically.

### 3.3 Adding Projects
In `PORTFOLIO_DATA.projects`, add a new `Project` object:
```ts
{
  id: 'project-slug',
  title: 'Project Name',
  client: 'Client Name',
  industry: 'Warehousing and logistics',
  tags: ['RFID', 'Warehouse'],
  description: 'One-line summary description.',
  outcomes: [
    'Outcome bullet 1',
    'Outcome bullet 2',
    'Outcome bullet 3'
  ],
  fullCaseStudy: {
    challenge: 'Description of the problem...',
    solution: 'Engineered solution...',
    hardwareDeployed: ['Fixed RFID Portals', 'Thermal Label Printers']
  }
}
```

### 3.4 Adding Certifications, Badges & Official Issuer Logos
In `PORTFOLIO_DATA.certifications`, add new items matching the `CertificationItem` interface:
```ts
{
  id: 'cert-unique-slug',
  group: 'Cloud, network and security', // 'Business and project' | 'Cloud, network and security' | 'Sales and marketing'
  issuer: 'Issuing Body (e.g. PMI, IBM, HPI, UNDSS, Cisco, Fortinet)',
  title: 'Credential Name',
  year: '2026', // optional
  credentialUrl: 'https://www.credential.net/...', // optional verification URL or /certifications/... PDF path
  image: '/certifications/badges/badge.png', // optional badge art image URL
  issuerLogo: '/logos/pmi.png' // optional issuer logo (placed in public/logos/)
}
```
Official issuer logos provided (PMI, IBM, HPI, UNDSS, Govt of Pakistan/PITAC, Cisco, Fortinet, IIBA, Scrum, Internet Society) reside in `public/logos/`.

---

## 4. Deployment Instructions

This application is a 100% static site with zero backend dependencies. It compiles to standard HTML, CSS, and JS in `dist/`.

### 4.1 Deploying to Vercel
1. Install the Vercel CLI or link your repository via the [Vercel Dashboard](https://vercel.com).
2. Configure settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.

### 4.2 Deploying to Netlify
1. Create a `netlify.toml` file or connect your repository on the [Netlify Dashboard](https://netlify.com).
2. Configure settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

---

## 5. Architectural & Design Assumptions

Where specific implementation details were open to designer judgment:
1. **Barcode Implementation**: Built a deterministic SVG bar-pattern renderer from string input to ensure sharp scaling without external image dependencies or network latency.
2. **Accessible Project Modals**: Modals trap focus, handle `Escape` key listeners, toggle `overflow: hidden` on the body, and support clicking outside the backdrop to close.
3. **Certifications Scale**: Since Zain has 18+ verifiable badges and 60+ certifications, the component defaults to showing the first 8 items with a smooth "Show all / Show fewer" toggle, plus an instant keyword search bar and group filtering chips.
4. **Theme Preference Persistence**: Dark/light mode defaults to the visitor's OS preference (`prefers-color-scheme`) and persists user overrides in `localStorage`.
5. **Contact Mailto Workflow**: Built a clean client-side brief builder that formats subject and structured body before initiating the visitor's local mail client, avoiding fragile third-party contact backends.
