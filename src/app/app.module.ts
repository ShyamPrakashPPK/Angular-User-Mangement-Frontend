import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { UserDetailsDisplayComponent } from './components/user-details-display/user-details-display.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserLandingPageComponent,
    UserDetailsDisplayComponent,
    EditUserComponent,
    UserDetailsFormComponent,
    AdminLoginComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
