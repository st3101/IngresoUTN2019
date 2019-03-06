//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar(){

var ancho = parseInt(document.getElementById("ancho").value);
var largo = parseInt(document.getElementById("largo").value);
var perimetro;
var alambre;

perimetro = (ancho + largo)*2;
alambre = perimetro * 6;
alert("Necesitas " + alambre + "m de alambre");
}

