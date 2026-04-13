import { NavigationController } from './components/Navigation';
import { ScrollAnimations } from './components/Animations';

document.addEventListener("DOMContentLoaded", () => {
    new NavigationController();
    new ScrollAnimations('.reveal-up');
});
