import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

test('index page has expected h1', async ({ page }: { page: Page }) => {
	await page.goto('/')
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit')
})
