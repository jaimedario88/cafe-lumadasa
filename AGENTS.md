## 1. Project Identity: "The Earthbound Gallery"
* **Mission:** A digital curation of specialty coffee from Planadas, Tolima.
* **Creative North Star:** Treat the screen as a physical gallery space. Prioritize sensory depth, breathability, and high-editorial feel over transactional e-commerce looks.
* **Aesthetic:** "Soft Minimalism" using **Intentional Asymmetry** (overlapping boundaries) and **Tonal Layering** instead of borders.

## 2. Technical Stack
* **SSG:** Hugo (Extended version).
* **CSS:** Tailwind CSS v4 (Integrated via Hugo Pipes).
* **Fonts:** * **Headline/Display:** `Noto Serif` (Editorial voice).
    * **Body/Labels:** `Manrope` (Precision/functional voice).
* **Images:** Hugo Image Processing (`webp`, `q90`). Focus on high-res macro textures and misty landscapes.

## 3. Design Tokens & Surface Philosophy
* **Primary (Deep Forest):** `#1B3022`
* **Surface (Warm Cream):** `#F5F5DC` (Foundational paper)
* **Tertiary (Terracotta):** `#E17355` (Strictly for high-conversion CTAs/Accents)
* **The No-Line Rule:** Strictly prohibit `1px solid` borders. Define structure through:
    1.  **Tonal Shifts:** `surface` → `surface-container-low`.
    2.  **Negative Space:** Use spacing tokens `16` (5.5rem) or `20` (7rem).
* **Ambient Light:** Eschew digital shadows. Use warm, coffee-toned shadows (6% opacity, derived from `#796048`) for floating elements.

## 4. Hugo Architecture Rules
* **Modular Assembler:** The `index.html` must be a clean list of partials: `hero`, `story`, `coffee-profile`, `impact`, `contact`.
* **Data-First Content:** All metadata (Altitude: 1,600-1,900 msnm, Notes: Chocolate/Panela, Producers: Edwin & María Camila) must be pulled from `data/landing.yaml`.
* **Asymmetrical Templates:** When generating HTML for sections like "Nuestra Historia," favor split layouts where images bleed off-screen or overlap container boundaries.
* **The "Origin Card" Component:** Implement the signature asymmetrical card style for coffee origins using `surface-variant` (#E4E4CC) and Noto Serif typography.

## 5. Interaction & Conversion
* **Primary CTA:** Floating WhatsApp button (`#25D366`) and Terracotta (#E17355) "Adquirir Cosecha" buttons.
* **Glassmorphism:** Use `backdrop-blur-xl` with 80% opacity for the sticky navigation bar.