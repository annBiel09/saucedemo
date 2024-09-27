import { test, expect } from '@playwright/test';
import { CommonPage } from '../utils/common-elements';
import { LoginPage } from '../pages/login-logout';
import { InventoryPage } from '../pages/inventory';
import { UsersConfig } from '../config/users';
import { URLs } from '../config/urls';

let commonPage: CommonPage;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let usersConfig: UsersConfig;
let user: any; 

test.describe('Basic functionalities', () => {
    test.beforeEach(async ({ page }) => {
        usersConfig = new UsersConfig();
        user = usersConfig.getUser('standard');
        commonPage = new CommonPage(page);
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await loginPage.login(user.username, user.password);
        await commonPage.verifyCurrentPage(URLs.inventory); 
    });

    test('Log in and verify the main page', async () => {
        await expect(inventoryPage.inventoryContainerLocator()).toBeVisible();
    });

    test('Logout and verify the elements', async () => {
        await loginPage.logout();
        await expect(loginPage.loginPanelLocator()).toBeVisible();
        await commonPage.verifyCurrentPage('');
    });
});