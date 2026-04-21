# Café Lumadasa

> A digital curation of specialty coffee from Planadas, Tolima.

## 📌 Overview

**Café Lumadasa** ("The Earthbound Gallery") is a web experience designed to showcase specialty coffee from Planadas, Tolima. It prioritizes sensory depth, breathability, and a high-editorial feel, moving away from conventional e-commerce aesthetics to offer a modern, soft-minimalist digital gallery.

## 🛠️ Technology Stack

- **Static Site Generator:** [Hugo](https://gohugo.io/) (Extended version required)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Integrated natively via Hugo Pipes)
- **Typography:** Noto Serif (Display / Editorial) & Manrope (Body / Functional)
- **Image Processing:** Hugo Image Processing (`webp`, `q90`) for macro textures and high-quality photography. Bounding boxes are strictly enforced via Tailwind aspect ratios (`aspect-[3/4]`, `aspect-[4/5]`) and `object-cover` to ensure layout stability across varying source image proportions.

## 🎨 Design Philosophy

- **Soft Minimalism:** Intentional asymmetry and overlapping boundaries.
- **Tonal Layering:** The design entirely eschews traditional `1px solid` borders in favor of negative space and subtle tonal shifts (e.g., `surface` to `surface-container-low`).
- **Color Palette:**
    - **Primary (Deep Forest):** `#1B3022`
    - **Surface (Warm Cream):** `#F5F5DC`
    - **Accent (Terracotta):** `#E17355` (for CTAs)
- **Ambient & Glassmorphism:** Coffee-toned ambient shadows and elegant use of `backdrop-blur-xl` in navigation components.

## 🚀 Local Development

### Prerequisites

1. **Hugo Extended:** Ensure you have the _Extended_ version of Hugo installed (required for Tailwind CSS v4 processing). You can check with:
    ```bash
    hugo version
    ```
    _Make sure the output includes `+extended`._
2. **Node.js & pnpm:** Required for resolving Javascript dependencies like TypeScript, ESLint, and Prettier.

### Setup & Run

1. Clone the repository:

    ```bash
    git clone https://github.com/jaimedario88/cafe-lumadasa.git
    cd cafe-lumadasa
    ```

2. Install the strict linting and Javascript bundle tools:

    ```bash
    pnpm install
    ```

    _(Note: This automatically triggers Husky, cementing our Git Hooks into your local repo)._

3. Start the Hugo development server:

    ```bash
    hugo server
    ```

4. Open your browser and navigate to `http://localhost:1313/`.

## 📜 Development Workflow

- **Automated Formatting:** When you run `git commit`, Husky and `lint-staged` immediately intercept it, enforcing `eslint` checks on `.ts` files and running `prettier` natively over your `.html` and `.md` files. (HTML formatting is strictly governed by `prettier-plugin-go-template` to protect Hugo syntax). You do not need to format them manually.
- **Conventional Commits:** Your commit messages are tightly controlled via `commitlint`. You must prefix all commits semantically (e.g., `feat: added gallery section` or `fix: padding bug`).

## 📁 Architecture Notes

- **Data-Driven Content:** All structured content and coffee metadata (altitude, notes, producers) are pulled directly from `data/landing.yaml`.
- **Modular Layouts:** The core `index.html` structure acts as a modular assembler pulling in partials like `hero`, `story`, `coffee-profile`, `video`, `impact`, and `contact`.
- **Asymmetrical Grid:** The project favors grid asymmetry to balance heavy text blocks with immersive imagery.
- **TypeScript First:** All interactions reside cleanly in `assets/ts/components/` utilizing ES Modules and classes. Hugo pipes (`js.Build`) natively transpile these with zero external bundler scaffolding needed.

## ☕ The Origin

The coffee highlighted comes from altitudes of 1,600-1,900 msnm, featuring unique tasting notes of Chocolate and Panela, expertly produced by Edwin & María Camila.

---

_Curated with precision, crafted for the senses._
