import { test, expect } from '@playwright/test';

test('Основний флоу пошуку оренди авто на Booking.com', async ({ page }) => {
  // 1. Відкриваємо головну сторінку оренди авто
 await page.goto('https://booking.com/cars/index.uk.html?');
  // Приймаємо куки, якщо з'являється банер (часто заважає клікам)
  const cookieBanner = page.locator('#onetrust-accept-btn-handler');
  if (await cookieBanner.isVisible()) {
    await cookieBanner.click();
  }
        
  const searchInput = page.getByPlaceholder('Аеропорт, місто або станція');
    await searchInput.fill('ню йорк');
  
  // Очікуємо випадаючий список та обираємо перший результат
   await page.getByRole('option', { name: 'Ню Йорк Ню Йорк, Ню Йорк, САЩ', exact: true }).click();

  // 3. Робота з календарем
  // Відкриваємо календар, якщо він не відкрився автоматично
await page.getByRole('button', { name: 'Оберіть дату отримання автомобіля' }).click();
  // Обираємо дату (наприклад, завтрашній день)
  // Примітка: селектори дат можуть змінюватися, використовуємо роль "button" з датою
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateString = tomorrow.toISOString().split('T')[0]; // ГГГГ-ММ-ДД

  await page.click(`[data-date="${dateString}"]`);
  
  // Обираємо дату повернення (через 3 дні)
  const returnDate = new Date();
  returnDate.setDate(tomorrow.getDate() + 3);
  const returnDateString = returnDate.toISOString().split('T')[0];
  
  await page.click(`[data-date="${returnDateString}"]`);

  // 4. Натискаємо кнопку пошуку
  await page.click('button[type="submit"]');

  await page.getByTestId('signin-modal-close').click();
  
// Перевірка результатів
const heading = page.getByRole('heading', { name: /Доступно/i });
await heading.waitFor({ state: 'visible', timeout: 30000 });
await expect(heading).toBeVisible();
const fullText = await heading.innerText();
//Виводимо в консоль
console.log("Результати пошуку:", fullText);

});