import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../services/zapatilla.service'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [
        ZapatillaService
    ]
})

export class ZapatillasComponent implements OnInit {

    public title: string
    public zapatillas: Array<Zapatilla>
    public marcas: String[]
    public color: string

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color = 'blue'
        this.marcas = new Array()
        this.title = 'Componente de zapatillas'
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas()
        alert(this._zapatillaService.getTexto())
        this.getMarcas()
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            this.marcas.push(zapatilla.brand)
            console.log(index)
        })
        console.log(this.marcas)
    }
} 