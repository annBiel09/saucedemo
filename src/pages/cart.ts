import { Locator, Page, expect } from '@playwright/test';
import { URLs } from '../config/urls';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    itemContainerLocator(): Locator {
        return this.page.locator('[data-test="inventory-item"]');
    }

    continueShoppingButtonLocator(): Locator {
        return this.page.locator('[data-test="continue-shopping"]');
    }

    shoppingCartBadgeLocator(): Locator {
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    // Functions
    async verifyCartPageUrl(): Promise<void> {
        await expect(this.page).toHaveURL(URLs.cart);
    }

    async clickContinueShoppingButton(): Promise<void> {
        await expect(this.continueShoppingButtonLocator()).toBeEnabled();
        await this.continueShoppingButtonLocator().click();
    }

    // Methods
    async verifyShoppingCartBadgeCount(expectedCount: string): Promise<void> {
        const badgeLocator = this.shoppingCartBadgeLocator();
        await expect(badgeLocator).toBeVisible();
        await expect(badgeLocator).toHaveText(expectedCount);
    }
}