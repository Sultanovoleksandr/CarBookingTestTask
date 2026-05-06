# 🚗 Car Booking Automation (Booking.com)

Цей проєкт містить автоматизований UI-тест для сервісу оренди автомобілів на сайті **Booking.com**, реалізований за допомогою **Playwright** та **TypeScript**.

## 📋 Опис проєкту
Тест виконує основний сценарій пошуку доступних автомобілів:
*   Перехід на сторінку пошуку оренди авто.
*   Обробка банерів (cookies).
*   Введення місця отримання (Ню йорк).
*   Вибір дат (завтрашній день та +3 дні).
*   Перевірка наявності результатів пошуку.
*   Підрахунок та виведення кількості знайдених варіантів у консоль.

## 🛠 Технологічний стек
*   [Playwright](https://playwright.dev) — фреймворк для end-to-end тестування.
*   **TypeScript** — мова програмування.
*   **Node.js** — середовище виконання.

## 🚀 Встановлення та запуск

### 1. Клонування репозиторію
```bash
git clone https://github.com
cd CarBookingTestTask
```

### 2. Встановлення залежностей
```bash
npm install
```

### 3. Встановлення браузерів Playwright
```bash
npx playwright install
```

### 4. Запуск тестів
Ви можете запустити тест у різних режимах:

*   **Фоновий режим (Headless):**
    ```bash
    npx playwright test TestTaskAutomationCarRental.spec.ts
    ```
*   **Візуальний режим (Headed):**
    ```bash
    npx playwright test TestTaskAutomationCarRental.spec.ts --headed
    ```
*   **Режим налагодження (Debug):**
    ```bash
    npx playwright test TestTaskAutomationCarRental.spec.ts --debug
    ```

## 📊 Звіти про тестування
Після завершення тесту ви можете переглянути детальний HTML-звіт:
```bash
npx playwright show-report
```

---
**Автор**: [Sultanovoleksandr](https://github.com/Sultanovoleksandr)
