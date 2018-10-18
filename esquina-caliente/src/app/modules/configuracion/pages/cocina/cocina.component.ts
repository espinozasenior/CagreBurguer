import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-cocina',
  templateUrl: 'cocina.component.html',
  styleUrls: ['cocina.component.css']
})

export class CocinaComponent implements OnInit {
pedido: any;   
fecha: any;    
nombre: string;    
  constructor(private router: Router) {}
  ngOnInit(): void {
      this.pedido = JSON.parse(localStorage.getItem('pedido_total'));
      
      this.fecha = '2018-10-19 00:00:00';
      this.nombre = localStorage.getItem("nombre");
  }
    
  finalizar(){
      this.router.navigate(['login']);
  } 
  volver(){
      this.router.navigate(['configuracion/pedido']);
  }  
}
