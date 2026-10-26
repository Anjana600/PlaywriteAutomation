import{test,expect} from'@playwright/test';

test.skip('AlertWindowHandle ok ',async({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/')

//enable the dialog handler

page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert') // it will check the which type of alert is present in the page
    expect (dialog.message()).toContain('I am an alert box!')
    await dialog.accept() //it will click on ok button in the alert window   

})

await page.click("//button[text()='Simple Alert']") 
await page.waitForTimeout(5000)
})
test.skip('AlertWindow with Cancel and OK',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')  
    // enable dialog handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm') // it will check the which type of alert is present in the page
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() //it will click on ok btton in the alert window
       // await dialog.dismiss() // it will click on cancel button in the alet windw 
    })
    await page.click("//button[text()='Confirmation Alert']")
    await page.waitForTimeout(3000)
})
test('Prompt dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //enable dialog handler
    page.on('dialog',async dialog=>{
        expect (dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
    await dialog.accept('Anjana')        
})
await page.click("//button[text()='Prompt Alert']")
await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Anjana! How are you today?')
await page.waitForTimeout(3000)

})
