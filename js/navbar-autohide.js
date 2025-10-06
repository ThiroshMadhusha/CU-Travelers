// navbar-autohide.js - Auto-hide navbar when near footer
(function() {
    function initNavbarAutoHide() {
        const navbar = document.querySelector('nav');
        
        if (!navbar) {
            // Retry after a short delay if navbar not found
            setTimeout(initNavbarAutoHide, 100);
            return;
        }
        
        let ticking = false;
        let lastScrollTop = 0;
        
        function updateNavbarVisibility() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calculate distance from bottom
            const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
            
            // Reduced trigger distance: hide when within 300px of footer (adjust this value as needed)
            const triggerDistance = 300; // Change this to make it hide sooner/later
            
            if (distanceFromBottom <= triggerDistance) {
                // Sliding up with animation
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.opacity = '0';
            } else {
                // Sliding down with animation
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }
            
            lastScrollTop = scrollTop;
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbarVisibility);
                ticking = true;
            }
        }
        
        // Listen to scroll events
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Initial check
        updateNavbarVisibility();
        
        // Recheck when page loads completely
        window.addEventListener('load', updateNavbarVisibility);
        
        // Recheck on window resize
        window.addEventListener('resize', updateNavbarVisibility);
        
        // Watch for navbar to be added to DOM (for dynamic loading)
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    updateNavbarVisibility();
                }
            });
        });
        
        // Observe the navbar placeholder for changes
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            observer.observe(navbarPlaceholder, { childList: true, subtree: true });
        }
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarAutoHide);
    } else {
        initNavbarAutoHide();
    }
})();