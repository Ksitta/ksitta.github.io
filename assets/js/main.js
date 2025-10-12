// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('body[id="head"], .section-container .section-title h2');
    const navLinks = document.querySelectorAll('.sidebar-nav li a');

    const onScroll = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            // The "150" is an offset. Adjust it to your liking.
            // It means the section becomes "active" when its title is 150px from the top of the viewport.
            if (sectionTop < 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // The link's href is something like "/#education". We need to get "education".
            const href = link.getAttribute('href').substring(1);
            if (href === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
});