function mostrar() {
    var n1 = parseInt(prompt("Ingrese el primer numero "));
    var n2 = parseInt(prompt("Ingrese el segundo numero"));
    var resultado

    if (n1 == n2) {
      
      n1 = string(n1);
      n2 = string(n2);
    
        resultado = n1n2;
    }
    else if (n1 > n2) {
        resultado = n1 - n2;
    }
    else {
        resultado = n1 + n2;
    }

    if (resultado < 10) {
        alert(resultado);
    }
    else { alert("El resultado es " + resultado + " y supero el 10"); }
}
