const puppeteer = require("puppeteer");

(async () => {
    // Launch browser and go to page
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.winerack.com/products/red/?page=1");

    const grabtitle = await page.evaluate(() => {
        const title = document.querySelector(".title-text a");
        return title.innerHTML;
    })

    const grabtitles = await page.evaluate(() => {
        const titles = document.querySelectorAll(".title-text a");
        let titleList = [];
        titles.forEach((title) =>{
            titleList.push(title.innerText);
        })
        return titleList;
    })

    console.log(grabtitles);
    // close browser after
    await browser.close();
})();