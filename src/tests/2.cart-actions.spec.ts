import { test, expect, Page } from '@playwright/test';
import { CommonPage } from '../utils/common-elements';
import { LoginPage } from '../pages/login';
import { UsersConfig } from '../config/users';
import { InventoryPage } from '../pages/inventory';
import { CartPage } from '../pages/cart';
import { URLs } from '../config/urls';

test.describe('Cart actions', () => {
    let page: Page;
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;
    let commonPage: CommonPage;
    const usersConfig = new UsersConfig(); 
    const user = usersConfig.getUser('standard'); 

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage; 
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        commonPage = new CommonPage(page);

        await loginPage.login(user.username, user.password);
        await commonPage.verifyCurrentPage(URLs.inventory); 
    });

    test('Add to cart and check content', async () => {
        await inventoryPage.clickCartIcon();
        
        await expect(cartPage.itemContainerLocator()).not.toBeVisible();

        await cartPage.clickContinueShoppingButton();

        await expect(inventoryPage.addToCartButtonLocator().first()).toBeVisible();
        
        await inventoryPage.addToCartButtonLocator().first().click(); 
        
        await cartPage.verifyShoppingCartBadgeCount('1');
        
        await inventoryPage.clickCartIcon();
        
        await commonPage.verifyCurrentPage(URLs.cart); 
        
        await expect(cartPage.itemContainerLocator()).toBeVisible();
    });
});