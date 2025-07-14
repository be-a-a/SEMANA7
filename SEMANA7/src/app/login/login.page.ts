import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (!this.username || !this.password) {
      const alerta = await this.alertController.create({
        header: 'Campos obligatorios',
        message: 'Por favor completa usuario y contraseña.',
        buttons: ['OK'],
      });
      await alerta.present();
      return;
    }

    if (this.username.length < 4 || this.password.length < 4) {
      const alerta = await this.alertController.create({
        header: 'Requisitos no cumplidos',
        message: 'Usuario y contraseña deben tener al menos 4 caracteres.',
        buttons: ['Entendido'],
      });
      await alerta.present();
      return;
    }

    localStorage.setItem('nombreUsuario', this.username);
    this.router.navigate(['/home']);
  }
}
