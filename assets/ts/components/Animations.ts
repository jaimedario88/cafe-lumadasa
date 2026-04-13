export class ScrollAnimations {
    private observer: IntersectionObserver;
    private targets: NodeListOf<HTMLElement>;

    constructor(selector: string = '.reveal-up', threshold: number = 0.1) {
        this.targets = document.querySelectorAll(selector);
        
        const observerOptions: IntersectionObserverInit = {
            threshold: threshold
        };

        this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), observerOptions);
        
        this.init();
    }

    private init(): void {
        this.targets.forEach(el => this.observer.observe(el));
    }

    private handleIntersection(entries: IntersectionObserverEntry[]): void {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                this.observer.unobserve(entry.target);
            }
        });
    }
}
