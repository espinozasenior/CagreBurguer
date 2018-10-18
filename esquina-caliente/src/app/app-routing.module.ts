import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent} from './modules/template/layout/basic/basic-layout.component';
import {PedidoComponent} from './modules/configuracion/pages/pedido/pedido.component';
import {BlankLayoutComponent} from './modules/template/layout/blank/blank-layout.component';
import {LoginComponent} from './modules/seguridad/login/login.component';
import {BasicAuthGuard} from './modules/utils/basic-auth-guard';
import {CocinaComponent} from './modules/configuracion/pages/cocina/cocina.component';


import {LocationStrategy, HashLocationStrategy} from '@angular/common';

const routes: Routes = [
  {
    path: 'configuracion',
    component: BasicLayoutComponent,
    children: [
          {
            path: 'pedido',
            component: PedidoComponent 
          },
          {
            path: 'cocina',
            component: CocinaComponent 
          } 
    ]
  },  
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full' 
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },  
  {
    path: 'login',
    component: LoginComponent,
  },    
  {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes,{ useHash: true })
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
