import {test , expect} from '@playwright/test'


test( 'assesment' , async ({page})=>{

await page.goto('https://www.saucedemo.com/v1/')


let pageUrl = await page.title()        
console.log('Page Title :', pageUrl)


let pagetitle = await page.url()        
console.log('Page URL :', pagetitle)

await expect(page).toHaveTitle('Swag Labs')
await expect(page).toHaveURL('https://www.saucedemo.com/v1/')

const toyLogo = await page.locator('[class="bot_column"]')
await expect(toyLogo).toBeVisible();



await page.getByPlaceholder('Username').fill('problem_user')
await page.locator('[id="password"]').fill('secret_sauce')
await page.locator('[id="login-button"]').click()

// const dd = await page.$$('Price (low to high)')
// console.log(dd)

await page.locator('[class="product_sort_container"]').selectOption('Price (low to high)')

let productTitle = await page.$$('//div[@class="inventory_item"]//div[@class="inventory_item_label"]//a/div')

for (const element of productTitle) 
    {

    console.log(await element.textContent())
    
    }





























})