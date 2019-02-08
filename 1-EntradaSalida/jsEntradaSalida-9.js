/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{ 
var sueldo;
var aumento;
var nuevoSueldo

sueldo = document.getElementById("sueldo").value;
sueldo = parseFloat(sueldo);

aumento = (10 * sueldo / 100);

document.getElementById("resultado").value = aumento;

nuevoSueldo = aumento + sueldo

alert("Su nuevo suledo total es " + nuevoSueldo);
	
}
