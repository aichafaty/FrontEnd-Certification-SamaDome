import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CarnetComponent } from './carnet/carnet.component';
import { VaccinComponent } from './vaccin/vaccin.component';
import { ParaNotificationComponent } from './para-notification/para-notification.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UtilisateurComponent,
    CarnetComponent,
    VaccinComponent,
    ParaNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
