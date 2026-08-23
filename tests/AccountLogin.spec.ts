import { test, Page, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';


let homePage: HomePage;
let config: TestConfig;
let loginPage: LoginPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

})


test('User Registration', async ({ page }) => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    await loginPage.setuserName(config.email);
    page.waitForTimeout(2000);
    await loginPage.setPassword(config.password);
     page.waitForTimeout(2000);
    await loginPage.clickloginBtn();
    await page.waitForTimeout(2000);






});
