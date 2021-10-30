import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})

export class ServicioComponent implements OnInit {

  formu : FormGroup;

  constructor(public form : FormBuilder) {
    this.formu = this.form.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      dirigido: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validarDatos() {
    console.log(this.formu.value)
  }
}
