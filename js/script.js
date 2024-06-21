document.addEventListener('DOMContentLoaded', function() {
    const aboutUsSection = document.getElementById('about-us');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsSection.classList.add('visible');
                observer.unobserve(aboutUsSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutUsSection);
});
