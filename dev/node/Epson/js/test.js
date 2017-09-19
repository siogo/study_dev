var fs = require('fs');
var PDFParser = require("pdf2json");

var pdfParser = new PDFParser(this, 1);
pdfParser.loadPDF("../pdftest.pdf");
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    data = pdfParser.getRawTextContent()
    fs.writeFile('../pdf.txt',data,function(err){
        console.log(err);
    })
});