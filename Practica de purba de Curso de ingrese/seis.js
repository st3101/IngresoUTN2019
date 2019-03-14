function mostrar()
{
var hora = parseInt(prompt("Ingrese la hora"));

switch(hora){
    case 6:
    case 7:
    case 8:
    case 9: 
    case 10: 
    case 11:
    document.getElementById("laHora").value = "es de mañama";
    break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16: 
    case 17:
    case 18: 
    case 19:
    document.getElementById("laHora").value = "Es de tarde";
    break;

    case 20: 
    case 21:
    case 22:
    case 23:
    case 24:
    document.getElementById("laHora").value = "Es de noche";
    if(hora >= 20 || hora <= 24){
        alert("A dormmir");
    }
    break;

    default:
    document.getElementById("laHora").value ="Ingrese una hora valida";
    break;
}

}
