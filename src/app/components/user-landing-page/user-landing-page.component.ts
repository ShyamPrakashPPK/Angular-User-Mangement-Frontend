import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent {
  constructor( private route: Router){}

  userLogout() {
    localStorage.setItem('userTocken','');
    localStorage.setItem('userName','');
    localStorage.setItem('userEmail', '');
    localStorage.setItem('Id','');
    localStorage.setItem('image', '')
    this.route.navigate([''])

    
  }
}
