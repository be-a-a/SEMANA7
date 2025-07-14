import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SQLiteService } from '../services/sqlite.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage {
  mascota: any = {
    id: null,
    nombre: '',
    tipo: '',
    raza: '',
    color: '',
    peso: null,
    altura: null,
    fechaNacimiento: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private sqliteService: SQLiteService
  ) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(async params => {
      const id = +params['id'];
      const mascotas = await this.sqliteService.getMascotas();
      const encontrada = mascotas.find(m => m.id === id);
      if (encontrada) {
        this.mascota = { ...encontrada };
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se encontró la mascota.',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/agenda']);
      }
    });
  }

  async guardarCambios() {
    try {
      await this.sqliteService.updateMascota(this.mascota);
      const alert = await this.alertController.create({
        header: 'Guardado',
        message: 'Los cambios fueron guardados correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  }

  async eliminarMascota() {
    const confirm = await this.alertController.create({
      header: '¿Eliminar mascota?',
      message: '¿Estás seguro que deseas eliminar esta mascota?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.sqliteService.deleteMascota(this.mascota.id);
            const alert = await this.alertController.create({
              header: 'Eliminada',
              message: 'La mascota fue eliminada correctamente.',
              buttons: ['OK']
            });
            await alert.present();
            this.router.navigate(['/agenda']);
          }
        }
      ]
    });
    await confirm.present();
  }
}
