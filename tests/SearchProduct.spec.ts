import { test, Page, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { SearchPage } from '../pages/SearchPage';



let homePage: HomePage;
let config: TestConfig;
let searchPage: SearchPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    searchPage = new SearchPage(page);
})

test('Search Product Name', async ({ page }) => {
    await searchPage.searchForProduct(config.productName);
    await searchPage.clickSearchButton(); 

});