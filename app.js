// Бегущая строка - МАКСИМУМ копий для любого экрана
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.companies-track');
    if (track) {
        const originalItems = Array.from(track.querySelectorAll('.companies-item'));
        
        // Создаём много копий - для любого экрана хватит
        for (let i = 0; i < 30; i++) {
            originalItems.forEach(item => {
                const clone = item.cloneNode(true);
                track.appendChild(clone);
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.about-content__animation #container');

    if (container) {
        container.style.width = '100%';
        container.style.height = '500px';
    } else {
        console.error('Элемент не найден');
    }
});

// Исправляем блокировку прокрутки в Spline анимации
document.addEventListener('DOMContentLoaded', function() {
    const splineViewers = document.querySelectorAll('spline-viewer');
    let scrollTimeout;
    
    // При начале прокрутки отключаем pointer events у spline
    document.addEventListener('wheel', function() {
        splineViewers.forEach(viewer => {
            viewer.style.pointerEvents = 'none';
        });
        
        // Включаем обратно через 150ms после окончания прокрутки
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            splineViewers.forEach(viewer => {
                viewer.style.pointerEvents = 'auto';
            });
        }, 150);
    }, { passive: true });
});

// Простая прокрутка слайдера колесиком мыши
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.our-case__sliders');
    
    if (!sliderContainer) return;

    sliderContainer.addEventListener('wheel', function(e) {
        // Прокрутка слайдера только при зажатом Shift, иначе обычная прокрутка страницы
        if (e.shiftKey && e.deltaY !== 0) {
            const canScrollLeft = sliderContainer.scrollLeft > 0;
            const canScrollRight = sliderContainer.scrollLeft < (sliderContainer.scrollWidth - sliderContainer.clientWidth);
            
            // Блокируем прокрутку страницы только если слайдер может прокручиваться в нужном направлении
            if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
                e.preventDefault();
                sliderContainer.scrollLeft += e.deltaY;
            }
        }
    });
});

// Прокрутка слайдера about-blocks колесиком мыши
document.addEventListener('DOMContentLoaded', function() {
    const aboutSliderContainer = document.querySelector('.about-block__wrapper');
    
    if (!aboutSliderContainer) return;

    aboutSliderContainer.addEventListener('wheel', function(e) {
        // Прокрутка слайдера только при зажатом Shift, иначе обычная прокрутка страницы
        if (e.shiftKey && e.deltaY !== 0) {
            const canScrollLeft = aboutSliderContainer.scrollLeft > 0;
            const canScrollRight = aboutSliderContainer.scrollLeft < (aboutSliderContainer.scrollWidth - aboutSliderContainer.clientWidth);
            
            // Блокируем прокрутку страницы только если слайдер может прокручиваться в нужном направлении
            if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
                e.preventDefault();
                aboutSliderContainer.scrollLeft += e.deltaY;
            }
        }
    });
});

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

// Прокрутка слайдера our-command__participants-list колесиком мыши (только на мобильных)
document.addEventListener('DOMContentLoaded', function() {
    const participantsSliderContainer = document.querySelector('.our-command__participants-list');
    if (!participantsSliderContainer) return;
    participantsSliderContainer.addEventListener('wheel', function(e) {
        // Прокрутка работает только на экранах меньше 768px
        if (window.innerWidth > 768) return;
        if (e.shiftKey && e.deltaY !== 0) {
            const canScrollLeft = participantsSliderContainer.scrollLeft > 0;
            const canScrollRight = participantsSliderContainer.scrollLeft < (participantsSliderContainer.scrollWidth - participantsSliderContainer.clientWidth);
            if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
                e.preventDefault();
                participantsSliderContainer.scrollLeft += e.deltaY;
            }
        }
    });
});

// Бургер меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link, .mobile-contact');
    const body = document.body;

    // Открытие/закрытие меню
    function toggleMenu() {
        const isActive = burgerBtn.classList.contains('active');
        
        if (isActive) {
            // Закрываем меню
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        } else {
            // Открываем меню
            burgerBtn.classList.add('active');
            mobileMenu.classList.add('active');
            body.classList.add('menu-open');
        }
    }

    // Закрытие меню
    function closeMenu() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
    // Обработчик клика по бургер кнопке
    burgerBtn.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылки
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Закрытие меню при клике вне контента
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Закрытие меню по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Предотвращение прокрутки на мобильных устройствах
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
        if (mobileMenu.classList.contains('active')) {
            const touchY = e.touches[0].clientY;
            const touchDelta = touchStartY - touchY;
            
            // Блокируем прокрутку только если это не элементы меню
            if (!e.target.closest('.mobile-menu__content')) {
                e.preventDefault();
            }
        }
    }, { passive: false });
});

