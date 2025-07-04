// Обработка формы контактов
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Инициализация формы контактов');
    
    const contactForm = document.querySelector('.contact-us__form');
    const nameInput = document.querySelector('.contact-us__form-input[placeholder="Имя"]');
    const phoneInput = document.querySelector('.contact-us__form-input[placeholder="Номер телефона"]');
    const businessInput = document.querySelector('.contact-us__form-input[placeholder="Вид бизнеса"]');
    const taskTextarea = document.querySelector('.contact-us__form-textarea');
    const submitButton = document.querySelector('.contact-us__form-button');
    
    console.log('📋 Найденные элементы формы:', {
        contactForm: !!contactForm,
        nameInput: !!nameInput,
        phoneInput: !!phoneInput,
        businessInput: !!businessInput,
        taskTextarea: !!taskTextarea,
        submitButton: !!submitButton
    });

    if (!contactForm) {
        console.error('❌ Форма контактов не найдена');
        return;
    }

    // Валидация полей
    function validateField(field, minLength = 2) {
        const value = field.value.trim();
        const isValid = value.length >= minLength;
        
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('error');
        }
        
        return isValid;
    }

    // Валидация телефона
    function validatePhone(phoneField) {
        const phoneValue = phoneField.value.trim();
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const isValid = phoneRegex.test(phoneValue.replace(/[\s\-\(\)]/g, ''));
        
        if (isValid) {
            phoneField.classList.remove('error');
            phoneField.classList.add('valid');
        } else {
            phoneField.classList.remove('valid');
            phoneField.classList.add('error');
        }
        
        return isValid;
    }

    // Валидация email (если нужно)
    function validateEmail(emailField) {
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailValue);
        
        if (isValid) {
            emailField.classList.remove('error');
            emailField.classList.add('valid');
        } else {
            emailField.classList.remove('valid');
            emailField.classList.add('error');
        }
        
        return isValid;
    }

    // Форматирование номера телефона
    function formatPhoneNumber(phoneInput) {
        let value = phoneInput.value.replace(/\D/g, '');
        
        if (value.startsWith('8')) {
            value = '7' + value.slice(1);
        }
        
        if (value.startsWith('7')) {
            value = value.replace(/^7(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2-$3-$4');
        }
        
        phoneInput.value = value;
    }

    // Обработчики событий для валидации в реальном времени
    if (nameInput) {
        nameInput.addEventListener('blur', () => validateField(nameInput));
        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('error')) {
                validateField(nameInput);
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            formatPhoneNumber(phoneInput);
            if (phoneInput.classList.contains('error')) {
                validatePhone(phoneInput);
            }
        });
        phoneInput.addEventListener('blur', () => validatePhone(phoneInput));
    }

    if (businessInput) {
        businessInput.addEventListener('blur', () => validateField(businessInput));
        businessInput.addEventListener('input', () => {
            if (businessInput.classList.contains('error')) {
                validateField(businessInput);
            }
        });
    }

    if (taskTextarea) {
        taskTextarea.addEventListener('blur', () => validateField(taskTextarea, 10));
        taskTextarea.addEventListener('input', () => {
            if (taskTextarea.classList.contains('error')) {
                validateField(taskTextarea, 10);
            }
        });
    }

    // Функция отправки формы
    async function submitForm(formData) {
        console.log('📤 Отправка формы с данными:', formData);
        
        // Здесь можно интегрировать с реальным API
        // Пример интеграции с различными сервисами:
        
        try {
            // Вариант 1: Отправка на собственный сервер
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });

            // Вариант 2: Интеграция с Telegram Bot
            // const telegramBotToken = 'YOUR_BOT_TOKEN';
            // const chatId = 'YOUR_CHAT_ID';
            // const message = `Новая заявка:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nБизнес: ${formData.business}\nЗадача: ${formData.task}`;
            
            // const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         chat_id: chatId,
            //         text: message
            //     })
            // });

            // Симуляция успешной отправки
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            return { success: true, message: 'Форма успешно отправлена!' };
            
        } catch (error) {
            console.error('❌ Ошибка отправки формы:', error);
            return { success: false, message: 'Произошла ошибка при отправке формы' };
        }
    }

    // Показ уведомлений
    function showNotification(message, type = 'success') {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = `form-notification form-notification--${type}`;
        notification.textContent = message;
        
        // Добавляем стили
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-family: var(--font-regular);
            font-size: 14px;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background-color: #4CAF50;' : 'background-color: #f44336;'}
        `;
        
        document.body.appendChild(notification);
        
        // Анимация появления
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Удаляем через 5 секунд
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Обработка отправки формы
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📋 Отправка формы контактов');
        
        // Валидация всех полей
        const isNameValid = nameInput ? validateField(nameInput) : true;
        const isPhoneValid = phoneInput ? validatePhone(phoneInput) : true;
        const isBusinessValid = businessInput ? validateField(businessInput) : true;
        const isTaskValid = taskTextarea ? validateField(taskTextarea, 10) : true;
        
        const isFormValid = isNameValid && isPhoneValid && isBusinessValid && isTaskValid;
        
        if (!isFormValid) {
            console.warn('⚠️ Форма содержит ошибки');
            showNotification('Пожалуйста, исправьте ошибки в форме', 'error');
            return;
        }
        
        // Блокируем кнопку на время отправки
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Отправляем...';
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        
        // Собираем данные формы
        const formData = {
            name: nameInput ? nameInput.value.trim() : '',
            phone: phoneInput ? phoneInput.value.trim() : '',
            business: businessInput ? businessInput.value.trim() : '',
            task: taskTextarea ? taskTextarea.value.trim() : '',
            timestamp: new Date().toISOString()
        };
        
        try {
            const result = await submitForm(formData);
            
            if (result.success) {
                console.log('✅ Форма успешно отправлена');
                showNotification(result.message, 'success');
                
                // Очищаем форму
                contactForm.reset();
                
                // Убираем классы валидации
                [nameInput, phoneInput, businessInput, taskTextarea].forEach(field => {
                    if (field) {
                        field.classList.remove('valid', 'error');
                    }
                });
                
            } else {
                console.error('❌ Ошибка отправки формы');
                showNotification(result.message, 'error');
            }
            
        } catch (error) {
            console.error('❌ Неожиданная ошибка:', error);
            showNotification('Произошла неожиданная ошибка', 'error');
        }
        
        // Восстанавливаем кнопку
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    });

    console.log('✅ Форма контактов инициализирована');
});

// Функция для интеграции с Spline анимацией
function handleSplineInteraction() {
    const splineViewer = document.querySelector('.contact-animation spline-viewer');
    const contactSection = document.querySelector('.contacts');
    
    if (!splineViewer || !contactSection) return;
    
    // Отключаем взаимодействие с анимацией при скролле формы
    const contactForm = document.querySelector('.contact-us__form');
    
    if (contactForm) {
        contactForm.addEventListener('scroll', () => {
            splineViewer.style.pointerEvents = 'none';
            
            clearTimeout(window.splineTimeout);
            window.splineTimeout = setTimeout(() => {
                splineViewer.style.pointerEvents = 'auto';
            }, 500);
        });
    }
}

// Инициализируем обработку Spline анимации
document.addEventListener('DOMContentLoaded', handleSplineInteraction); 