import { MissionService } from './services/mission.service';
import { YokaiService } from './services/yokai.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { YokaiListComponent } from './components/yokai-list/yokai-list.component';
import { HttpClientModule } from '@angular/common/http';
import { YokaiDetailsComponent } from './components/yokai-details/yokai-details.component'
import { AppRoutingModule } from './app-routing.module';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { SearchComponent } from './components/search/search.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';

import {
  OktaAuthModule,
  OktaCallbackComponent,
  OKTA_CONFIG
} from '@okta/okta-angular';

import { OktaAuth } from '@okta/okta-auth-js';

import myAppConfig from './config/my-app-config';

const oktaConfig = myAppConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    YokaiListComponent,
    YokaiDetailsComponent,
    MissionDetailsComponent,
    MissionListComponent,
    SearchComponent,
    LoginComponent,
    LoginStatusComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    OktaAuthModule,
    ReactiveFormsModule,
  ],
  providers: [YokaiService,
              MissionService,
             { provide: OKTA_CONFIG, useValue: { oktaAuth }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
