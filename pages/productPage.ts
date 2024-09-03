import test, { expect, Page } from '@playwright/test';

class ProductPage {
    readonly addProductButton = this.page.getByTestId('pdpAddToProduct');
    readonly miniCartCheckoutButton = this.page.getByTestId('miniCartCheckoutButton');
    readonly miniCartHeader = this.page.getByTestId('mini-cart-header');
    readonly miniCartProductLink = this.page.getByRole('link', { name: 'Ploom X Advanced Black' }).first();
    readonly miniCartList = this.page.getByTestId('mini-cart-list');
    readonly cartQuantity = this.page.getByTestId('cartQuantity');
    readonly cartRemoveButton = this.page.getByTestId('cartRemoveButton');

    constructor(readonly page: Page) {}

    async addToCart() {
        await test.step('Add the product to the cart by clicking the "Add to Cart" button', async () => {
            await this.addProductButton.click();
        });
    }

    async clickMiniCartCheckout() {
        await test.step('Click the "Checkout" button in the mini cart', async () => {
            await this.miniCartCheckoutButton.click();
        });
    }

    async assertMiniCart() {
        await test.step('Assert that the mini cart displays the correct product and details', async () => {
            await expect.poll(async () => this.miniCartHeader.textContent()).toContain('1 Item');
            await expect(this.miniCartProductLink).toBeVisible();
            await expect(this.miniCartList).toContainText('Ploom X Advanced Black');
            await expect(this.cartQuantity).toBeVisible();
            await expect(this.miniCartList).toContainText('£29.00');
            await expect(this.cartRemoveButton).toContainText('Remove Item');
            await expect(this.miniCartCheckoutButton).toBeVisible();
        });
    }
}

export default ProductPage;
