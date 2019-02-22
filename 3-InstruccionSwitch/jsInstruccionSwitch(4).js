function Mostrar() {
    //tomo el mes 
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {
        case "Febrero":
            alert("Tiene 28 dias");
            break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Ocutubre":
        case "Dicimbre":

            alert("Tiene 31 dias");
            break;

        default:
            alert("Tiene 30 dias");
            break;

    }





}//FIN DE LA FUNCIÓN