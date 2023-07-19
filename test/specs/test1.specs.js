describe('Demo Test', function () {

    it('my first test', async()=> {

            browser.url('https://google.com')

            await $('[name="q"]').setValue("apple")

          // await $('[name="btnK"]').click

            browser.keys('Enter')

            browser.pause(10000) 
    })
})