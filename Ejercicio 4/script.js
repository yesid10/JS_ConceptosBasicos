/*Ejercicio #4
Realizar el mismo programa del Ejercicio #2, pero ahora se debe pedir el dato inicial (grados centígrados) 
al usuario (teclear el dato).*/

let grados;
let faren;

grados = parseFloat (prompt("Grados centigrados a grados Fahrenheit \n Ingrese por favor la temperatura en °C "));
faren = (grados*1.8)+32
alert(`${grados}° Centigrados a ° Fahrenheit es ${faren}°F`);
