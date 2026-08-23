import { Page, expect, Locator } from '@playwright/test';

export class RegistrationPage {

    // locator
    private readonly page: Page;
    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator ;
    private readonly txtEmail: Locator ;
    private readonly txtTelephone: Locator ;
    private readonly txtPassword: Locator ;
    private readonly chkdPolicy: Locator ;
    private readonly btnContinue: Locator ;
    private readonly msgConfirmation: Locator;


    // Constructor
    constructor(page: Page) {
        this.page = page;
        
        this.txtFirstname = page.locator('#input-firstname');
        this.txtLastname = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.chkdPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('#k_kapoor_developer_button');
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
    }


    // Action Method
    async setFirstName(firstName: string) {
        await this.txtFirstname.fill(firstName);
    }

    async setLastName(lastName: string) {
        await this.txtLastname.fill(lastName);
    }

    async setEmail(Email: string) {
        await this.txtEmail.fill(Email);
    }

    async setTelephone(telephone: string) {
        await this.txtTelephone.fill(telephone);
    }

    async setPassword(pswd : string) {
        await this.txtPassword.fill(pswd);
    }

    async setPrivacyPolicy() {
        await this.chkdPolicy.click();
    }

    async clickContinue() {
        await this.btnContinue.click();
    }

     async getConfirmationMsg() {
        return await this.msgConfirmation.textContent();
    }

    

}