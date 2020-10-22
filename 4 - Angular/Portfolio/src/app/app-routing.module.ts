import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component'
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { ExternalComponent } from './external/external.component'
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, // Cuando la URL está vacía
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'external', component: ExternalComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent} // Cuando se busca una URL que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
