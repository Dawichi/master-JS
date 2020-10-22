export class Zapatilla {
    /*
    public brand: string
    public model: string
    public color: string
    public price: number
    public stock: boolean

    constructor(brand, model, color, price, stock){
        this.brand = brand
        this.model = model
        this.color = color
        this.price = price
        this.stock = stock
    }

    El código anterior sería correcto, pero puede simplificarse de la siguiente forma:
    */
   
    constructor(
        public brand: string,
        public model: string,
        public color: string,
        public price: number,
        public stock: boolean
    ){

    }
}