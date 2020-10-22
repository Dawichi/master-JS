import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {

    public zapatillas: Array<Zapatilla>

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok', 'A12', 'Rojo', 95, true),
            new Zapatilla('Nike', 'B23', 'Azul', 80, true),
            new Zapatilla('Adidas', 'P13', 'Blanco', 125, true),
            new Zapatilla('Zara', 'E83', 'Blanco', 60, false)
        ]
    }

    getTexto(){
        return 'Hola mundo desde un servicio'
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
}