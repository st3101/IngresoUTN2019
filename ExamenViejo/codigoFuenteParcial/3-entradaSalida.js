//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var perimetro;
    var alambre;

    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 2;

    alert("se necesitan " + alambre + "m de alambre");





}

