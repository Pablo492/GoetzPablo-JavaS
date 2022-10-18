//Introduccion a la pagina
alert("Bienvenidos a Multimarca Accesorios")

let nombre = prompt ("Ingrese su Nombre o presione 'f' para finalizar")
while(nombre != "f"|"F"){
    alert("Hola"+nombre);
}


function correr(){
    let marca = prompt("Por favor ingrese la marca de su automovil: Honda, Ford, Chevrolet, Isuzu o Peugeot");
    let modelo = prompt("Ahora ingrese modelo/año");
    let vehiculo = prompt("¿Que vehiculo posee?: Auto, Camioneta o Camion, ingrese una opcion");
        
//Verificamos que ingrese una marca valida de nuestro comercio//
if(marca === "Honda"|"Ford"|"Chevrolet"|"Peugeot"|"Isuzu"){
    console.log("Vendemos esa marca");
}else{
    alert("No trabajamos la marca ingresada");
}} 



//Bucle o Ciclo    "for (i=1; i<10; i++)"
let producto = prompt("Ingrese producto o la tecla 'F' para finalizar");
//le damos permiso que ingrese productos hasta ingresar "F" fin.
while(producto != "F"|"f"){
    alert("Se ingreso"+ producto);
    for (producto=1; producto!= "f"|"F"; producto++)
    prompt("Ingresar otro producto o 'f' para finalizar");
    var newArray = pedido [producto];
};





//Precios  (FOR)

let cantidad = parseInt(prompt("Ingrese cantidad de productos"));
for ( cantidad =1; cantidad > 0; cantidad++) {
    let precio = $100;
    let total = (cantidad * precio);
    alert ("El total a pagar es" = total);
};


//calculo de envio a pagar segun cantidad comprada
var precioTransporteAPagar;

if (numProductos <= 2){
precioTransporteAPagar = precioTransporte[0];
}
else if (numProductos <= 3){
precioTransporteAPagar = precioTransporte[1];
}
else if (numProductos <= 4){
precioTransporteAPagar = precioTransporte[2];
}
else if (numProductos >= 5){
precioTransporteAPagar = precioTransporte[3];
}


