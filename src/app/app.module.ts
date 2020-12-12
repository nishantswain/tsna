import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HttpClientModule} from '@angular/common/http';
import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavigationComponent,
    SignupComponent,
    LoginpageComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
