import test, { expect, Page } from '@playwright/test';

class CartPage {
    readonly addProductButton = this.page.getByTestId('pdpAddToProduct');
    readonly pageLayoutTitle = this.page.getByTestId('page-layout-title');
    readonly regularCartList = this.page.getByTestId('regular-cart-list');
    readonly cartProductLink = this.page.getByRole('link', { name: 'Ploom X Advanced Black' }).first();
    readonly cartQuantity = this.regularCartList.getByTestId('cartQuantity');
    readonly paymentSummary = this.page.getByText('Payment SummarySubtotal£29.00Total £');
    readonly checkoutButton = this.page.getByTestId('loginCheckoutButton');

    constructor(readonly page: Page) {}

    async assertPageTitle() {
        await test.step('Assert that the page title is "Your Cart"', async () => {
            await expect(this.pageLayoutTitle).toContainText('Your Cart');
        });
    }

    async assertProductInCart() {
        await test.step('Assert that the product "Ploom X Advanced Black" is in the cart', async () => {
            await expect(this.regularCartList.getByRole('strong')).toContainText('Ploom X Advanced Black');
            await expect(this.cartProductLink).toBeVisible();
        });
    }

    async assertCartQuantity() {
        await test.step('Assert that the cart quantity is visible', async () => {
            await expect(this.cartQuantity).toBeVisible();
        });
    }

    async assertPaymentSummary() {
        await test.step('Assert that the payment summary is visible', async () => {
            await expect(this.paymentSummary).toBeVisible();
        });
    }

    async assertCheckoutButtonVisible() {
        await test.step('Assert that the checkout button is visible', async () => {
            await expect(this.checkoutButton).toBeVisible();
        });
    }

    async assertRegularCartList() {
        await test.step('Assert the entire regular cart list', async () => {
            await Promise.all([
                this.assertPageTitle(),
                this.assertProductInCart(),
                this.assertCartQuantity(),
                this.assertPaymentSummary(),
                this.assertCheckoutButtonVisible(),
            ]);
        });
    }
}

export default CartPage;