var fs = require('fs');
var onFileload = function(err, file) {
    console.log("Got the file");
}
console.log("Going to get a file");
fs.readFile('readFileSync.js', onFileload);


console.log("App continues.....");