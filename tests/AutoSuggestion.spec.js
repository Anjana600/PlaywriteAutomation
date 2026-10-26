import{test,expect} from'@playwright/test';
test('Autosuggestion',async({page}) =>{

    await page.goto('https://www.redbus.in/')
    await page.locator('#srcinput').fill('Bangalore')
    //await page.waitForSelector("//div[@role='listbox']//span)")
    //this will return all the suggestion in redbus 
    await page.waitForSelector("//div[@class=' leftListCont___9ce83f']//div")
   const FromcityOption=await page.$$("//div[@class=' leftListCont___9ce83f']//div")
   
   for(let option of FromcityOption)
    {
        console.log(await option.textContent())
        const value=await option.textContent()
        console.log(value)
        if(value.includes('Hyderabad')) // it is select some value from auto suggestion 
        {
            await option.click()
            break;
        }
   }
  // await expect(page.locator('#srcinput')).toHaveValue('Hyderabad')
   await page.waitForTimeout(5000)


})