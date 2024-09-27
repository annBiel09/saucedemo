import { Locator, Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    inventoryContainerLocator(): Locator {
        return this.page.locator('[data-test="inventory-container"]');
    }

    addToCartButtonLocator(): Locator {
        return this.page.locator('[data-test^="add-to-cart-sauce-labs"]');
    }

    cartIconLocator(): Locator {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    shoppingCartBadgeLocator(): Locator {
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    // Functions
    async clickAddToCartButton(): Promise<void> {
        await expect(this.addToCartButtonLocator()).toBeEnabled();
        await this.addToCartButtonLocator().first().click();
    }

    async clickCartIcon(): Promise<void> {
        await expect(this.cartIconLocator()).toBeEnabled();
        await this.cartIconLocator().click();
    }
}