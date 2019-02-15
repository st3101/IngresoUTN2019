function Mostrar()
 {
	var nota = Math.floor(Math.random() * 10 + 1);

	if (nota > 8) {
		alet("EXCELENTE su nora es " + nota);
	}
	else if (nota > 3) {
		alert("APROBO su nota es " + nota);
	}
	else{alert("Vamos, la proxima se puede. Su nota es " + nota);}
}//FIN DE LA FUNCIÓN