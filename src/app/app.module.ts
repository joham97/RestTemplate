import { RestService } from './services/rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatGridListModule } from '@angular/material';

import { AppRouting } from './routing/app.routing';
import { BackendService } from './services/backend.service';
import { AuthGuardService } from './routing/route-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    AppRouting
  ],
  providers: [
    RestService,
    BackendService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
