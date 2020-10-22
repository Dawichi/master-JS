/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Programación Orientada a Objetos
 *  |
 *  |   1. Clases, 2. Propiedades y 3. Métodos
 *  |
 *  +---------------------------------------------------------------------------------+
**/

// Interface
interface CamisetaBase {
    setColor(color)
    getColor()
}

// Decorador
function estampar(logo: string){
    return function(target : Function){
        target.prototype.estampar = function():void{
            console.log('Camiseta estampada con el logo de ' + logo)
        }
    }
}







// 1. Clase: molde de un objeto
// NOTE: La clase debe llamarse igual que el fichero pero con mayúscula, en este ejemplo el fichero debería ser 'camiseta.ts'
class Camiseta implements CamisetaBase {
    // 2. Propiedades: características del objeto
    private color: string
    private marca: string
    private modelo: string
    private talla: string
    private precio: number

    constructor(color, marca, modelo, talla, precio){
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.talla = talla
        this.precio = precio
    }

    // Métodos, acciones del objeto
    public setColor(color){
        this.color = color
    }
    public getColor(){
        return this.color
    }
}


// Crear objetos a partir de la plantilla de la Clase
var camisa = new Camiseta('red', 'adidas', 'n12', 'L', '30')
var playera = new Camiseta('green', 'nike', 'h56', 'XS', '25')

// Utilizar los métodos creados
camisa.setColor('red')
playera.setColor('blue')

console.log(camisa.getColor(), playera.getColor())




/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Herencia
 *  |
 *  |   Extiende una clase anterior
 *  |
 *  +---------------------------------------------------------------------------------+
**/
class Sudadera extends Camiseta {
    // Característias añadidas
    public capucha: boolean

    setCapucha(capucha: boolean) {
        this.capucha = capucha
    }
    getCapucha(){
        return this.capucha
    }
}
