import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  public loading: boolean = false;
  usuario: any;
  mesaje: string;
  location: any;
  nombre_cliente: string;
    
  constructor(private router: Router) { }

  ngOnInit(): void {
    
        localStorage.clear();
  }
  
  mostrar(){
       this.router.navigate(['configuracion/pedido']);
  }
    
  eventochecked(evento){
      if(localStorage.getItem("nombre") === null){
          localStorage.setItem("nombre", String(evento.srcElement.value));
      }else{
          localStorage.removeItem("nombre");
          localStorage.setItem("nombre", String(evento.srcElement.value));
      }
      
  }    

}
