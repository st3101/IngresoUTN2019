function Mostrar() {
	var acumuladorC = 0;
	var acumulador = 0;

	var acumuladorN = 0
	var acumuladorCN = 0

	var numero

	var respuesta = "s";

	while (respuesta == "s") {

		numero = prompt("Ingrese un numero");

		if (respuesta == "s" && numero >= 0) {

			acumuladorC = acumuladorC + acumulador;

		}
		else if (respuesta == "s" && numero < -1) {

           acumuladorCN = acumuladorCN * acumuladorN
		}
		respuesta = prompt("Quiere continuar (s/n)");
	}




	document.getElementById('suma').value = acumuladorC;
	document.getElementById('producto').value = acumuladorCN;

}//FIN DE LA FUNCIÓN