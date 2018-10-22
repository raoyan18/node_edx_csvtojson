const csvToJson = require('csvtojson');


const csv = csvToJson();
function csvToJSon(file) {
    csv.fromFile(file)
        .then(function (jsonObj) {
            console.log(jsonObj);
        });
}
csvToJSon(process.argv[2]);

