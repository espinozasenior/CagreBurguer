import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {TemplateModule} from './modules/template/template.module';
import {ConfiguracionModule} from './modules/configuracion/configuracion.module';
import {SeguridadModule} from './modules/seguridad/seguridad.module';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {BasicAuthGuard} from './modules/utils/basic-auth-guard';
@NgModule({
  declarations:
  [
    AppComponent,
  ],
  imports:
  [
    AppRoutingModule,
    TemplateModule,
    ConfiguracionModule,
    SeguridadModule,
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    CountdownTimerModule.forRoot() 
  ],
  providers:
  [
      BasicAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
