import test, { Page } from '@playwright/test';

class ShopPage {
    readonly shopMenu = this.page.getByTestId('headerItem-0');
    readonly ploomAdvancedProduct = this.page.locator('div[data-sku="ploom-x-advanced"]');

    constructor(readonly page: Page) {}

    async clickOnShopMenu() {
        await test.step('Click on the "Shop" menu', async () => {
            await this.shopMenu.click();
        });
    }

    async selectPloomProduct() {
        await test.step('Select the "Ploom X Advanced" product from the product list', async () => {
            await this.ploomAdvancedProduct.click();
        });
    }
}

export default ShopPage;
