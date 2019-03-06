//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var dato = parseInt(document.getElementById("lado").value);
    var perimetro;

    perimetro = dato * 3;

    alert("El perimetro es " + perimetro);
}

