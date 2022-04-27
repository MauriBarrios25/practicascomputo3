console.log("Ingresa la edad");
var edad = process.openStdin();


edad.addListener("data", function(edad) {
    console.log(comprobaredad(Number(edad))) + console.log(Number(edad));
});

function comprobaredad(edad) {


    if (edad >= 18) {
        console.log('Eres mayor de edad')
    } else {
        console.log('Eres menor de edad')


    }

}