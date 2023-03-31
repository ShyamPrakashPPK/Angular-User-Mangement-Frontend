import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  //make an signup object
  signupObj: any = {
    Name: "",
    Email: "",
    Password: ""
  };
  //make a login object
  loginObj: any = {
    Name: "",
    Password: ""
  }
  constructor(private userServices: UserService, private route: Router ) { }

  ngOnInit(): void {
  }

  //user signup
  doSignUp() {
    console.log(this.signupObj)
    this.userServices.addUser(this.signupObj).subscribe(data => {
      if (data.status) {
        window.alert("user created")
      } else {
        window.alert("creation error")
      }
      console.log(data)
    })
  }

  //user login 
  doLogin() {
    console.log("click")
    // this.store.dispatch(AuthActions.LoginRequest(this.loginObj))
    this.userServices.dologin(this.loginObj).subscribe(data => {
      console.log(data)
      if (data.status) {
        localStorage.setItem('userTocken', data.tocken);
        localStorage.setItem('userName', data.user.Name);
        localStorage.setItem('userEmail', data.user.Email);
        localStorage.setItem('Id', data.user.Id);
        localStorage.setItem('image', data.user.Image)
        console.log(data.user)
        this.route.navigate(['user'])
      }
    })
  }
}
