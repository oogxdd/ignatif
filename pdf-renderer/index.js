const puppeteer = require('puppeteer')

async function generatePDF(url) {
  // Launch a new browser instance
  const browser = await puppeteer.launch({
    args: ['--font-render-hinting=none'],
  })

  // Open a new page in that browser
  const page = await browser.newPage()

  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
  )

  // Navigate to the desired URL
  await page.goto(url, {
    waitUntil: 'networkidle2', // Ensures that network connections are mostly settled
  })

  // Set some optional PDF options, if desired
  const pdfOptions = {
    path: `${name}.pdf`, // Change the path to include the name
    format: 'A4', // Paper format
    // printBackground: true, // Print background graphics
  }

  // await page.addStyleTag({
  //   content: '* { font-family: sans-serif !important }',
  // })
  // await page.addStyleTag({
  //   content: `* { font-family: -apple-system, BlinkMacSystemFont, 'blinkmacsystemfont', sans-serif}`,
  // })

  // Generate the PDF
  await page.pdf(pdfOptions)

  // Close the browser
  await browser.close()

  console.log('PDF generated successfully!')
}

const args = process.argv.slice(2)
const nameArg = args.find((arg) => arg.startsWith('--name='))
const name = nameArg ? nameArg.split('=')[1] : 'maxim_ignatev'

// Use the function
generatePDF('http://localhost:3000').catch(console.error)
