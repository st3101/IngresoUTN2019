function Mostrar() {
    //tomo el mes 
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {
        case "Febrero":
            alert("Este mes no tiene más de 29 días");
            break;

        default:
            alert("Este mes tiene 30 o más días");
            break;
    }
    //alert (mesDelAño);




}//FIN DE LA FUNCIÓN