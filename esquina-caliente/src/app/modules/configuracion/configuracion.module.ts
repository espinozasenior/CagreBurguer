import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CocinaComponent} from './pages/cocina/cocina.component';
import {PedidoComponent} from './pages/pedido/pedido.component';
import {DetallePedidoComponent} from './pages/pedido/detalle/pedido-total/detalle-pedido.component';
import {RouterModule} from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations:
  [
    PedidoComponent,
    CocinaComponent,
    DetallePedidoComponent  
  ],
  imports:
  [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    CountdownTimerModule.forRoot()
  ],
  exports:
  [
    PedidoComponent,
    CocinaComponent,
    DetallePedidoComponent  

  ],
  providers:
  [
    
  ]
})
export class ConfiguracionModule {

}
