const moment = require("moment");

let febrero = "1997-02-08";
// 1. Mostrar fecha mes(nombre del mes) dia año
// 2. Mostrar dia de la semana
// 3. Numero de años actual
// 4. Qué fecha será en 258 días (dia-mes-año)
// 5. Qué fecha será en 4 semanas (dia-mes-año)

console.log( "1. ", moment( febrero ).format("MMMM Do YYYY") );
console.log( "2. ", moment( febrero ).format( "dddd" ) );