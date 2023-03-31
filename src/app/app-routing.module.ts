import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsDisplayComponent } from './components/user-details-display/user-details-display.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminAuthGuardService } from './shared/authentication/admin/admin-auth-guard.service';
import { AdminUnAuthGuardService } from './shared/authentication/admin/admin-un-auth-guard.service';
import { AuthGuardService } from './shared/authentication/user/auth-guard.service';
import { UnAuthGuardService } from './shared/authentication/user/un-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
    canActivate: [UnAuthGuardService]
  },
  {
    path: 'user',
    component: UserLandingPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editUser',
    component: EditUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
    canActivate: [AdminUnAuthGuardService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
