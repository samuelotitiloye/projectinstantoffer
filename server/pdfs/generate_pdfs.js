const hummus = require("hummus")
const fs = require('fs')
const listingCoords = require("./listing_coords.js")
const purchaseCoords = require("./purchase_coords.js")

const generatePDF = (file_name, type, answers, sig_path) => {

  const signed_pdfs_dir = __dirname + "/signed_pdfs/"
  if ( !fs.existsSync(signed_pdfs_dir) ) {
    fs.mkdirSync(signed_pdfs_dir);
  }
  var source_file = __dirname + "/original_pdfs"
  var coords = []
  if (type === "listing") {
    coords = listingCoords(answers)
    source_file += "/listing_contract.pdf"
  } else {
    coords = purchaseCoords(answers)
    source_file += "/purchase_agreement.pdf"
  }
  const destination_path = signed_pdfs_dir + file_name

  // create a pdf writer with path to pdf file
  var pdfWriter = hummus.createWriterToModify(
    source_file, {modifiedFilePath: destination_path, log: __dirname + "log.txt"}
  )

  // load the font you want to use
  const font = pdfWriter.getFontForFile(__dirname + "/fonts/Arial.ttf")

  for (i =0; i < coords.length; i++) {
    // for (i =0; i < 5; i++) {
    writeTextToPage(pdfWriter, i, coords[i], font, sig_path)
  }
  // close the pdfwriter
  pdfWriter.end();
}

// expect content to be an array of text and x, y coordinates
const writeTextToPage = (pdfWriter, page, content, font, sig_path) => {

  // PDFPageModifier takes a PDFWriter, the page number
  var pageModifier = new hummus.PDFPageModifier(pdfWriter, page, true);

  // get the context. you will use this to write as much as you need
  var pageContext = pageModifier.startContext().getContext()

  // data has text, x_coord, and y_coord keys
  // will remove red color and add logic to handle null after dropping coords
  content.map(data => {
    if (data.text === "sig_path") {
      console.log(sig_path)
      pageContext.drawImage(data.x_coord, data.y_coord, sig_path, { transformation: [.15, 0, 0, .15, 0, 0] })
    } else {
      if (data.text != null) {
      pageContext.writeText(data.text, data.x_coord, data.y_coord, { color: "red", font: font, size: 10 });
      }
    }
  })

  // // close the context and write the page
  pageModifier.endContext().writePage();
}

module.exports = generatePDF
