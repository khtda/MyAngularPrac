import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { YokaiDetailsComponent } from './components/yokai-details/yokai-details.component';
import { YokaiListComponent } from './components/yokai-list/yokai-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  OktaAuthModule,
  OktaCallbackComponent,
  OKTA_CONFIG
} from '@okta/okta-angular';

import { OktaAuth } from '@okta/okta-auth-js';

import myAppConfig from './config/my-app-config';
import { LoginComponent } from './components/login/login.component';

const oktaConfig = myAppConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes = [

    {path: 'login/callback', component: OktaCallbackComponent },
    {path: 'login', component: LoginComponent },
    {path: 'yokais/:id', component: YokaiDetailsComponent },
    {path: 'missions/chp/:chapter', component: MissionListComponent },
    {path: 'missions/:id', component: MissionDetailsComponent },
    {path: 'search/:keyword', component: YokaiListComponent },
    {path: 'yokais', component: YokaiListComponent },
    {path: 'missions', component: MissionListComponent},
    {path: '**', redirectTo: '/yokais', pathMatch: 'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }