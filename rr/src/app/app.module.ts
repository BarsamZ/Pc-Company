import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoggingService } from './logging.service';
import { AdminComponent } from './admin/admin.component';
import { UniversitilistComponent } from "./universities/universitilist/universitilist.component";

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AdminComponent,
    UniversitilistComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
