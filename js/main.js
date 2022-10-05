
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