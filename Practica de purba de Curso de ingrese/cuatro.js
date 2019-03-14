function mostrar()
{
    var n1 = prompt("Ingrese el primer numero");
    var n2 = prompt("Ingrese el segundo numero");
    var resultado;
    var flag = 0
    
    if(n1 == n2){
    resultado = n1 + n2;
    }
    else if(n1 > n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        resultado = n1 - n2;
        flag = 1
    }
    else{
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        resultado = n1 + n2;
       
    }
    if(resultado >= 10 && flag == 1){
        alert("la resta es " + resultado + " y supero el 10")
    }
    else{
        alert("El resultado es " + resultado);
    }
}
