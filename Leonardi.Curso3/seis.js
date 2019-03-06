function mostrar()
{

    var hora = parseInt(prompt("Ingrese una hora"));

   switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("laHora").value = "Es de mañana";
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

        default:
        document.getElementById("laHora").value = "Es de noche";
            break;
    }
    }

    
