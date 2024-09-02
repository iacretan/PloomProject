import test, { Page } from '@playwright/test';

class LandingPage {
    readonly gotItButton = this.page.locator('#onetrust-accept-btn-handler');
    readonly discoverMoreButton = this.page.locator('span').filter({ hasText: 'Yes, discover more' }).first();

    constructor(readonly page: Page) {}

    async navigate() {
        await test.step('Navigate to the landing page', async () => {
            await this.page.goto('/');
        });
    }

    async acceptCookies() {
        await test.step('Accept the cookies by clicking the "Got it" button', async () => {
            await this.gotItButton.click();
        });
    }

    async acceptAgeModel() {
        await test.step('Accept the age model by clicking the "Yes, discover more" button', async () => {
            await this.discoverMoreButton.click();
        });
    }

    async handleCookiesAndGdpr() {
        await test.step('Handle cookies and GDPR consent', async () => {
            await this.acceptCookies();
            await this.acceptAgeModel();
        });
    }
}

export default LandingPage;