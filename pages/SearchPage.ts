import { Page, expect, Locator } from '@playwright/test';

export class SearchPage {

    private readonly page: Page;
    private readonly searchBox: Locator;
    private readonly searchButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator("//input[@name='search']");
        this.searchButton = page.locator("(//button[@type='submit'])[1]");
    }


    async searchForProduct(productName: string) {
        await this.searchBox.fill(productName);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }


}