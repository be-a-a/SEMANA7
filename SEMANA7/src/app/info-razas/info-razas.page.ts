import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-razas',
  templateUrl: './info-razas.page.html',
  styleUrls: ['./info-razas.page.scss'],
  standalone: false
})
export class InfoRazasPage implements OnInit {
  razas: string[] = [];
  razaSeleccionada: string = '';
  imagenRaza: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerRazas();
  }

  obtenerRazas() {
    this.http.get<any>('https://dog.ceo/api/breeds/list/all')
      .subscribe(response => {
        this.razas = Object.keys(response.message);
      });
  }

  cargarImagenRaza() {
    if (!this.razaSeleccionada) return;

    this.http.get<any>(`https://dog.ceo/api/breed/${this.razaSeleccionada}/images/random`)
      .subscribe(response => {
        this.imagenRaza = response.message;
      });
  }
}
