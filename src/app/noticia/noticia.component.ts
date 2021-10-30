import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INoticia } from '../inoticia';
import { ICategoria } from '../icategoria';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})

export class NoticiaComponent implements OnInit {
  noticia : INoticia = {id: "0", autor: "", fechaPubli: new Date(), titulo: "", contenido: "wow texto texto texto", img: "mundo.jpg", categoria: "0"};

  categorias : Array<ICategoria> = [
    {id: "1", nombre: "Entretenimiento"},
    {id: "2", nombre: "Mundo"},
    {id: "3", nombre: "Deporte"},
    {id: "4", nombre: "Economia"},
    {id: "5", nombre: "Salud"},
    {id: "6", nombre: "Tecnologia"},
    {id: "7", nombre: "otra"},
    {id: "8", nombre: "otra2"},
    {id: "9", nombre: "otra3"}
  ];
  

  noticias : Array<INoticia> = [
    {id: "1", autor: "Axel", fechaPubli: new Date(), titulo: "El juego del Calamar se convierte en la seria numero uno en Netflix", contenido: "wow texto texto texto", img: "entretenimiento.jpg", categoria: "1"},
    {id: "2", autor: "Axel", fechaPubli: new Date(), titulo: "Murio el rinoceronte mas viejo", contenido: "wow texto texto texto", img: "mundo.jpg", categoria: "2"},
    {id: "3", autor: "Axel", fechaPubli: new Date(), titulo: "Ciclismo - El regreso de Chris Froome", contenido: "wow texto texto texto", img: "deporte.jpg", categoria: "3"},
    {id: "4", autor: "Axel", fechaPubli: new Date(), titulo: "Estoy patricio", contenido: "wow texto texto texto", img: "economia.jpg", categoria: "4"},
    {id: "5", autor: "Axel", fechaPubli: new Date(), titulo: "Ayer se enfermo un pez payaso", contenido: "wow texto texto texto", img: "salud.jpg", categoria: "5"},
    {id: "6", autor: "Axel", fechaPubli: new Date(), titulo: "Se me rompio el PC", contenido: "wow texto texto texto", img: "tecnologia.jpg", categoria: "6"},
    {id: "7", autor: "Axel", fechaPubli: new Date(), titulo: "Otra categoria", contenido: "wow texto texto texto", img: "entretenimiento.jpg", categoria: "7"},
    {id: "8", autor: "Axel", fechaPubli: new Date(), titulo: "Otra categoria 2", contenido: "wow texto texto texto", img: "mundo.jpg", categoria: "8"},
    {id: "9", autor: "Axel", fechaPubli: new Date(), titulo: "Otra categoria 3", contenido: "wow texto texto texto", img: "deporte.jpg", categoria: "9"}
  ];


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.noticias.map(noticia => {
      if(noticia.id == this.route.snapshot.paramMap.get('id')) {
        this.noticia.id = noticia.id;
        this.noticia.autor = noticia.autor;
        this.noticia.contenido = noticia.contenido;
        this.noticia.fechaPubli = noticia.fechaPubli;
        this.noticia.img = noticia.img;
        this.noticia.titulo = noticia.titulo;
        this.categorias.map(categoria => {
          if(categoria.id == noticia.categoria) {
            this.noticia.categoria = categoria.nombre;
          }
        });
      }
    }); 
  }

}
