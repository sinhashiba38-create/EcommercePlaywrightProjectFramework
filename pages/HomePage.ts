import { Page, expect, Locator } from '@playwright/test';

export class HomePage {

    // locator
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly linkLogin: Locator;


    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.linkLogin = page.locator('a:has-text("Login")');
    }


    // Action Method
    async clickMyAccount() {
        await this.lnkMyAccount.click();
    }

    async clickRegister() {
        await this.lnkRegister.click();

    }

    async clickLogin() {
        await this.linkLogin.click();
    }

}