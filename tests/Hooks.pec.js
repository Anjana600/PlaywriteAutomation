import{test, expect} from '@playwright/test';
let page;
test.beforeAll(async ({browser})=> // if we use hooks then we can't use directly page fixture we have to create browser instance 
    {
page=await browser.newPage() // this page instance will be used in all the test cases
await page.goto('Https://www.foundit.in/')

test('Dashboard page', async()=>{

})

test('logout',async()=>{ 
    await page.locator('').click() // all test case will not intial page fixtue we are using page instance it called oops concept 
})


})