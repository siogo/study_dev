var fs = require('fs');
var PDFParser = require("pdf2json");

const child_process = require('child_process');

// const child = child_process.execFile('node',['../index.js'],function(err,stdout,stderr){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(stdout);
//     }
// })

const child = child_process.execFile('ls',function(err,stdout,stderr){
    if(err){
        console.log(err);
    }else{
        setTimeout(function(){
            console.log(stdout);
        },5000)
        // console.log(stdout);
    }
})

var a = 'abddd';
console.log(`wo zhe shi ce shi: ${a}`);

// var pdfParser = new PDFParser(this, 1);
// pdfParser.loadPDF("../pdftest.pdf");
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
// pdfParser.on("pdfParser_dataReady", pdfData => {
//     data = pdfParser.getRawTextContent()
//     fs.writeFile('../pdf.txt',data,function(err){
//         console.log(err);
//     })
// });