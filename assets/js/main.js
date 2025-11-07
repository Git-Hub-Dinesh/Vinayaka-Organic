/**
 * Nattu Sakkarai - Main JavaScript
 * Common functionality for the website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAllFeatures();
});

// Also listen for when HTML includes are loaded (navbar/footer)
document.addEventListener('htmlIncludesLoaded', function() {
    console.log('Reinitializing features after includes loaded');
    initializeAllFeatures();
});

/**
 * Initialize all JavaScript features
 */
function initializeAllFeatures() {
    // =========================================================================
    // Navigation Active State
    // =========================================================================
    setActiveNavLink();
    
    // =========================================================================
    // Back to Top Button
    // =========================================================================
    initBackToTop();
    
    // =========================================================================
    // Smooth Scrolling for Anchor Links
    // =========================================================================
    initSmoothScroll();
    
    // =========================================================================
    // Form Validation
    // =========================================================================
    initFormValidation();
    
    // =========================================================================
    // Navbar Scroll Effect
    // =========================================================================
    initNavbarScroll();
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && (currentPage === '' || currentPage === '/'))) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize Back to Top button functionality
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

/**
 * Navbar scroll effect - hide on scroll down, show on scroll up
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.site-header');
    
    if (navbar) {
        let lastScrollTop = 0;
        let scrollThreshold = 100; // Start hiding after 100px scroll
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 50) {
                navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
            
            // Hide/show navbar based on scroll direction
            if (scrollTop > scrollThreshold) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling down - hide navbar
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.transition = 'transform 0.3s ease-in-out';
                } else {
                    // Scrolling up - show navbar
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.transition = 'transform 0.3s ease-in-out';
                }
            } else {
                // Always show navbar at the top of the page
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }
}

/**
 * Gallery lightbox functionality (if needed)
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            // Here you can integrate a lightbox library or create custom modal
            console.log('Open lightbox for:', imgSrc);
        });
    });
}

/**
 * Contact form submission handler
 */
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        });
    }
}

/**
 * Animate elements on scroll (optional enhancement)
 */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Mobile menu close on link click
 */
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const navbarToggler = document.querySelector('.navbar-toggler');
            navbarToggler.click();
        }
    });
});

/**
 * Lazy load images (optional enhancement)
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Export functions if needed for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setActiveNavLink,
        initBackToTop,
        initSmoothScroll,
        initFormValidation,
        initNavbarScroll
    };
}
