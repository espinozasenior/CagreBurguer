import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-detalle-pedido',
  templateUrl: 'detalle-pedido.component.html',
  styleUrls: ['detalle-pedido.component.css']
})

export class DetallePedidoComponent implements OnInit {
   cafe: Array<any> = [];    
  others: Array<any> = [];    
  totales: Array<any> = [];    
  total: number;     
  sum: number = 0;
  total_compra: any; 
  customClass: string = 'customClass';
  mensa: boolean = true;
    mensaje: any;
 constructor(private router: Router) {}

  ngOnInit(): void {
        this.cafe.push(
         {
          'nombre': "Cafe americano",
          'precio': 5   
         },
         {
          'nombre': "Cafe con leche",
          'precio': 7   
         });  
      
    this.others.push(
         {
          'nombre': "Sandwich de jamón y queso",
          'precio': 10   
         },
         {
          'nombre': "Jugo natural",
          'precio': 7   
         });    
  }
  
   eventochecked(evento, descripcion){
      this.mensa = true;
      if(evento.target.checked === true){
            
                this.totales.push({
                      "total": parseInt(evento.srcElement.defaultValue),
                      "descripcion": descripcion
                });
                 this.sum = this.totales.reduce((a: number, b) => a + b.total, 0);
                localStorage.setItem("total", String(this.sum));
                this.total_compra =  this.sum;    
                localStorage.setItem('pedido_total', JSON.stringify(this.totales));
           
      }else{
          localStorage.removeItem("pedido_total");
          const descripciones = Number(localStorage.getItem("total"));
         
          this.sum = Number(descripciones) - Number(evento.srcElement.defaultValue);
          localStorage.setItem("total", String(this.sum));
          this.total_compra =  this.sum;
          
          for (var i = 0; i < this.totales.length; i++) {
              
              if(descripcion === this.totales[i].descripcion){
                    this.totales.splice(i,1);
              }
              
          }
          localStorage.setItem('pedido_total', JSON.stringify(this.totales));
          
      }   
       
  }     
    
   finalizar(){
      
       if(localStorage.getItem("pedido_total") === null){
           this.mensa = false;
           this.mensaje = "Por favor selecciona un item"
       }else{
           
            this.router.navigate(['configuracion/cocina']);
       }
       
   }

}
