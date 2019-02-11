/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var tempf;
var tempc;

    tempf = document.getElementById("Temperatura").value;
    tempf = parseInt(tempf);

tempc = (tempf - 32) * 5 / 9;

alert(tempf + " Fahrenheit son " + tempc + " grados Centígrados");
}

function CentigradosFahrenheit () 
{
var tempf;
var tempc;

    tempc = document.getElementById("Temperatura").value;
    tempc = parseInt(tempc);

tempf = (tempc * 9/5) + 32

alert(tempc + " Centígrados son " + tempf + " grados Fahrenheit");
}
