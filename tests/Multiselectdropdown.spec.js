import{test,expect} from'@playwright/test';
test('Multiselect dropdown',async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').click()
  const options=  await page.$$('#country option') // it will return all the country option webElements in the form of array

  for(const option of options)
    {
        console.log(await option.textContent()) // it will print all the country names in the if weblement  form of string format
        const optiontext=await option.textContent() 
        if(optiontext.trim()==='France')
        {
            await page.selectOption("#country",optiontext)// it will select the country from the dropdown s
            break;
        }
        
  }
  await page.waitForTimeout(5000)

const selectedColors=await page.selectOption('#colors',['Blue','Green','Yellow']) // it will select multiple option from the dropdown)
console.log(selectedColors)
const option1=await page.$$('#colors option')
console.log("number of dropdown is:" + option1.length)
await expect(option1).toBe(7)
await page.waitForTimeout(5000)
});