document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initRevealAnimations();
});

function initNavigation() {
    const nav = document.getElementById('main-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!nav || !mobileMenuBtn || !mobileMenu || !menuIconOpen || !menuIconClose) {
        return;
    }

    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            mobileMenu!.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu!.classList.add('opacity-100', 'pointer-events-auto');
            menuIconOpen!.classList.add('hidden');
            menuIconClose!.classList.remove('hidden');
            nav!.classList.add('text-deep-forest');
            nav!.classList.remove('text-warm-cream');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu!.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu!.classList.remove('opacity-100', 'pointer-events-auto');
            menuIconOpen!.classList.remove('hidden');
            menuIconClose!.classList.add('hidden');
            document.body.style.overflow = '';
            updateNav();
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileMenuOpen) toggleMobileMenu();
        });
    });

    function updateNav() {
        if (isMobileMenuOpen) return;

        if (window.scrollY > 50) {
            nav!.classList.add('bg-warm-cream/90', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'text-deep-forest');
            nav!.classList.remove('py-6', 'text-warm-cream');
        } else {
            nav!.classList.remove('bg-warm-cream/90', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'text-deep-forest');
            nav!.classList.add('py-6', 'text-warm-cream');
        }
    }

    window.addEventListener('scroll', () => {
        // Use requestAnimationFrame for scroll performance
        window.requestAnimationFrame(updateNav);
    });
    
    updateNav();
}

function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}
