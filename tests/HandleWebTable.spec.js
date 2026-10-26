import{test,expect} from'@playwright/test';
test('HandleWebTable',async({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table= await page.locator('#productTable') // capture whole table 

const coloumns=await page.locator('thead tr th')
console.log('total number of coloumns is:,' + await coloumns.count())
const rows=await page.locator('tbody tr td')
console.log('total number of rows is:,'+ await rows.count())

//select checkbox for multiple products from the table


await selectProduct(rows,page,'Smartphone')
await selectProduct(rows,page,'Laptop')

async function selectProduct(rows,page,name)
{
    const matchedrows=rows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await matchedrows.locator('input').check()
}
//read the data from all the pages of the table and print the data in console
//count the number of pages in the table
const pages=await page.locator('.pagination li a')

console.log('total nuber of pages in the table is:,' + await pages.count())

//repeatation of number page 
for(let p=0;p<await pages.count();p++)
{
    if(p>0)
    {
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count();i++)
     {
        const row=rows.nth(i)
        const tds=row.locator('td') // this the speccfis row coloumn data 

        for(let j=0;j<await tds.count()-1;j++)
            {
              console.log( 'number of data:,'+ await tds.nth(j).textContent())
        }
    }
}
await page.waitForTimeout(3000)

})