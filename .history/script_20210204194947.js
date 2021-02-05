// Importar moment
var moment = require('moment'); // require

let ahora = moment().format();

console.log(ahora);

let febrero = moment( "2021-02-29" ).isValid();

console.log("");