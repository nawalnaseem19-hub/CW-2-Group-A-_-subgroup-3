$(document).ready(function () {
    // --- SMALL DEBOUNCE FUNCTION ---
    function debounce(func, delay) {
        let timeoutId;
        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    }

    // --- SCROLL REVEAL ENGINE ---
    function revealOnScroll() {
        $('.reveal').each(function () {
            const objectTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > objectTop - 100) {
                $(this).addClass('active');
            }
        });
    }

    const debouncedReveal = debounce(revealOnScroll, 100);
    $(window).on('scroll', debouncedReveal);
    revealOnScroll();
});