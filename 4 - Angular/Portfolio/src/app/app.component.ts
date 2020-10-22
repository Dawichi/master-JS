import { Component } from '@angular/core';
import { Configuration } from './models/conf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string
  public description: string
  public mostrar_videojuego: boolean = true

  constructor(){
    this.title = Configuration.title
    this.description = Configuration.info
  }

  ocultarVideojuego(value){
    this.mostrar_videojuego = value
  }
}
