# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.js >> gmail user sees Access Denied when viewing yahoo user booking
- Location: tests\test.spec.js:17:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
  4  | const API_URL  = 'https://api.eventhub.rahulshettyacademy.com/api';
  5  | 
  6  | const YAHOO_USER = { email: 'Use your own credentials - 1', password: '' };
  7  | const GMAIL_USER = { email: 'Use your own credentials - 2', password: '' };
  8  | 
  9  | async function loginAs(page, user) {
  10 |   await page.goto(`${BASE_URL}/login`);
  11 |   await page.getByPlaceholder('you@email.com').fill(user.email);
  12 |   await page.getByLabel('Password').fill(user.password);
  13 |   await page.locator('#login-btn').click();
  14 |   await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  15 | }
  16 | 
  17 | test('gmail user sees Access Denied when viewing yahoo user booking', async ({ page, request }) => {
  18 | 
  19 |   // ── Step 1: Login as Yahoo user via API and get token ─────────────────────
  20 |   const loginRes = await request.post(`${API_URL}/auth/login`, {
  21 |     data: { email: YAHOO_USER.email, password: YAHOO_USER.password },
  22 |   });
> 23 |   expect(loginRes.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  24 |   const { token } = await loginRes.json();
  25 | 
  26 |   // ── Step 2: Fetch events via API to get a valid event ID ──────────────────
  27 |   const eventsRes = await request.get(`${API_URL}/events`, {
  28 |     headers: { Authorization: `Bearer ${token}` },
  29 |   });
  30 |   expect(eventsRes.ok()).toBeTruthy();
  31 |   const eventsData = await eventsRes.json();
  32 |   const eventId = eventsData.data[0].id;
  33 | 
  34 |   // ── Step 3: Create a booking via API as Yahoo user ────────────────────────
  35 |   const bookingRes = await request.post(`${API_URL}/bookings`, {
  36 |     headers: { Authorization: `Bearer ${token}` },
  37 |     data: {
  38 |       eventId,
  39 |       customerName:  'Yahoo User',
  40 |       customerEmail: YAHOO_USER.email,
  41 |       customerPhone: '9999999999',
  42 |       quantity:      1,
  43 |     },
  44 |   });
  45 |   expect(bookingRes.ok()).toBeTruthy();
  46 |   const yahooBookingId = (await bookingRes.json()).data.id;
  47 | 
  48 |   console.log(`Yahoo booking created via API. ID: ${yahooBookingId}`);
  49 | 
  50 |   // ── Step 4: Login as Gmail user via UI ────────────────────────────────────
  51 |   await loginAs(page, GMAIL_USER);
  52 | 
  53 |   // ── Step 5: Navigate directly to Yahoo's booking URL as Gmail user ────────
  54 |   await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });
  55 | 
  56 |   // ── Step 6: Validate Access Denied ───────────────────────────────────────
  57 |   await expect(page.getByText('Access Denied')).toBeVisible();
  58 |   await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
  59 | });
  60 | 
```