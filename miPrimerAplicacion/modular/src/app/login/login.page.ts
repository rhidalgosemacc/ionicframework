import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  valor = '';

  constructor( private router: Router, private navCtrl: NavController) { }

 /* pushSettings() {
    // this.router.navigate(['/home',this.valor]);
    this.router.navigateByUrl(`/home/${this.valor}`);
  }*/

  pushSettingsCTRL() {
         this.navCtrl.navigateForward(`/dashboard/${this.valor}`);
  }

  ngOnInit() {
  }

}
