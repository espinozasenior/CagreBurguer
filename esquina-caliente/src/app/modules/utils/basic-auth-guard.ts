import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class BasicAuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('usuario') === null) {  
        this.router.navigate(['configuracion/pedido']);
      return true;
    } else {
        this.router.navigate(['login']);
         return false;
    }
  }
}
