import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
    styleUrls: ['./videojuego.component.css']
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public title: string
    public list: string

    constructor(){
        //console.log('Componente videojuego: cargado')
        this.title = 'Componente de Videojuego'
        this.list = 'Listado de los juegos más populares'
    }

    ngOnInit(){ // Primer método que se ejecuta al cargar el componente
        //console.log('OnInit ejecutado')
    }

    ngDoCheck(){ // Se ejecuta cuando hay un cambio en la aplicación con un cambio en el componente
        //console.log('DoCheck ejecutado')
    }

    ngOnDestroy(){ // Se ejecuta al destruir (ocultar) el componente
        //console.log('OnDestroy ejecutado')
    }
}
  