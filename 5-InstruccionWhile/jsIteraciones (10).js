function Mostrar() {

	var llave;

	var acumuladorNeg = 0;
	var canNeg = 0;

	var acumuladorPos = 0;
	var canPos = 0;

	var can0 = 0;



	do {
		numero = parseInt(prompt("ingrese un numero"));

		if (numero >= -1) {
			acumuladorNeg = acumuladorNeg + numero;
			canNeg = canNeg + 1;
		}
		else if (numero <= 1) {
			acumuladorPos = acumuladorPos + numero;
			canPos = canPos + 1
		}
		else {
			can0 = can0 + 1;
		}




		llave = prompt("Quiere continuar (S/N)").toLowerCase();
	} while (llave == "s")

	alert(acumuladorNeg)






}//FIN DE LA FUNCIÓN