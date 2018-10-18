import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pedido',
  templateUrl: 'pedido.component.html',
  styleUrls: ['pedido.component.css']
})

export class PedidoComponent implements OnInit {
  public loading = false;
  public show = false;
  nombre_cliente: string;
  constructor(private router: Router) {}

     
  ngOnInit(): void {
        this.nombre_cliente = String(localStorage.getItem("nombre"));
   
  }

  sendLink(){
      this.show = true;
  }     

}
