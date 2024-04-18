window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var content = document.querySelector('.content');
    content.style.top = scrolled + 'px';
});

// Select all elements with the class 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is in view
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the fade-in animation
            entry.target.classList.add('visible');
            // Stop observing the element to avoid unnecessary checks
            observer.unobserve(entry.target);
        } else {
            // If the element is not in view
            // Remove the 'visible' class to trigger the fade-out animation
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.5 }); // Set a threshold to trigger the callback when at least 50% of the element is visible

// Observe each element with the class 'fade-in'
fadeElements.forEach(element => {
    observer.observe(element);
});