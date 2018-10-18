import {NgModule} from '@angular/core';
import {BasicLayoutComponent} from './layout/basic/basic-layout.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BlankLayoutComponent} from './layout/blank/blank-layout.component';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  declarations:
  [
    BlankLayoutComponent,
    BasicLayoutComponent,
    NavigationComponent
  ],
  imports:
  [
    RouterModule,
  ],
  exports:
  [
    BlankLayoutComponent,
    BasicLayoutComponent,
    NavigationComponent
  ],providers: [
    
  ]

})
export class TemplateModule {

}
