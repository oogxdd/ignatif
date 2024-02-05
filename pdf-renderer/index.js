const puppeteer = require('puppeteer')

async function generatePDF(url) {
  // Launch a new browser instance
  const browser = await puppeteer.launch()

  // Open a new page in that browser
  const page = await browser.newPage()

  // Navigate to the desired URL
  await page.goto(url, {
    waitUntil: 'networkidle2', // Ensures that network connections are mostly settled
  })

  // Set some optional PDF options, if desired
  const pdfOptions = {
    path: 'maxim_ignatev_1.pdf', // Path to save the PDF
    format: 'A4', // Paper format
    printBackground: true, // Print background graphics
  }

  // Generate the PDF
  await page.pdf(pdfOptions)

  // Close the browser
  await browser.close()

  console.log('PDF generated successfully!')
}

// Use the function
generatePDF('http://localhost:3000').catch(console.error)
