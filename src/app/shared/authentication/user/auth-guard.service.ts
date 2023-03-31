

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
