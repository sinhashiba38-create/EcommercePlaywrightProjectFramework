import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {

    // locator
    private readonly page: Page;
    private readonly emailid: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;


    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.emailid = page.locator("//input[@id='input-email']");
        this.password = page.locator("//input[@id='input-password']");
        this.loginBtn = page.locator("//button[@id='login_button_kapoor1']")
    }


    // Action Method
    async setuserName(userName: string) {
        await this.emailid.fill(userName);
    }

    async setPassword(pswd:string) {
        await this.password.fill(pswd);

    }

    async clickloginBtn(){
        await this.loginBtn.click();
    }

}