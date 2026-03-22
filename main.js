// Island Connect AI Blog JavaScript

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Contact modal functions
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Initialize charts
    initializeCharts();
    
    // Initialize contact form
    initializeContactForm();
    
    // Add scroll effects
    initializeScrollEffects();
    
    // Blog functionality removed - links work normally now
    // initializeBlogFunctionality();
});

// Initialize all charts
function initializeCharts() {
    // Wait for DOM to be fully loaded
    setTimeout(() => {
        // Real Estate Impact Chart
        const realEstateCtx = document.getElementById('realEstateChart');
        if (realEstateCtx) {
            new Chart(realEstateCtx, {
                type: 'bar',
                data: {
                    labels: ['Property Matching', 'Lead Conversion', 'Time on Market', 'Customer Satisfaction'],
                    datasets: [{
                        label: 'Before AI',
                        data: [50, 45, 100, 65],
                        backgroundColor: 'rgba(254, 209, 0, 0.8)',
                        borderColor: 'rgba(230, 194, 0, 1)',
                        borderWidth: 2
                    }, {
                        label: 'After AI',
                        data: [94, 78, 65, 89],
                        backgroundColor: 'rgba(0, 155, 58, 0.8)',
                        borderColor: 'rgba(0, 107, 42, 1)',
                        borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Real Estate AI Impact Comparison'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Tourism Impact Chart
    const tourismCtx = document.getElementById('tourismChart');
    if (tourismCtx) {
        new Chart(tourismCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Booking Efficiency',
                    data: [100, 120, 135, 145, 150, 156],
                    borderColor: '#009B3A',
                    backgroundColor: 'rgba(0, 155, 58, 0.2)',
                    tension: 0.4
                }, {
                    label: 'Revenue Growth',
                    data: [100, 115, 125, 135, 150, 173],
                    borderColor: '#FED100',
                    backgroundColor: 'rgba(254, 209, 0, 0.2)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Tourism AI Implementation Results'
                    }
                }
            }
        });
    }


    }, 1000); // 1 second delay to ensure DOM is ready
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                alert('Thank you for your message! We\'ll get back to you soon.');
                
                // Reset form
                contactForm.reset();
                closeContactModal();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Add scroll spy functionality
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-indigo-600', 'font-semibold');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    
    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

// Close modal on backdrop click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// Initialize mobile menu close on link click
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('#mobile-menu .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });
});

// Blog filtering functionality
function initializeBlogFiltering() {
    // This could be extended to filter blog posts by category
    console.log('Blog filtering initialized - ready for category filtering feature');
}

// Export functions for global use
window.scrollToSection = scrollToSection;
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;