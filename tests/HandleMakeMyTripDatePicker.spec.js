import { test, expect } from '@playwright/test';

test('Handle MakeMyTrip Date picker',async({page}) =>{

await page.goto('https://www.makemytrip.com/', {
  waitUntil: 'commit',
  timeout: 60000
});

await page.locator("//label[@for='departure']").click() // click the departure date Calendar

const date="30"
const month="June 2027"
while(true)
{
 const months=await page.locator("//div[@class='DayPicker-Months']").textContent()
if(months==month){
    break;
}
await page.locator("//span[@aria-label='Next Month']").click()
await page.click(`//div[@class='dateInnerCell'][text()='${date}']`)
await page.waitForTimeout(50000)
}
    

});