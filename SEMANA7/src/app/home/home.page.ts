import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  nombre: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    const guardado = localStorage.getItem('nombreUsuario');
    this.nombre = guardado ? guardado : 'Usuario';
  }

  cerrarSesion() {
    localStorage.removeItem('nombreUsuario');
    this.router.navigate(['/login']);
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      const alert = await this.alertController.create({
        header: 'Foto tomada',
        message: `<img src="${image.webPath}" style="width: 100%;">`,
        buttons: ['OK']
      });
      await alert.present();

    } catch (error) {
      console.error('Error al tomar foto:', error);
    }
  }

  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();

      const alert = await this.alertController.create({
        header: 'Ubicación actual',
        message: `Latitud: ${coordinates.coords.latitude}<br>Longitud: ${coordinates.coords.longitude}`,
        buttons: ['OK']
      });
      await alert.present();

    } catch (error) {
      console.error('Error al obtener ubicación:', error);
    }
  }
}
