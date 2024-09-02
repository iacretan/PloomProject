import { test as baseTest } from '@playwright/test';
import CartPage from '../pages/cartPage';
import LandingPage from '../pages/landingPage';
import ProductPage from '../pages/productPage';
import ShopPage from '../pages/shopPage';

// Extend the base test to include our POM instances
export const test = baseTest.extend<{
    cartPage: CartPage;
    landingPage: LandingPage;
    productPage: ProductPage;
    shopPage: ShopPage;
}>({
    cartPage: async ({ page }, use) => {
        await test.step('Initialize CartPage object', async () => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        });
    },
    landingPage: async ({ page }, use) => {
        await test.step('Initialize LandingPage object', async () => {
            const landingPage = new LandingPage(page);
            await use(landingPage);
        });
    },
    productPage: async ({ page }, use) => {
        await test.step('Initialize ProductPage object', async () => {
            const productPage = new ProductPage(page);
            await use(productPage);
        });
    },
    shopPage: async ({ page }, use) => {
        await test.step('Initialize ShopPage object', async () => {
            const shopPage = new ShopPage(page);
            await use(shopPage);
        });
    },
});

export { expect } from '@playwright/test';
