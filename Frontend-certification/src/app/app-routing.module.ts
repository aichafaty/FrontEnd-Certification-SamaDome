import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {CarnetComponent} from "./carnet/carnet.component";
import {MenuComponent} from "./menu/menu.component";
import {VaccinComponent} from "./vaccin/vaccin.component";
import {ParaNotificationComponent} from "./para-notification/para-notification.component";

const routes:Routes=[
  {path:"menu",component:MenuComponent},

  {path:"utilisateurListe",component:UtilisateurComponent},
  {path:"utilisateurAjout",component:UtilisateurComponent},

  {path:"carnetListe",component:CarnetComponent},
  {path:"carnetAjout",component:CarnetComponent},

  {path:"vaccinListe",component:VaccinComponent},
  {path:"vaccinAjout",component:VaccinComponent},

  {path:"parametreListe",component:ParaNotificationComponent},
  {path:"parametreAjout",component:ParaNotificationComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
