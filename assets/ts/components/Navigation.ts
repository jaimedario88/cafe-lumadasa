export class NavigationController {
    private nav: HTMLElement | null;
    private mobileMenuBtn: HTMLButtonElement | null;
    private mobileMenu: HTMLElement | null;
    private menuIconOpen: HTMLElement | null;
    private menuIconClose: HTMLElement | null;
    private mobileNavLinks: NodeListOf<HTMLAnchorElement>;
    private isMobileMenuOpen: boolean = false;

    constructor() {
        this.nav = document.getElementById('main-nav');
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement | null;
        this.mobileMenu = document.getElementById('mobile-menu');
        this.menuIconOpen = document.getElementById('menu-icon-open');
        this.menuIconClose = document.getElementById('menu-icon-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        if (this.nav && this.mobileMenuBtn && this.mobileMenu && this.menuIconOpen && this.menuIconClose) {
            this.bindEvents();
            this.updateNav();
        }
    }

    private bindEvents(): void {
        this.mobileMenuBtn?.addEventListener('click', () => this.toggleMobileMenu());

        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isMobileMenuOpen) this.toggleMobileMenu();
            });
        });

        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(() => this.updateNav());
        });
    }

    private toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        
        if (this.isMobileMenuOpen) {
            this.mobileMenu!.classList.remove('opacity-0', 'pointer-events-none');
            this.mobileMenu!.classList.add('opacity-100', 'pointer-events-auto');
            this.menuIconOpen!.classList.add('hidden');
            this.menuIconClose!.classList.remove('hidden');
            this.nav!.classList.add('text-deep-forest');
            this.nav!.classList.remove('text-warm-cream');
            document.body.style.overflow = 'hidden';
        } else {
            this.mobileMenu!.classList.add('opacity-0', 'pointer-events-none');
            this.mobileMenu!.classList.remove('opacity-100', 'pointer-events-auto');
            this.menuIconOpen!.classList.remove('hidden');
            this.menuIconClose!.classList.add('hidden');
            document.body.style.overflow = '';
            this.updateNav();
        }
    }

    private updateNav(): void {
        if (this.isMobileMenuOpen) return;

        if (window.scrollY > 50) {
            this.nav!.classList.add('bg-warm-cream/90', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'text-deep-forest');
            this.nav!.classList.remove('py-6', 'text-warm-cream');
        } else {
            this.nav!.classList.remove('bg-warm-cream/90', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'text-deep-forest');
            this.nav!.classList.add('py-6', 'text-warm-cream');
        }
    }
}