// Переключение участников команды
document.addEventListener('DOMContentLoaded', function() {
    const participantLinks = document.querySelectorAll('.our-command__participants-link');
    const mainImage = document.querySelector('.our-command__participants-content-img img');
    const mainTitle = document.querySelector('.our-command__participants-content-title');
    
    if (!participantLinks.length || !mainImage || !mainTitle) return;

    // Данные участников (соответствуют изображениям в HTML)
    const participantsData = {
        '1.png': { 
            name: 'Иванов Иван', 
            mainImage: './img/avatars/main.png' 
        },
        '2.png': { 
            name: 'Наталья Иванова', 
            mainImage: './img/avatars/2.png' 
        },
        '3.png': { 
            name: 'Петров Петр', 
            mainImage: './img/avatars/3.png' 
        },
        '4.png': { 
            name: 'Сидорова Анна', 
            mainImage: './img/avatars/4.png' 
        },
        '5.png': { 
            name: 'Козлов Максим', 
            mainImage: './img/avatars/5.png' 
        }
    };

    const participantsCountBlock = document.querySelector('.our-command__participants-count');
    const participantsCountSpans = participantsCountBlock ? participantsCountBlock.querySelectorAll('span') : [];
    const progressBar = participantsCountBlock ? participantsCountBlock.querySelector('.progress__fill') : null;
    const total = participantLinks.length;

    function padNumber(num) {
        return num < 10 ? '0' + num : num.toString();
    }

    function updateParticipantsCount(index) {
        if (participantsCountSpans.length === 2) {
            participantsCountSpans[0].textContent = padNumber(index + 1);
            participantsCountSpans[1].textContent = padNumber(total);
        }
        if (progressBar) {
            const percent = ((index + 1) / total) * 100;
            progressBar.style.width = percent + '%';
        }
    }

    // Инициализация при загрузке
    let initialIndex = Array.from(participantLinks).findIndex(link => link.classList.contains('our-command__participants-link--active'));
    if (initialIndex === -1) initialIndex = 0;
    updateParticipantsCount(initialIndex);

    participantLinks.forEach((link, idx) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех участников
            participantLinks.forEach(item => {
                item.classList.remove('our-command__participants-link--active');
            });
            
            // Добавляем активный класс к текущему участнику
            this.classList.add('our-command__participants-link--active');
            
            // Получаем данные участника
            const img = this.querySelector('img');
            const nameElement = this.querySelector('.our-command__participants-link-info-name');
            const mainImageContainer = document.querySelector('.our-command__participants-content-img');
            const mainContentContainer = document.querySelector('.our-command__participants-content');
            
            if (img && nameElement) {
                const imgSrc = img.getAttribute('src');
                const imgFileName = imgSrc.split('/').pop(); // Получаем имя файла
                const participantName = nameElement.textContent.trim();
                
                // Добавляем классы для анимации начала смены
                mainImageContainer.classList.add('changing');
                mainTitle.classList.add('changing');
                mainContentContainer.classList.add('loading');
                
                // Задержка для плавной анимации
                setTimeout(() => {
                    // Обновляем основное изображение и имя
                    if (participantsData[imgFileName]) {
                        mainImage.src = participantsData[imgFileName].mainImage;
                        mainImage.alt = participantsData[imgFileName].name;
                        mainTitle.textContent = participantsData[imgFileName].name;
                    } else {
                        // Если нет данных в объекте, используем имя из DOM
                        mainTitle.textContent = participantName;
                        mainImage.src = imgSrc;
                        mainImage.alt = participantName;
                    }
                    
                    // Убираем классы начала смены и добавляем классы завершения
                    mainImageContainer.classList.remove('changing');
                    mainTitle.classList.remove('changing');
                    mainContentContainer.classList.remove('loading');
                    
                    mainImageContainer.classList.add('changed');
                    mainTitle.classList.add('changed');
                    
                    // Убираем классы завершения через время анимации
                    setTimeout(() => {
                        mainImageContainer.classList.remove('changed');
                        mainTitle.classList.remove('changed');
                    }, 800);
                    
                }, 300);
            }
            // Обновляем счетчик и прогресс
            updateParticipantsCount(idx);
        });
    });
});

// === АДАПТИВНОЕ МАСШТАБИРОВАНИЕ SPLINE ДЛЯ HERO ===

function getBaseHeroWidth() {
    const width = window.innerWidth;
    if (width <= 600) {
        return 450;
    }else {
        return 1000;
    }
}
function adaptHeroSplineScale() {
    const right = document.querySelector('.hero-content__right');
    const left = document.querySelector('.hero-content__left');
    const spline = right?.querySelector('spline-viewer');
    if (!right || !left || !spline) return;

    // Базовая ширина для scale=1 (подберите под макет)
    const baseRightWidth = getBaseHeroWidth(); // px
    const minScale = 0.5;

    // Можно учитывать и левый блок, если нужно:
    // const totalWidth = right.offsetWidth + left.offsetWidth;
    // const scale = Math.max(minScale, right.offsetWidth / baseRightWidth);

    const zoom = Math.max(minScale, right.offsetWidth / baseRightWidth);
    // Spline-viewer не поддерживает scale напрямую, используем transform
    spline.style.zoom = `${zoom}`;
    spline.style.transformOrigin = 'center';
}

window.addEventListener('resize', adaptHeroSplineScale);
document.addEventListener('DOMContentLoaded', adaptHeroSplineScale);

