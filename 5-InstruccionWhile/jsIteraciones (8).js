function Mostrar() {
	var numero;
	var numeroS = 0;
	var numeroT = 1;
	var llave;
	var flag = 0;

	do {
		numero = parseInt(prompt("ingrese un numero"));

		if (numero > 0) {
			numeroS = numeroS + numero
		}
		else {
			numeroT = numeroT * numero
			flag = 1
		}
		llave = prompt("Quiere contiuar (s/n)").toLowerCase();
	} while (llave == "s");

	document.getElementById('suma').value = numeroS;

	if (flag == 0) {
		numeroT = 0
	}
	document.getElementById('producto').value = numeroT;

}//FIN DE LA FUNCIÓN