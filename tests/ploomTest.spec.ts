import { test } from './fixtures';

test('Ploom UK Shopping Cart Test', async ({ cartPage, landingPage, productPage, shopPage }) => {
    await test.step('Navigate to the landing page', async () => {
        await landingPage.navigate();
    });

    await test.step('Handle cookies consent and GDPR compliance', async () => {
        await landingPage.handleCookiesAndGdpr();
    });

    await test.step('Click on the "Shop" menu to view available products', async () => {
        await shopPage.clickOnShopMenu();
    });

    await test.step('Select a Ploom product from the product list', async () => {
        await shopPage.selectPloomProduct();
    });

    await test.step('Add the selected product to the cart', async () => {
        await productPage.addToCart();
    });

    await test.step('Assert that the mini cart displays the correct product', async () => {
        await productPage.assertMiniCart();
    });

    await test.step("Proceed to checkout by clicking on the mini cart's checkout button", async () => {
        await productPage.clickMiniCartCheckout();
    });

    await test.step('Assert that the regular cart page displays the correct product list', async () => {
        await cartPage.assertRegularCartList();
    });
});
