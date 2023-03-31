import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthServiceService, private router: Router) { }
  
  canActivate(): boolean{
    if (this.auth.IsAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['adminlogin']);
    return false;
  }
}
