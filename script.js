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

    window.addEventListener('load', function() {
        const loader = document.getElementById('loader-overlay');
        if (loader) {
            setTimeout(function() {
                loader.classList.add('hidden');
            }, 1200); 
        }
    });

    // Hamburger menu logic
    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('sideNav');
    const navOverlay = document.getElementById('nav-overlay');
    const topNav = document.querySelector('.top-nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    if (menuToggle && sideNav && navOverlay) {
        menuToggle.addEventListener('click', function() {
            sideNav.classList.toggle('open');
            navOverlay.style.display = sideNav.classList.contains('open') ? 'block' : 'none';
        });
        navOverlay.addEventListener('click', function() {
            sideNav.classList.remove('open');
            navOverlay.style.display = 'none';
        });
        // Close menu when a link is clicked
        sideNav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                sideNav.classList.remove('open');
                navOverlay.style.display = 'none';
            });
        });
    }

    // Hide top nav except at the very top (desktop only)
    if (topNav) {
        window.addEventListener('scroll', function() {
            if (window.innerWidth > 900) {
                if (window.scrollY > 10) {
                    topNav.style.transform = 'translateY(-100%)';
                } else {
                    topNav.style.transform = 'translateY(0)';
                }
            } else {
                topNav.style.transform = '';
            }
        });
    }

    // Section fade-in on scroll
    function revealSectionsOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight - 60) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSectionsOnScroll);
    window.addEventListener('resize', revealSectionsOnScroll);
    revealSectionsOnScroll();
});