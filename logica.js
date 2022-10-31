//mostrar-btn//
//btn-resumen//

function mostrar()
{

    var precioticker = 200;
    var cantidad = document.getElementById("cantidad-input").value;
    var elegir = document.getElementById("elegir-select").value;
    var preciototal = cantidad * 200;
    var descuento =  ""
    const enseniar = document.getElementById("txtIdResultado").value;    

    switch (elegir) {
        case "1":
           descuento = preciototal - (preciototal * 80/100);
            document.getElementById("txtIdResultado").value = 'Total a pagar : $' + descuento;
            break;
    
        case "2":
            descuento = preciototal - (preciototal * 50/100);
            document.getElementById("txtIdResultado").value = 'Total a pagar : $' + descuento;
            break;
        case "3":
            descuento = preciototal - (preciototal * 15/100);
            document.getElementById("txtIdResultado").value = 'Total a pagar : $' + descuento;
            break;
    }
    
}
