function Mostrar() {
	var contador = 0;
	var maximo = 0;
	var minimo = 0;
	var numero
	var llave;
	do {
		numero = parseInt(prompt("Ingrese un numero"));

		if (contador == 0) {
			maximo = numero
			minimo = numero
			contador = 1
		}
		if (maximo < numero) {
			maximo = numero
		}
		if (minimo > numero) {
			minimo = numero
		}
		
		llave = prompt("Quiere continuar (S/N)").toLowerCase();
	} while (llave == "s")

	document.getElementById("maximo").value = maximo
	document.getElementById("minimo").value = minimo

}//FIN DE LA FUNCIÓN