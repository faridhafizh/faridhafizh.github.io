from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('file:///app/index.html')

    # Take screenshot of hero section
    page.screenshot(path='hero_verification.png', full_page=False)

    # Scroll down to cards section and take screenshot
    page.evaluate('window.scrollTo(0, 1000)')
    page.wait_for_timeout(1000) # Wait for scroll animations
    page.screenshot(path='cards_verification.png', full_page=False)

    browser.close()
