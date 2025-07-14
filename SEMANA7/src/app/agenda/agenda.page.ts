import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SQLiteService } from '../services/sqlite.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false
})
export class AgendaPage {
  listaMascotas: any[] = [];        // Lista completa desde SQLite
  mascotasFiltradas: any[] = [];    // Lista visible (filtrada)
  terminoBusqueda: string = '';     // Texto del buscador

  constructor(
    private router: Router,
    private sqliteService: SQLiteService
  ) {}

  async ionViewWillEnter() {
    try {
      this.listaMascotas = await this.sqliteService.getMascotas();
      this.filtrarMascotas(); // Cargar todos al inicio
    } catch (error) {
      console.error('Error al cargar mascotas desde SQLite:', error);
    }
  }

  filtrarMascotas() {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (!termino) {
      this.mascotasFiltradas = [...this.listaMascotas];
    } else {
      this.mascotasFiltradas = this.listaMascotas.filter(m =>
        m.nombre.toLowerCase().includes(termino) ||
        m.tipo.toLowerCase().includes(termino)
      );
    }
  }

  verDetalle(mascota: any) {
    this.router.navigate(['/detalle'], {
      queryParams: { id: mascota.id }
    });
  }
}
