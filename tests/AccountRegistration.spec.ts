import { test, Page, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';


let homePage: HomePage;
let config: TestConfig;
let registrationPage: RegistrationPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

})

test('User Registration', async ({page}) => {
   await homePage.clickMyAccount();  
   await homePage.clickRegister();

  // await registrationPage.setFirstName('Shivam');
  // await registrationPage.setLastName('Singh');
  // await registrationPage.setEmail('sst134@gmail.com');
  //await registrationPage.setTelephone('9876543210');
   //await registrationPage.setPassword('123456');
   
   // Set Random First Name and Last Name 
   await registrationPage.setFirstName(RandomDataUtil.getFirstName());
   await registrationPage.setLastName(RandomDataUtil.getlastName());
  await registrationPage.setEmail(RandomDataUtil.getEmail());
  await registrationPage.setTelephone(9852+RandomDataUtil.getPhoneNumber());
  await registrationPage.setPassword(RandomDataUtil.getPassword());
   
   await page.waitForTimeout(3000);
   await registrationPage.setPrivacyPolicy();
   await page.waitForTimeout(3000);
   await registrationPage.clickContinue();
   await page.waitForTimeout(3000);
   
   const confirmationMsg = await registrationPage.getConfirmationMsg();
   //console.log(confirmationMsg);
   expect(confirmationMsg).toContain('Your Account Has Been Created!')
   
});



