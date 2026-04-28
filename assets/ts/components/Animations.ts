/**
 * ScrollAnimations
 * Wraps intersecting observer logic to dynamically add animation
 * classes to elements when they enter the viewport.
 */
export class ScrollAnimations {
    private observer: IntersectionObserver;
    private targets: NodeListOf<HTMLElement>;

    /**
     * Initializes the Intersection Observer.
     * @param selector The CSS selector matching elements to track.
     * @param threshold The percentage of the element that must be visible (0.0 to 1.0).
     */
    constructor(selector: string = '.reveal-up', threshold: number = 0.1) {
        this.targets = document.querySelectorAll(selector);

        const observerOptions: IntersectionObserverInit = {
            threshold: threshold,
        };

        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            observerOptions,
        );

        this.init();
    }

    /**
     * Tells the observer to begin watching the queried DOM targets.
     */
    private init(): void {
        this.targets.forEach((el) => this.observer.observe(el));
    }

    /**
     * Callback method triggered whenever observed elements cross the threshold.
     * @param entries Node instances currently matching the observer threshold conditions.
     */
    private handleIntersection(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Apply the CSS transition triggering class
                entry.target.classList.add('active');

                // Stop observing this element entirely to preserve performance
                this.observer.unobserve(entry.target);
            }
        });
    }
}
