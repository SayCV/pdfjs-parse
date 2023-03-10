const Fs = require('fs');
const Pdf = require('./lib/pdf-parse.js');
const path = require('path');

module.exports = Pdf;

let isDebugMode = require.main === module;//!module.parent; 

//process.env.AUTO_KENT_DEBUG


//for testing purpose
if (isDebugMode) {

    let PDF_FILE = path.resolve(__dirname, './test/data/05-versions-space.pdf');
    let dataBuffer = Fs.readFileSync(PDF_FILE);
    Pdf(dataBuffer).then(function(data) {
        Fs.writeFileSync(`${PDF_FILE}.txt`, data.text, {
            encoding: 'utf8',
            flag: 'w'
        });
        debugger;
    }).catch(function(err) {
        debugger;
    });

}
