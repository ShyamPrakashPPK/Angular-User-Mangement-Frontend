import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuardService {

  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    if (!this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['user'])
    return false;
  }

}
