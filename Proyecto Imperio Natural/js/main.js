//Introduccion a la pagina
alert("Bienvenidos a la web de Imperio Natural")

let nombre = prompt ("Ingrese su Nombre o presione 'f' para finalizar")
while(nombre != "f"|"F"){
    alert("Hola"+nombre);
}


function correr(){
    let producto = prompt("Por favor ingrese producto que desea comprar: Banana, Manzana, Naranaja, Mandarina.");
    
//Verificamos que ingrese una marca valida de nuestro comercio//
if(producto === "Banana"|"Manzana"|"Naranja"|"Mandarina"){
    console.log("Vendemos ese producto");
}else{
    alert("No trabajamos ese producto");
}} 



//Bucle o Ciclo    "for (i=1; i<10; i++)"

//le damos permiso que ingrese productos hasta ingresar "F" fin, formando asi el Array "Pedido".
const pedido1 = [];

do{
    let entrada = prompt("Ingresar otro producto o 'f' para finalizar");
    pedido1.push(entrada.tuUpperCase());
    console.log(listaPedido1.length);
}
while(producto != "F"|"f"){
    alert("Se ingreso"+ producto);
    for (producto=1; producto!= "f"|"F"; producto++)
    prompt("Ingresar otro producto o 'f' para finalizar");
    var newArray = pedido1 [producto];
};

//Recorrer el array de productos

for (let index = 0; index<5; index++ ){
    alert(pedido1 [index]);
}

//Eliminar productos de la lista
const eliminar = let(prompt("Detalle producto a eliminar"= productox)); {
    //ubicar el producto que quiera eliminar en el listado(Array)
    let index = pedido1.indexOf(productox);
    if (index != -1) {
        pedido1.splice (index, "");
    }
}
eliminar(productox)


//Guardamos el Pedido en el storage


const enJSON = JSON.stringify(pedido1);

console.log (enJSON);
console.log (typeof pedido1);
console.log (typeof enJSON);

localStorage.setItem("pedido1", enJSON);


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


