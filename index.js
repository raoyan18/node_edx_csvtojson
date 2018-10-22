const csvToJson = require('csvtojson');
const filePath = 'customer-data.csv';

const csv = csvToJson();
csv.fromFile(filePath)
    .then(function (jsonObj) {
        console.log(jsonObj);
    });