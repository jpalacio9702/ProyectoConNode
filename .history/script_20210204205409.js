const moment = require("moment");

let febrero = "1997-02-08";
// 1. Mostrar fecha mes(nombre del mes) dia año
// 2. Mostrar dia de la semana
// 3. Numero de años actual
// 4. Qué fecha será en 258 días (dia-mes-año)
// 5. Qué fecha será en 4 semanas (dia-mes-año)

console.log( "1. ", moment( febrero ).format( "MMMM DD YYYY" ) );
console.log( "2. ", moment( febrero ).format( "dddd" ).lo );
console.log( "3. ", moment( febrero, "YYYYMMDD" ).fromNow());
console.log( "4. ", moment( febrero ).add( 258, 'days' ).format( "DD-MM-YYYY" ) );
console.log( "5. ", moment( febrero ).add( 4, 'weeks' ).format( "DD-MM-YYYY" ) );