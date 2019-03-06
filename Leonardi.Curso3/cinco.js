function mostrar()
{
    var continente = document.getElementById("Marca").value;
    var dias = parseInt(prompt("Ingrese los dias que quiere viajar"));
    var MetodoP = prompt("Ingrese el metodo de pago");
    var precio = 100;
    var precioDias
    

    switch (continente) {
case "América":
        precioDias = dias * 100;
        precioTotal = precioDias * 50 / 100;

        switch (MetodoP) {
            case "dévito":
            precioTotal = precioDias * 40 / 100;
            break;}
            }

    
    switch(continente){ 
        case "África":
        precioDias = dias * 100;
        precioTotal = precioDias * 40 / 100;

        switch (MetodoP) {
            case "mercadoPago":
            case "efectivo":
            precioTotal = precioDias * 25 / 100;
            break;
            }
            

            switch(continente){ 
        case "Europa":
        precioDias = dias * 100;
        precioTotal = precioDias * 80 / 100;

        switch (MetodoP) {
            case "dévito":
            precioTotal = precioDias * 65 / 100;

            case "mercadoPago":
            precioTotal = precioDias * 70 / 100;
            break;

        default: precioTotal * 20 / 100
        }



           











   
    }
    
alert(continente + " con " + dias + " dias, el precio es $" + precioTotal);  
}
