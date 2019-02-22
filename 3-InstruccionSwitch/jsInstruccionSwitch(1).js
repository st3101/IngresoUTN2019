function Mostrar()
{
//tomo el mes
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio){
    case "Enero":
    alert("Que comience bien el año!!!");
    break;

    case "Marzo":
    alert("A clases!!!");
    break;

    case "Julio":
    alert("Se vienen las vacaciones!!!");
    break;

    case "Diciembre":
    alert("Felices fiestas!!!");
    break;

    default:
    alert("No programado ekisde");
    break;
}



}//FIN DE LA FUNCIÓN