// Intersection Observer with more precise options
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add small delay for more natural feel
            setTimeout(() => {
                entry.target.classList.add('active');
            }, 150);
        }
    });
}, {
    // Trigger animation slightly before element comes into view
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
});

// When the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'content'
    const elements = document.querySelectorAll('.content');
    elements.forEach((el) => observer.observe(el));
}); 