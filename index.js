const csvToJson = require('csvtojson');


const csv = csvToJson();
const fs = require('fs');
function csvToJSon(file) {
    csv.fromFile(file)
        .then(function (jsonObj) {
           fs.writeFile('json-data.json',JSON.stringify(jsonObj,null,2),function (error) {
               if(error) return process.exit(1);
               console.log('done');
           });
        });
}
csvToJSon(process.argv[2]);

