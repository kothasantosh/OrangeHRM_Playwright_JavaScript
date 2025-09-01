import { test, expect } from '@playwright/test';
import { createScreenshotsDir, getScreenshotPath } from './screenshot-util.js';
const timestamp = Date.now();

// Extended OrangeHRM login and navigation test with screenshots
test('Login and verify dashboard, then click tabs and take screenshots', async ({ page, browserName }) => {
const screenshotsDir = createScreenshotsDir('screenshots', browserName, timestamp);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'dashboard'), fullPage: true});

  // Click Admin tab and screenshot
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'admin', ), fullPage: false });

  // Click PIM tab and screenshot
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'pim', ), fullPage: false });

  // Click Leave tab and screenshot
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'leave', ), fullPage: false });

  // Click Time tab and screenshot
  await page.getByRole('link', { name: 'Time' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'time', ), fullPage: false });

  // Click My Info tab and screenshot
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'myinfo', ), fullPage: false });

  // Click Performance tab and screenshot
  await page.getByRole('link', { name: 'Performance' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: getScreenshotPath(screenshotsDir, 'performance', ), fullPage: false });
});
