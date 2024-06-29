const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto("https://www.pccomponentes.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.waitForSelector("#cookiesAcceptAll", { timeout: 30000 });
   
    
    
    await page.waitForSelector("#modulo_ofertas_semana h3", { timeout: 12000 });
    await page.waitForSelector("#modulo_ofertas_semana a", { timeout: 12000 });
    

    await page.click("#cookiesAcceptAll", { delay: 100 }); 
     
  

    const products = await page.evaluate(() => {
      const productNodes = Array.from(
        document.querySelectorAll("#modulo_ofertas_semana h3")
      );
      const linkNodes = Array.from(
        document.querySelectorAll("#modulo_ofertas_semana a")
      );

      return productNodes.map((productNode, index) => ({
        Producto: productNode.textContent.trim(),
        Enlace: linkNodes[index].href,
      }));
    });
    

   
   
    console.log("Productos y enlaces:");
    products.forEach((product) => {
      console.log(`${product.Producto}: ${product.Enlace}`);
    });

    const csvHeader = "Producto y enlace\n";
    const csvRows = products
      .map((product) => `${product.Producto},${product.Enlace}`)
      .join("\n"); // Concatenamos los productos y enlaces con un salto de línea
    const csvContent = csvHeader + csvRows;

    fs.writeFileSync("scraperPccomponent.csv", csvContent);
    console.log("Datos guardados en scraperPccomponent.csv");
  } catch (error) {
    console.error("Error durante el scraping:", error);
  } finally {
    await browser.close();
    console.log("Navegador cerrado");
  }
})();