function getBaseAboutWidth() {
    const width = window.innerWidth;
    if (width <= 600) {
        return 450;
    } else if (width <= 768) {
        return 700;
    } else if (width <= 1024) {
        return 580;
    } else {
        return 350;
    }
}

function adaptAboutSplineScale() {
    const aboutAnimation = document.querySelector('.about-content__animation');
    const aboutContent = document.querySelector('.about-content');
    const spline = aboutAnimation?.querySelector('spline-viewer');
    if (!aboutAnimation || !aboutContent || !spline) return;

    // Базовая ширина для scale=1 (подберите под макет)
    const baseRightWidth = getBaseAboutWidth(); // px
    const minScale = 0.5;

    // Можно учитывать и левый блок, если нужно:
    // const totalWidth = right.offsetWidth + left.offsetWidth;
    // const scale = Math.max(minScale, right.offsetWidth / baseRightWidth);

    const zoom = Math.max(minScale, aboutAnimation.offsetWidth / baseRightWidth);
    // Spline-viewer не поддерживает scale напрямую, используем transform
    spline.style.zoom = `${zoom}`;
    spline.style.transformOrigin = 'center';
}

window.addEventListener('resize', adaptAboutSplineScale);
document.addEventListener('DOMContentLoaded', adaptAboutSplineScale);

// Слайдер отзывов для мобильных (business.html)
document.addEventListener('DOMContentLoaded', function() {
    const reviewWrapper = document.querySelector('.review-content-wrapper');
    const reviewItems = document.querySelectorAll('.review-content');
    const prevArrow = document.querySelector('.our-case__links-arrows button:first-child');
    const nextArrow = document.querySelector('.our-case__links-arrows button:last-child');
    
    if (!reviewWrapper || !reviewItems.length || !prevArrow || !nextArrow) {
        console.log('Review slider elements not found:', {
            reviewWrapper: !!reviewWrapper,
            reviewItems: reviewItems.length,
            prevArrow: !!prevArrow,
            nextArrow: !!nextArrow
        });
        return;
    }
    
    console.log('Review slider initialized with', reviewItems.length, 'items');
    
    let currentIndex = 0;
    const totalItems = reviewItems.length;
    
    function updateSlider() {
        console.log('updateSlider called - window width:', window.innerWidth, 'currentIndex:', currentIndex);
        if (window.innerWidth <= 768) {
            // На мобильных - показываем только активный элемент
            reviewItems.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add('active');
                    console.log('Showing item', index, item);
                } else {
                    item.classList.remove('active');
                    console.log('Hiding item', index, item);
                }
            });
            console.log('Slider updated - showing item:', currentIndex);
        } else {
            // На десктопе - убираем все классы
            reviewItems.forEach(item => {
                item.classList.remove('active');
            });
            console.log('Desktop mode - showing all items');
        }
    }
    
    function nextReview() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }
    
    function prevReview() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    }
    
    // Обработчики кликов на стрелки
    nextArrow.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Next arrow clicked, moving to index:', (currentIndex + 1) % totalItems);
        nextReview();
    });
    
    prevArrow.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Prev arrow clicked, moving to index:', (currentIndex - 1 + totalItems) % totalItems);
        prevReview();
    });
    
    // Инициализация слайдера только на мобильных
    function initReviewSlider() {
        // Сначала убираем все активные классы
        reviewItems.forEach(item => {
            item.classList.remove('active');
        });
        // Устанавливаем первый элемент как активный на мобильных
        if (window.innerWidth <= 768 && reviewItems.length > 0) {
            reviewItems[0].classList.add('active');
            currentIndex = 0;
        }
        updateSlider();
    }
    
    // Инициализация при загрузке и изменении размера окна
    initReviewSlider();
    window.addEventListener('resize', initReviewSlider);
});

//! Business

function getBaseBusinessWidth() {
    const width = window.innerWidth;
    if (width <= 600) {
        return 450;
    } else if (width <= 768) {
        return 600;
    } else if (width <= 1024) {
        return 380;
    } else {
        return 450;
    }
}

function adaptBusinessSplineScale() {
    const aboutAnimation = document.querySelector('.business-steps-left');
    const aboutContent = document.querySelector('.business-steps-list');
    const spline = aboutAnimation?.querySelector('spline-viewer');
    if (!aboutAnimation || !aboutContent || !spline) return;

    // Базовая ширина для scale=1 (подберите под макет)
    const baseRightWidth = getBaseAboutWidth(); // px
    const minScale = 0.5;

    // Можно учитывать и левый блок, если нужно:
    // const totalWidth = right.offsetWidth + left.offsetWidth;
    // const scale = Math.max(minScale, right.offsetWidth / baseRightWidth);

    const zoom = Math.max(minScale, aboutAnimation.offsetWidth / baseRightWidth);
    // Spline-viewer не поддерживает scale напрямую, используем transform
    spline.style.zoom = `${zoom}`;
    spline.style.transformOrigin = 'center';
}

window.addEventListener('resize', adaptBusinessSplineScale);
document.addEventListener('DOMContentLoaded', adaptBusinessSplineScale);
