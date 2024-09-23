import { test, expect } from '@playwright/test';
import { CommonPage } from '../utils/common-elements';
import { LoginPage } from '../pages/login';
import { InventoryPage } from '../pages/inventory';
import { UsersConfig } from '../config/users';
import { URLs } from '../config/urls';

test('Log in and verify the main page', async ({ page }) => {
    const usersConfig = new UsersConfig();
    const user = usersConfig.getUser('standard');
    const commonPage = new CommonPage(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.login(user.username, user.password);
    await commonPage.verifyCurrentPage(URLs.inventory);
    await expect(inventoryPage.inventoryContainerLocator()).toBeVisible();
});