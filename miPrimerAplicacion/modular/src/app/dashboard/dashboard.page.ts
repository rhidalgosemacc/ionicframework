import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor( private activatedRoute: ActivatedRoute) { }
  argumento = null;

  modulos = [
    {
      nombre: 'Marcas',
      imagen: 'assets/iconoscontrol/placeholder-filled-point.png',
      descripcion: 'Modulo para realizar marcas'
    },
    {
      nombre: 'Bitacoras',
      imagen: 'assets/iconoscontrol/binnacle.png',
      descripcion: 'Modulo para realizar bitacora'
    },
    {
      nombre: 'Alertas',
      imagen: 'assets/iconoscontrol/settings.png',
      descripcion: 'Modulo de alertas'
    },
    {
      nombre: 'Chat',
      imagen: 'assets/iconoscontrol/passage-of-time.png',
      descripcion: 'Modulo de chat'
    }


  ];

  ngOnInit( ) {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('valor');
  }

}



