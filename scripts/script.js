document.addEventListener('DOMContentLoaded', () => {
    const sections = [...document.querySelectorAll('section')];

    const options = {
        rootMargin: '0px',
        threshold: 0.25
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.25) {
                entry.target.classList.add('section-visible');
            }
            else {
                entry.target.classList.remove('section-visible');
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    sections.forEach((section, index) => {

        // const sectionChildren = [...section.querySelector("[data-content]").children];

        // sectionChildren.forEach((el, index) => {
        //     el.style.setProperty("--delay", `${index * 250}ms`);
        // });

        observer.observe(section);
    });
});