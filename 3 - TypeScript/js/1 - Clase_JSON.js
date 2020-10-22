/*
 *  POO en JS
 *
 *  Prototype: muy engorroso, no usar
 *  Actualmente se usa JSON, un ejemplo de una clase:
 * 
**/
var bicicleta = {
    color: 'red',
    modelo: 'BMX',
    frenos: 'disco',
    max_speed: '60Km/h',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        this.color = nuevo_color
    }
}

bicicleta.cambiaColor('green')

console.log(bicicleta.color)