import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminUnAuthGuardService {

  constructor(private auth: AuthServiceService, private router: Router) { }
  
  canActivate(): boolean{
    if (!this.auth.IsAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['admin'])
    return false;
  }
}
