import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavMenuComponent } from 'src/component/nav-menu/nav-menu.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
