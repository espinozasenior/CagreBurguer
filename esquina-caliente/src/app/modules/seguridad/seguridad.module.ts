import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations:
  [
    LoginComponent,
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
  [
    LoginComponent,
  ],
  providers:
  [
  ]
})
export class SeguridadModule {

}
