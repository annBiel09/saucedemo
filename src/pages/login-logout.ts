import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    loginPanelLocator(): Locator {
        return this.page.locator('[data-test="login-container"]');
    }

    usernameInputLocator(): Locator {
        return this.page.locator('[data-test="username"]');
    }

    passwordInputLocator(): Locator {
        return this.page.locator('[data-test="password"]');
    }

    loginButtonLocator(): Locator {
        return this.page.locator('[data-test="login-button"]');
    }

    logoutButtonLocator(): Locator {
        return this.page.locator('[data-test="logout-sidebar-link"]');
    } 

    openSideBarLocator(): Locator {
        return this.page.locator('[id="react-burger-menu-btn"]');
    }

    // Functions
    async fillUsername(username: string): Promise<void> {
        await expect(this.usernameInputLocator()).toBeVisible(); 
        await this.usernameInputLocator().fill(username); 
    }

    async fillPassword(password: string): Promise<void> {
        await expect(this.passwordInputLocator()).toBeVisible();
        await this.passwordInputLocator().fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await expect(this.loginButtonLocator()).toBeEnabled();
        await this.loginButtonLocator().click();
    }

    async openSideBar():Promise<void> {
        await expect(this.openSideBarLocator()).toBeEnabled();
        await this.openSideBarLocator().click();
    }

    async clickLogoutButton(): Promise<void> {
        await expect(this.logoutButtonLocator()).toBeEnabled();
        await this.logoutButtonLocator().click();
    } 

    // Methods
    async login(username: string, password: string): Promise<void> {
        await this.page.goto('');
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async logout(): Promise<void> {
        await this.openSideBar();
        await this.clickLogoutButton();
    }
}