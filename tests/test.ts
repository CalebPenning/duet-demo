import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

test('index page has expected h1', async ({ page }: { page: Page }) => {
	await page.goto('/')
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit')
})

test('/help page has an h2', async ({ page }: { page: Page }) => {
	await page.goto('/help')
	expect(await page.textContent('h2')).toBe('Hello, I need help!')
})

test('/answer talks about love and being in love', async ({ page }: { page: Page }) => {
	await page.goto('/answer')
	expect(await page.textContent('h1')).toContain('love')
})
