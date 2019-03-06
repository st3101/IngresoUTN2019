//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var mes = prompt("Ingrese una mes");

    switch (mes) {
        case "enero":
        case "febrero":
            alert("Veranito");
break;
        default:
            alert("Extraño enero y febrero")
            break;
    }


}

