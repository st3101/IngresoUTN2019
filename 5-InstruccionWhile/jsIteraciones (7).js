function Mostrar() {

	var i = 0;
	var acumulador = 0;
	var acumuladorC = 0;
	var respuesta = "s";

	while (respuesta == "s") {
		acumulador = parseInt(prompt("Ingrese un numero"));
		acumuladorC = acumuladorC + acumulador;
		i = i + 1;

		respuesta = prompt("Quiere continuar (s/n)");
	}

	document.getElementById('suma').value = acumuladorC;
	document.getElementById('promedio').value = acumuladorC / i;

}//FIN DE LA FUNCIÓN