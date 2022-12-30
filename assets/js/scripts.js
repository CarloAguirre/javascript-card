
var precio = 400000;

document.querySelector("#precioString").innerHTML = `$${precio.toLocaleString()}`

var cantidad = document.querySelector("#cantidad");
var color = document.querySelector("#colorSelector");
var colorDiv= document.querySelector("#colorFinal");


function onClickHandler(){
    
    var totalPrecio = (cantidad.value * precio).toLocaleString();
    
    document.querySelector("#totalFinal").innerHTML = `$${totalPrecio}`;
    document.querySelector("#cantidadFinal").innerHTML = cantidad.value;

    colorDiv.style.backgroundColor = color.value

}
