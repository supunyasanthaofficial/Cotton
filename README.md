# ☁️ Cotton Cloud Store

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?style=flat-square&logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.18-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-v7.10.1-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

**Cotton Cloud** is a modern, high-performance, and visually stunning e-commerce storefront crafted for the style-conscious shopper. Featuring a soft, elegant aesthetic with high-quality fashion collections for women, children, and accessory lovers, the application is built using **React 19**, **Tailwind CSS v4**, and **Vite (Rolldown)** to deliver a blazing-fast, responsive user experience.

---

## 🌟 Key Features

*   **🎨 Premium & Cozy UI Design**: Beautiful typography, soft color scheme, elegant hover transitions, custom sliding banners, and a whimsical snowfall background effect (`react-snowfall`) on the landing page.
*   **🛍️ Immersive Collections**:
    *   **Women's Collection**: Curated flowy dresses, cozy tops, and contemporary fits.
    *   **Kids' Corner**: Playful, vibrant, and skin-friendly clothing selections.
    *   **Exclusive Accessories**: Handbags, bags, and stylish accents.
*   **⏳ Deal of the Day Promo**: Interactive high-impact discount landing page featuring live, running countdown timers.
*   **🧭 Single Page App (SPA) Navigation**: Fast, client-side route transitions managed by **React Router 7** with built-in scroll-to-top mechanics.
*   **🛒 Seamless Checkout Flow**: Interactive shipping and billing information form with clean client-side validation and instant feedback.
*   **🙋 Accordion-Style FAQ**: Sleek, interactive frequently asked questions section with smooth drop-downs.
*   **📱 Fully Responsive**: Designed mobile-first, looking impeccable on devices of all sizes from smartphones to widescreen monitors.

---

## 🛠️ Technology Stack

*   **Library**: [React 19](https://react.dev/) — Functional components with modern Hooks.
*   **Build Tool**: [Vite](https://vite.dev/) — Hyper-fast bundler (configured with *rolldown-vite* for optimal HMR).
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/) — Next-generation CSS-first utility styling.
*   **Routing**: [React Router v7](https://reactrouter.com/) — Declarative Single Page App navigation.
*   **Icons**: [React Icons](https://react-icons.github.io/react-icons/) — Modern vector styling icons.
*   **Atmosphere**: [React Snowfall](https://github.com/carlgira/react-snowfall) — Gentle floating particles to elevate the shop's cozy vibe.

---

## 📁 Project Structure

```text
Cotton/
├── public/                 # Static assets (Vite logo, icons)
├── src/
│   ├── assets/             # Images, graphics, and brand assets
│   │   └── images/         # High-resolution product & collection images
│   ├── components/         # Reusable structural and UI components
│   │   ├── Header.jsx              # Auto-sliding hero slideshow banner
│   │   ├── Navigation.jsx          # Responsive navbar with mobile drawer
│   │   ├── ProductCard.jsx         # Card component for product listings
│   │   ├── TrendingProducts.jsx    # Highly responsive display of top products
│   │   ├── Discount.jsx            # Promotional promo banner
│   │   ├── Footer.jsx              # Comprehensive multi-column footer
│   │   └── ...                     # Section components (About, Services, Choose Us)
│   ├── pages/              # Routed page views
│   │   ├── Home.jsx                # Homepage layout (Reviews, Featured Collections, Deal of the Day)
│   │   ├── About.jsx               # Brand values, team, and story
│   │   ├── Fashions.jsx            # Dedicated full-catalog products view
│   │   ├── NewArrivals.jsx         # Latest inventory highlights
│   │   ├── Sales.jsx               # Special deals and discounted catalogs
│   │   ├── Contact.jsx             # Customer support form and office info
│   │   ├── FAQ.jsx                 # Collapsible dynamic FAQ accordions
│   │   └── Checkout.jsx            # Form-based checkout experience & summary
│   ├── App.css             # Main styling configurations
│   ├── App.jsx             # Root router and page structure layout
│   ├── index.css           # Tailwind directive entries
│   └── main.jsx            # Entry point of the React application
├── eslint.config.js        # ESLint configuration for code quality
├── postcss.config.js       # PostCSS processor rules
├── tailwind.config.js      # Custom theme utility tokens
├── vercel.json             # Vercel SPA routing and build configuration
└── package.json            # Scripts, overrides, and library dependencies
```

---

## 🚦 Navigation & Routes

The application leverages client-side routing to load page views instantly without browser refreshes:

| Route Path | View/Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Hero slide, Brands carousel, Collections, Deal of the Day, Reviews, Discounts. |
| `/about-us` | `About` | Brand history, mission statement, team members, and value propositions. |
| `/fashions` | `Fashions` | Main catalog featuring a wide variety of clothing and styling cards. |
| `/new-arrivals` | `NewArrivals` | Showcases newly released products and unique seasonal additions. |
| `/sales` | `Sales` | Special discount items, promotion pricing, and ladies' bags clearance. |
| `/contact` | `Contact` | Dynamic contact form, customer services address, and email details. |
| `/faq` | `FAQ` | Dynamic collapsible FAQ addressing shipping, refunds, and size guides. |
| `/checkout` | `Checkout` | Order pricing summary, secure checkout badges, and dynamic shipping form. |

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or newer is recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/cotton-cloud.git
cd cotton-cloud
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
Spin up the local developer server with instant HMR (Hot Module Replacement):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to see the site running live!

### 5. Build for Production
To bundle the application into an optimized static build:
```bash
npm run build
```
This generates a production-ready `./dist` directory.

### 6. Preview Production Build Locally
Verify the optimized assets before deploying:
```bash
npm run preview
```

---

## 🧹 Code Quality & Linting

Maintain code quality and styling consistency throughout development:
```bash
# Run ESLint to find and address code smells, errors, or warnings
npm run lint
```

---

## 🌍 Deployment

The project is pre-configured for direct, seamless deployment on [Vercel](https://vercel.com).

The included `vercel.json` file ensures that all client-side URL routing is automatically rewritten back to `index.html` (avoiding 404 errors during direct-route page refreshes):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Quick Deploy via Vercel CLI
```bash
# Install Vercel globally
npm install -g vercel

# Deploy instantly
vercel
```

---



## 📄 License

Distributed under the MIT License. See `LICENSE` for more information (if applicable).

---

<p align="center">Made with ❤️ for Cotton Cloud — Cozy Fashion, Elevated.</p>
