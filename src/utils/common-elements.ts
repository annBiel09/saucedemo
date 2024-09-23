import { Page, expect } from '@playwright/test';

export class CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Methods
    async verifyCurrentPage(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedUrl);
    }
}