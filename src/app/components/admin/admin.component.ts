import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  searchUser!: string;
  allUsers: any;
  constructor(private adminServices: AdminService, private route: Router) { }
  
  async ngOnInit(): Promise<void>{
    await this.adminServices.getAllUsers().subscribe((data) => {
      console.log(data,"data here");
      if (data.status) {
        this.allUsers = data.users;
      }
    })
  }

  adminLogout() {
    localStorage.setItem('adminTocken', '');
    localStorage.setItem('adminName', '');
    localStorage.setItem('adminEmail', '');
    this.allUsers = null;
    this.route.navigate(['adminlogin'])
  }

  deleteUser(data:any) {
    this.adminServices.deleteUser(data).subscribe((data) => {
      window.alert("user have been deleted")
      location.reload()
    })
  }

  async search() {
    await this.adminServices.searchUser(this.searchUser).subscribe((data) => {
      this.allUsers=data.data
    })
  }


}
