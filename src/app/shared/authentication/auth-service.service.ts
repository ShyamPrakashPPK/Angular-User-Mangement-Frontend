import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  IsUserLoggedIn() {
    return !!localStorage.getItem('userTocken');
  }

  IsAdminLoggedIn() {
    return  !!localStorage.getItem('adminTocken')
  }
}
