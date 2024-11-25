document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation');

    const handleScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Вызвать функцию при загрузке страницы
    handleScroll();
});
