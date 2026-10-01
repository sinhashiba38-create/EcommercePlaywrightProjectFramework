import { test, Page, expect, Locator } from '@playwright/test';
import { TestConfig } from '../test.config';
import { SearchPage } from '../pages/SearchPage';
import { AddToCart } from '../pages/addtoCartPage';


let config: TestConfig;
let searchPage: SearchPage;
let addToCart: AddToCart;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    searchPage = new SearchPage(page);
    addToCart = new AddToCart(page);
})


test('Add Macbook to Cart', async ({ page }) => {
    await searchPage.searchForProduct(config.productName);
    await page.waitForTimeout(1000);
    await searchPage.clickSearchButton();
    await page.waitForTimeout(1000);
    await addToCart.MacbookAddToCart();
    await page.waitForTimeout(2000);
    await addToCart.MacbookAirAddToCart();
    await page.waitForTimeout(2000);
    await addToCart.MacbookProAddToCart();
    await page.waitForTimeout(3000);
});