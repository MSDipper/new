# Блок Contacts - Руководство по использованию

## 📋 Описание

Современный блок контактов с интерактивной формой, валидацией полей, анимациями и полной адаптивностью. Включает интеграцию с 3D анимациями Spline, продвинутую валидацию форм и красивые уведомления.

## 🚀 Возможности

### ✨ Основные функции:
- ✅ Валидация форм в реальном времени
- ✅ Автоформатирование номера телефона
- ✅ Красивые анимации и переходы
- ✅ Уведомления об успешной отправке/ошибках
- ✅ Полная адаптивность (мобильные, планшеты, десктоп)
- ✅ Интеграция с 3D анимациями Spline
- ✅ Поддержка темной темы
- ✅ Доступность (accessibility)

### 🎨 Стили:
- Градиентные фоны и кнопки
- Плавные анимации при загрузке
- Визуальная обратная связь для полей
- Эффекты hover и focus
- Индикаторы валидации

## 📁 Структура файлов

```
├── templates/
│   └── contacts-block.html     # HTML шаблон
├── styles/
│   └── contacts.css           # CSS стили
├── js/
│   └── contacts.js            # JavaScript логика
└── docs/
    └── contacts-block-guide.md # Эта документация
```

## 🛠 Установка и использование

### 1. Базовая установка

#### Подключите необходимые файлы:

```html
<!-- В <head> -->
<link rel="stylesheet" href="path/to/styles/contacts.css">

<!-- Перед закрывающим </body> -->
<script src="path/to/js/contacts.js"></script>
```

#### Для Spline анимации:
```html
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
```

### 2. HTML структура

```html
<section class="contacts" id="contacts">
    <!-- Левая часть с анимацией -->
    <div class="contact-animation">
        <spline-viewer url="YOUR_SPLINE_URL"></spline-viewer>
    </div>

    <!-- Правая часть с формой -->
    <div class="contact-us">
        <div class="contact-us__top">
            <h2 class="contact-us__top-title">Давайте знакомиться</h2>
        </div>

        <form class="contact-us__form" id="contactForm">
            <input class="contact-us__form-input" type="text" name="name" placeholder="Имя" required>
            <input class="contact-us__form-input" type="tel" name="phone" placeholder="Номер телефона" required>
            <input class="contact-us__form-input" type="text" name="business" placeholder="Вид бизнеса">
            <textarea class="contact-us__form-textarea" name="task" placeholder="Опишите задачу" required></textarea>
            <button class="contact-us__form-button" type="submit">Отправить</button>
        </form>
    </div>
</section>
```

## ⚙️ Настройка и конфигурация

### JavaScript настройки

В файле `js/contacts.js` можно настроить:

#### Интеграция с Backend API:
```javascript
async function submitForm(formData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    
    return await response.json();
}
```

#### Интеграция с Telegram Bot:
```javascript
const telegramBotToken = 'YOUR_BOT_TOKEN';
const chatId = 'YOUR_CHAT_ID';
const message = `Новая заявка:\nИмя: ${formData.name}\nТелефон: ${formData.phone}`;

const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
});
```

### CSS переменные

Основные цвета можно настроить через CSS переменные:

```css
:root {
    --primary: #4a90e2;        /* Основной цвет */
    --night: #2c3e50;          /* Темный цвет */
    --white: #ffffff;          /* Белый */
    --grey: #e1e5e9;           /* Серый */
    --font-regular: 'Arial';   /* Основной шрифт */
    --family-third: 'Georgia'; /* Шрифт заголовков */
}
```

## 🎛 Варианты использования

### 1. С 3D анимацией Spline (по умолчанию)
```html
<div class="contact-animation">
    <spline-viewer url="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"></spline-viewer>
</div>
```

### 2. С обычным изображением
```html
<div class="contact-animation">
    <div class="contact-image">
        <img src="path/to/contact-bg.jpg" alt="Свяжитесь с нами">
    </div>
</div>
```

### 3. С CSS анимацией
```html
<div class="contact-animation">
    <div class="contact-css-animation">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
    </div>
</div>
```

## 📱 Адаптивность

Блок автоматически адаптируется под разные размеры экранов:

- **Десктоп (>900px)**: Форма справа, анимация слева
- **Планшет (768-900px)**: Уменьшенные отступы и размеры
- **Мобильный (<768px)**: Вертикальное расположение, форма сверху

## 🔧 Кастомизация

### Изменение стилей полей
```css
.contact-us__form-input,
.contact-us__form-textarea {
    border-radius: 8px;        /* Скругление углов */
    border: 2px solid #ddd;    /* Видимая граница */
    padding: 15px;             /* Отступы */
}
```

### Изменение стилей кнопки
```css
.contact-us__form-button {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    border-radius: 50px;
    text-transform: none;
    letter-spacing: normal;
}
```

### Кастомные уведомления
```javascript
function showNotification(message, type = 'success') {
    // Ваша логика для показа уведомлений
    // Можно интегрировать с Toast библиотеками
}
```

## 🚨 Обработка ошибок

Форма автоматически валидирует:

- **Имя**: минимум 2 символа
- **Телефон**: корректный формат номера
- **Бизнес**: минимум 2 символа
- **Задача**: минимум 10 символов

Визуальные индикаторы:
- ✅ Зеленая галочка для валидных полей
- ❌ Красный крестик для невалидных полей
- 🔴 Красная подсветка границ при ошибках

## 🔗 Интеграции

### 1. EmailJS
```javascript
emailjs.send('service_id', 'template_id', formData)
    .then(() => ({ success: true, message: 'Письмо отправлено!' }))
    .catch(() => ({ success: false, message: 'Ошибка отправки' }));
```

### 2. Netlify Forms
```html
<form class="contact-us__form" netlify>
    <!-- Поля формы -->
</form>
```

### 3. Formspree
```html
<form class="contact-us__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Поля формы -->
</form>
```

## 💡 Советы по оптимизации

1. **Загрузка Spline**: Добавьте loading spinner для медленных соединений
2. **Кеширование**: Используйте Service Workers для кеширования ресурсов
3. **Lazy loading**: Загружайте Spline анимацию только при необходимости
4. **Минификация**: Сжимайте CSS и JS файлы для продакшена

## 🐛 Отладка

### Включение логов в консоль:
```javascript
// В начале js/contacts.js добавьте:
const DEBUG = true;

// Логи будут отображаться в консоли браузера
console.log('🔍 Инициализация формы контактов');
```

### Тестирование формы:
1. Откройте DevTools (F12)
2. Перейдите на вкладку Console
3. Заполните форму и отправьте
4. Проверьте логи в консоли

## 📋 Чек-лист внедрения

- [ ] Подключены все CSS и JS файлы
- [ ] Настроена интеграция с backend/сервисом отправки
- [ ] Проверена работа на мобильных устройствах
- [ ] Настроены уведомления об успехе/ошибке
- [ ] Добавлена 3D анимация или изображение
- [ ] Протестирована валидация всех полей
- [ ] Настроены CSS переменные под дизайн проекта

## 🆘 Поддержка

При возникновении проблем:

1. Проверьте консоль браузера на ошибки
2. Убедитесь в правильности путей к файлам
3. Проверьте подключение всех зависимостей
4. Убедитесь в корректности CSS переменных

---

**Готово!** 🎉 Ваш блок контактов готов к использованию! 