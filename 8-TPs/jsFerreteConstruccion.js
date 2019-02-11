/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var alambre;
var perimetro; 

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;

largo = parseInt(largo);
ancho = parseInt(ancho);

perimetro = (largo + ancho) * 2;
alambre = perimetro * 3;

alert("Usted tiene que comprar " + alambre + "m de alambre" );
}
function Circulo () 
{
var alambre
var perimetro
var radio

radio = document.getElementById("Radio").value;
radio = parseInt(radio);

perimetro = Math.PI * radio * 2;
alambre = perimetro * 3;

alert("Necesito comprar " + alambre.toFixed(2) + "m de alambre")
}
function Materiales () 
{
var largo;
var ancho;
var cal
var cemento
var resultado

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho"). value;
largo = parseInt(largo);
ancho = parseInt(ancho);

resultado = ancho * largo;
cal = resultado * 3;
cemento = resultado * 2;

alert("se necesitan Una/s " + cemento + " bolsas de cemento" + " y una/s " + cal + " bolsas de cal");
}