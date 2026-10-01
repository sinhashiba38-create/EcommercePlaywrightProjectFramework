import { Page, expect, Locator } from '@playwright/test';


export class AddToCart {

    private page: Page;
    private readonly macBook: Locator;
    private readonly macbookAir: Locator;
    private readonly macbookPro: Locator;




    constructor(page: Page) {
        this.page = page;
        this.macBook = page.locator("(//button[@type='submit'])[2]");
        this.macbookAir = page.locator("(//button[@type='submit'])[6]");
        this.macbookPro = page.locator("(//button[@type='submit'])[10]");
    }


    async MacbookAddToCart() {
        await this.macBook.click();
    }

    async MacbookAirAddToCart() {
        await this.macbookAir.click();
    }

    async MacbookProAddToCart() {
        await this.macbookPro.click();
    }

}