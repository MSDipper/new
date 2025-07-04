
// Модальное окно для услуг order-get
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Инициализация модального окна для order-get');
    
    const modal = document.getElementById('caseModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementById('modalClose');
    const orderGetItems = document.querySelectorAll('.order-get__content-item');
    
    console.log('📋 Найденные элементы:', {
        modal: !!modal,
        modalImage: !!modalImage,
        modalTitle: !!modalTitle,
        modalSubtitle: !!modalSubtitle,
        modalDescription: !!modalDescription,
        modalClose: !!modalClose,
        orderGetItemsCount: orderGetItems.length
    });
    
    if (!modal || !modalImage || !modalTitle || !modalSubtitle || !modalDescription || !modalClose) {
        console.error('❌ Отсутствуют некоторые элементы модального окна');
        return;
    }
    
    if (orderGetItems.length === 0) {
        console.error('❌ Не найдены элементы .order-get__content-item');
        return;
    }

    // Данные для каждой услуги
    const servicesData = {
        'ux-prototype': {
            title: 'UX-дизайн',
            subtitle: 'Создание пользовательского опыта для увеличения конверсии',
            image: '../img/service/modal-1.png',
            description: 'Мы создаем детальный UX-прототип, который учитывает поведение и потребности вашей целевой аудитории. Прототип включает пользовательские сценарии, карту пути клиента и wireframes ключевых страниц. Это позволяет заранее проверить удобство использования и оптимизировать конверсию еще до начала дизайна.'
        },
        'ui-design': {
            title: 'UI-дизайн',
            subtitle: 'Современный интерфейс с уникальной визуальной концепцией',
            image: '../img/service/modal-2.png',
            description: 'Разрабатываем стильный и современный интерфейс, который отражает вашу корпоративную идентичность. Используем актуальные дизайн-тренды, создаем уникальную визуальную концепцию и дизайн-систему. Все элементы интерфейса проектируются с учетом удобства использования и эстетической привлекательности.'
        },
        'cms': {
            title: 'CMS-разработка',
            subtitle: 'Подбор и настройка системы управления под ваши задачи',
            image: '../img/service/modal-3.png',
            description: 'Подбираем и настраиваем оптимальную систему управления контентом под ваши конкретные задачи. WordPress для блогов и корпоративных сайтов, Tilda для лендингов, Bitrix для интернет-магазинов. Настраиваем админ-панель так, чтобы вы могли легко управлять контентом без технических знаний.'
        },
        'seo': {
            title: 'SEO-оптимизация',
            subtitle: 'Структура и настройка для высоких позиций в поиске',
            image: '../img/service/modal-4.png',
            description: 'Создаем SEO-оптимизированную структуру сайта с правильной иерархией страниц, настраиваем метатеги, микроразметку Schema.org, оптимизируем скорость загрузки. Проводим анализ ключевых слов и конкурентов, создаем контент-план. Результат — высокие позиции в поисковых системах.'
        },
        'mobile': {
            title: 'Мобильная адаптация',
            subtitle: 'Адаптивный дизайн для всех устройств и экранов',
            image: '../img/service/modal-5.png',
            description: 'Разрабатываем полностью адаптивный дизайн, который идеально отображается на всех устройствах — от смартфонов до широкоэкранных мониторов. Используем подход Mobile First, оптимизируем touch-интерфейсы, тестируем на реальных устройствах. Ваш сайт будет удобен для 70%+ мобильных пользователей.'
        },
        'integration': {
            title: 'Интеграции',
            subtitle: 'Подключение CRM-систем и аналитики для контроля эффективности',
            image: '../img/service/modal-6.png',
            description: 'Настраиваем интеграцию с CRM-системами (AmoCRM, Битрикс24, Pipedrive), системами аналитики (Google Analytics, Яндекс.Метрика), сервисами email-маркетинга. Настраиваем отслеживание целей, автоматическую передачу лидов, создаем воронки продаж. Получите полный контроль над эффективностью сайта.'
        }
    };

    // Функции для управления модальным окном
    function openServiceModal(serviceType) {
        console.log('🚀 Функция openServiceModal вызвана для:', serviceType);
        
        const serviceData = servicesData[serviceType];
        if (!serviceData) {
            console.error('❌ Нет данных для сервиса:', serviceType);
            return;
        }

        console.log('📦 Данные сервиса:', serviceData);

        // Заполняем данные модального окна
        modalImage.src = serviceData.image;
        modalImage.alt = serviceData.title;
        modalTitle.textContent = serviceData.title;
        modalSubtitle.textContent = serviceData.subtitle;
        modalDescription.textContent = serviceData.description;

        console.log('🎭 Показываем модальное окно');

        // Показываем модальное окно с анимацией сборки из 6 частей
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
        
        // Запускаем анимацию сборки
        setTimeout(() => {
            modal.classList.add('active');
            console.log('✨ Анимация запущена, modal.classList:', modal.classList.toString());
        }, 10);
    }

    function closeServiceModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }, 600); // Время анимации разборки
    }

    // Обработчики событий
    orderGetItems.forEach((item, index) => {
        console.log(`➕ Добавляем обработчик клика для элемента ${index + 1}:`, item.getAttribute('data-service'));
        
        item.addEventListener('click', function(e) {
            console.log('🖱️ Клик по элементу:', this);
            console.log('📄 data-service:', this.getAttribute('data-service'));
            
            const serviceType = this.getAttribute('data-service');
            if (serviceType) {
                console.log('✅ Открываем модальное окно для:', serviceType);
                openServiceModal(serviceType);
            } else {
                console.error('❌ Не найден атрибут data-service');
            }
        });
    });

    // Закрытие модального окна
    modalClose.addEventListener('click', closeServiceModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeServiceModal();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeServiceModal();
        }
    });
});