import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginObj: any = {
    Name: "",
    Password:""
  }

  constructor(private adminService: AdminService, private route: Router) { }
  
  doLogin() {
    this.adminService.dologin(this.loginObj).subscribe(data => {
      if (data.status) {
        localStorage.setItem('adminTocken', data.tocken);
        localStorage.setItem('adminName', data.admin.Name);
        localStorage.setItem('adminEmail', data.admin.Email);
        this.route.navigate(['admin'])
      }
    })
  }

}
