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
└── contacts-block-guide.md    # Эта документация
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

## ⚙️ Настройка интеграций

### JavaScript настройки в `js/contacts.js`:

#### 1. Интеграция с Backend API:
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

#### 2. Интеграция с Telegram Bot:
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

## 🎨 Кастомизация стилей

### CSS переменные в `styles/contacts.css`:

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

### Изменение стилей кнопки:
```css
.contact-us__form-button {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    border-radius: 50px;
    text-transform: none;
}
```

## 📱 Адаптивность

- **Десктоп (>900px)**: Форма справа, анимация слева
- **Планшет (768-900px)**: Уменьшенные отступы 
- **Мобильный (<768px)**: Вертикальное расположение

## ✅ Готовый код для копирования

### HTML (полная структура):
```html
<section class="contacts" id="contacts">
    <div class="contact-animation">
        <spline-viewer url="https://prod.spline.design/V0GxWNtDBUJUU9u8/scene.splinecode"></spline-viewer>
    </div>
    
    <div class="contact-us">
        <div class="contact-us__top">
            <h2 class="contact-us__top-title">Давайте знакомиться</h2>
            <h2 class="contact-us__top-title--mobile">Свяжитесь с нами</h2>
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

### CSS (подключение):
```html
<link rel="stylesheet" href="styles/contacts.css">
```

### JavaScript (подключение):
```html
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
<script src="js/contacts.js"></script>
```

## 🔧 Быстрая настройка

1. **Скопируйте файлы:**
   - `templates/contacts-block.html`
   - `styles/contacts.css` 
   - `js/contacts.js`

2. **Подключите стили и скрипты**

3. **Настройте интеграцию с бэкендом** в `js/contacts.js`

4. **Кастомизируйте цвета** через CSS переменные

## 📋 Функциональность

### Валидация:
- ✅ Имя: минимум 2 символа
- ✅ Телефон: автоформатирование +7 (XXX) XXX-XX-XX  
- ✅ Бизнес: минимум 2 символа
- ✅ Задача: минимум 10 символов

### Уведомления:
- 🟢 Успешная отправка
- 🔴 Ошибки валидации
- ⏳ Состояние загрузки

### Анимации:
- 🎭 Появление элементов при загрузке
- 🎨 Hover эффекты
- 🔄 Smooth transitions

---

**Готово!** 🎉 Блок contacts готов к использованию в любом проекте! 