/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;
var precio2;
var precio3;
var resultado

precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;

precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);

resultado = precio1 + precio2 + precio3;

alert("su suma es " + resultado);

}
function Promedio () 
{
var precio1;
var precio2;
var precio3;
var resultado

precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;

precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);    

resultado = (precio1 + precio2 + precio3) / 3;

alert ("su promedio es " + resultado.toFixed(2));
}

function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var resultado
var resultadoIVA
var ResultadoTotal

precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;

precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);    

resultado = precio1 + precio2 + precio3;
resultadoIVA = (precio1 + precio2 + precio3) * 21 /100;
ResultadoTotal = resultado + resultadoIVA;

alert("Su precio final más IVA es " + ResultadoTotal.toFixed(2));
}