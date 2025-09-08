window.addEventListener('DOMContentLoaded', function() {
    // Mobile detection
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleDeviceChange(e) {
        document.body.classList.toggle('mobile', e.matches);
        document.body.classList.toggle('desktop', !e.matches);
    }
    
    // Initial check
    handleDeviceChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleDeviceChange);

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Remove copyright section JS logic
});