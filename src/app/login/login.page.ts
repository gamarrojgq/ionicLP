import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('inputPassText')inputPassText: any;
  @ViewChild('inputPass')inputPass;

  public usuario = {model: ""};
  public password: string = "";

  public mostrar_password = false;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async login() {
    const alert = await this.alertCtrl.create({
      header: "Alerta",
      subHeader: "Hoy si",
      message: "Se mostro el mensaje",
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
