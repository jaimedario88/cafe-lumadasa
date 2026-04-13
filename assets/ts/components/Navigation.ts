/**
 * NavigationController
 * Handles sticky navigation bar scroll effects and manages the state
 * of the mobile fullscreen overlay menu.
 */
export class NavigationController {
    private nav: HTMLElement | null;
    private mobileMenuBtn: HTMLButtonElement | null;
    private mobileMenu: HTMLElement | null;
    private menuIconOpen: HTMLElement | null;
    private menuIconClose: HTMLElement | null;
    private mobileNavLinks: NodeListOf<HTMLAnchorElement>;
    private isMobileMenuOpen: boolean = false;

    /**
     * Initializes the controller by capturing required DOM nodes
     * and binding necessary event listeners.
     */
    constructor() {
        this.nav = document.getElementById('main-nav');
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement | null;
        this.mobileMenu = document.getElementById('mobile-menu');
        this.menuIconOpen = document.getElementById('menu-icon-open');
        this.menuIconClose = document.getElementById('menu-icon-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        if (
            this.nav &&
            this.mobileMenuBtn &&
            this.mobileMenu &&
            this.menuIconOpen &&
            this.menuIconClose
        ) {
            this.bindEvents();
            this.updateNav();
        }
    }

    /**
     * Binds click and scroll events to trigger menu and navigation updates.
     */
    private bindEvents(): void {
        this.mobileMenuBtn?.addEventListener('click', () => this.toggleMobileMenu());

        // Close menu when a navigation link is clicked
        this.mobileNavLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (this.isMobileMenuOpen) this.closeMobileMenu();
            });
        });

        // Throttle scroll events utilizing requestAnimationFrame
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(() => this.updateNav());
        });
    }

    /**
     * Toggles the mobile menu state.
     */
    private toggleMobileMenu(): void {
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    /**
     * Opens the fullscreen mobile overlay and locks body scrolling.
     */
    private openMobileMenu(): void {
        this.isMobileMenuOpen = true;

        // Show the menu overlay
        this.mobileMenu!.classList.remove('opacity-0', 'pointer-events-none');
        this.mobileMenu!.classList.add('opacity-100', 'pointer-events-auto');

        // Swap hamburger to X icon
        this.menuIconOpen!.classList.add('hidden');
        this.menuIconClose!.classList.remove('hidden');

        // Ensure nav text is dark over the overlay
        this.nav!.classList.add('text-deep-forest');
        this.nav!.classList.remove('text-warm-cream');

        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }

    /**
     * Closes the fullscreen mobile overlay and restores body scrolling.
     */
    private closeMobileMenu(): void {
        this.isMobileMenuOpen = false;

        // Hide the menu overlay
        this.mobileMenu!.classList.add('opacity-0', 'pointer-events-none');
        this.mobileMenu!.classList.remove('opacity-100', 'pointer-events-auto');

        // Swap X icon back to hamburger
        this.menuIconOpen!.classList.remove('hidden');
        this.menuIconClose!.classList.add('hidden');

        // Restore background scrolling
        document.body.style.overflow = '';

        // Recalculate nav coloring based on current scroll position
        this.updateNav();
    }

    /**
     * Modifies the navigation bar styles (glassmorphism/colors) depending on scroll depth.
     */
    private updateNav(): void {
        if (this.isMobileMenuOpen) return;

        if (window.scrollY > 50) {
            this.nav!.classList.add(
                'bg-warm-cream/90',
                'backdrop-blur-xl',
                'py-4',
                'shadow-sm',
                'text-deep-forest',
            );
            this.nav!.classList.remove('py-6', 'text-warm-cream');
        } else {
            this.nav!.classList.remove(
                'bg-warm-cream/90',
                'backdrop-blur-xl',
                'py-4',
                'shadow-sm',
                'text-deep-forest',
            );
            this.nav!.classList.add('py-6', 'text-warm-cream');
        }
    }
}
