import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import {NoticiasComponent} from './noticias/noticias.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  {
    path: "",
    component: NoticiasComponent
  },
  {
    path: "noticia/:id",
    component: NoticiaComponent,
  },

  {
    path: "servicio",
    component: ServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
