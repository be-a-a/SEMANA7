import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SQLiteService } from '../services/sqlite.service';

@Component({
  selector: 'app-registrar-mascotas',
  templateUrl: './registrar-mascotas.page.html',
  styleUrls: ['./registrar-mascotas.page.scss'],
  standalone: false
})
export class RegistrarMascotasPage implements OnInit {
  nombreMascota: string = '';
  tipoMascota: string = '';
  razaMascota: string = '';
  fechaNacimiento: string = '';
  colorMascota: string = '';
  pesoMascota: number | null = null;
  alturaMascota: number | null = null;

  constructor(
    private alertController: AlertController,
    private sqliteService: SQLiteService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.sqliteService.initDB();
  }

  async guardarMascota() {
    if (
      !this.nombreMascota ||
      !this.tipoMascota ||
      !this.fechaNacimiento ||
      this.pesoMascota === null ||
      this.alturaMascota === null
    ) {
      const alerta = await this.alertController.create({
        header: 'Campos obligatorios',
        message: 'Por favor completa todos los campos marcados con *.',
        buttons: ['OK'],
      });
      await alerta.present();
      return;
    }

    const nuevaMascota = {
      nombre: this.nombreMascota,
      tipo: this.tipoMascota,
      raza: this.razaMascota || '',
      color: this.colorMascota || '',
      peso: this.pesoMascota,
      altura: this.alturaMascota
    };

    try {
      await this.sqliteService.addMascota(nuevaMascota);

      const success = await this.alertController.create({
        header: 'Registro exitoso',
        message: 'La mascota ha sido registrada correctamente 🐾',
        buttons: ['OK'],
      });
      await success.present();

      // Limpiar campos
      this.nombreMascota = '';
      this.tipoMascota = '';
      this.razaMascota = '';
      this.fechaNacimiento = '';
      this.colorMascota = '';
      this.pesoMascota = null;
      this.alturaMascota = null;

      // Redirigir a agenda
      this.router.navigate(['/agenda']);

    } catch (error) {
      console.error('Error al guardar en SQLite:', error);
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo guardar la mascota. Intenta nuevamente.',
        buttons: ['OK'],
      });
      await errorAlert.present();
    }
  }
}
