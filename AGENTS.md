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
* **Interactivity:** Object-Oriented TypeScript modules (`assets/ts/components/`) processed natively via Hugo Pipes (`js.Build`). Strictly no inline `<script>` tags. Ensured by local ESLint.

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
* **Typography Consistency:** All primary section headers ("Nuestra Historia", "La Selección", "Impacto") must use a unified structural footprint (e.g. `max-w-3xl`, strictly left-aligned, `text-5xl md:text-7xl leading-tight`) to establish a predictable editorial rhythm without chaotic custom sizing per block.
* **Asymmetrical Templates:** When generating HTML, favor grid asymmetry (e.g. `col-span-4` vs `col-span-8` container pairings) to balance heavy text blocks with immersive imagery. 
* **The "Origin Card" Component:** Implement the signature card style for coffee origins using `surface-variant`. Internally, rely on clean vertical stacking: text on top, product photography sitting entirely flush and uncropped at the bottom (`w-full h-auto mt-auto`), allowing dark studio backgrounds to naturally integrate with the card base instead of using complex CSS cropping logic.
* **SVG Asset Centralization:** Inline `<svg>` tags within HTML layouts are strictly prohibited. All SVGs *must* be extracted into `assets/icons/` as clean `.svg` files and loaded dynamically using Hugo Pipes (e.g. `{{ with resources.Get "icons/name.svg" }}{{ .Content | safeHTML }}{{ end }}`) to keep layout geometry clean.


## 5. Interaction & Conversion
* **Primary CTA:** Floating WhatsApp button (`#25D366`) and Terracotta (#E17355) "Adquirir Cosecha" buttons.
* **Dynamic Glassmorphism:** Use `backdrop-blur-xl` for the sticky navigation bar, paired fundamentally with a JS scroll-listener to toggle text foreground colors from light (over hero images) to dark (over cream backgrounds) to preserve accessibility.
* **Logo Lockup Rigidity:** When mimicking branding via CSS, ensure exact 1:1 structural parity across the Header and Footer components by wrapping the text in an `inline-flex flex-col items-center w-max` container, ensuring the prefix ("CAFÉ") identically centers over the mark ("LUMADASA") regardless of surrounding column alignments.