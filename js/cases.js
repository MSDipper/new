// Прокрутка слайдера our-case__choise-list колесиком мыши (только на мобильных)
document.addEventListener('DOMContentLoaded', function() {
    const choiseSliderContainer = document.querySelector('.our-case__choise-list');
    
    if (!choiseSliderContainer) return;

    choiseSliderContainer.addEventListener('wheel', function(e) {
        // Прокрутка работает только на экранах меньше 768px
        if (window.innerWidth > 768) return;
        
        // Прокрутка слайдера только при зажатом Shift, иначе обычная прокрутка страницы
        if (e.shiftKey && e.deltaY !== 0) {
            const canScrollLeft = choiseSliderContainer.scrollLeft > 0;
            const canScrollRight = choiseSliderContainer.scrollLeft < (choiseSliderContainer.scrollWidth - choiseSliderContainer.clientWidth);
            
            // Блокируем прокрутку страницы только если слайдер может прокручиваться в нужном направлении
            if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
                e.preventDefault();
                choiseSliderContainer.scrollLeft += e.deltaY;
            }
        }
    });
});