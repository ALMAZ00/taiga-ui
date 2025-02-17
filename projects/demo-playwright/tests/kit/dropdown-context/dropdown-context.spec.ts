import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DropdownContext', () => {
    test.use({viewport: {width: 1280, height: 900}});

    test.beforeEach(async ({page}) => tuiGoto(page, '/directives/dropdown-context'));

    test('opens dropdown on right click', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#context-menu');
        const tr = example.locator('tr');

        await tr.last().scrollIntoViewIfNeeded();
        await tr.last().click({button: 'right', position: {x: 0, y: 0}});
        await page.waitForTimeout(200);
        await expect(example).toHaveScreenshot('01-dropdown-context.png');
    });

    test('closes previous dropdown after new one is opened', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#context-menu');
        const tr = example.locator('tr');

        await tr.nth(1).scrollIntoViewIfNeeded();
        await tr.nth(1).click({button: 'right', position: {x: 0, y: 0}});
        await page.waitForTimeout(200);
        await expect(example).toHaveScreenshot('02-dropdown-context.png');
        await tr.nth(2).scrollIntoViewIfNeeded();
        await tr.nth(2).click({button: 'right', position: {x: 0, y: 0}});
        await page.waitForTimeout(200);
        await expect(example).toHaveScreenshot('03-dropdown-context.png');
    });

    test('does not close dropdown when nested dropdown is clicked', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#context-menu');
        const tr = example.locator('tr');

        await tr.nth(1).scrollIntoViewIfNeeded();
        await tr.nth(1).click({button: 'right', position: {x: 0, y: 0}});
        await page.locator('[tuiOption]').last().click();
        await page.waitForTimeout(200);
        await expect(example).toHaveScreenshot('04-dropdown-context.png');
        await page.locator('[tuiOption]').last().click();
        await page.waitForTimeout(200);
        await expect(example).toHaveScreenshot('05-dropdown-context.png');
    });
});
