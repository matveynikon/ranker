const puppeteer = require('puppeteer');
var k = 1;
var z = 0;
var v = 2000;
var x = Math.floor(Math.random() * 6000 + 105000);
var j = 86400000 / (v) - x;
var l = x / 14000;
var k = 1;
console.log('dude');
async function start() {
  const url = 'https://www.youtube.com/watch?v=LUTVUGDOzOM';
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage();
  await page.goto(url);    
  await page.setViewport({ width: 1100, height: 700});
  let body = await page.evaluate(() => document.body.innerHTML);
  console.log(body);
  await page.close();
  console.log(url);  
  browser.close();
}
start();
