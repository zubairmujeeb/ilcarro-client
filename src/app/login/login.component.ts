import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { LoginModel } from './../models/login-model';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  constructor(private authService: AuthService, private router: Router) {
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['search']);
    // }
  }

  onSubmit() {
    this.authService.login(this.loginModel).subscribe(success => {
      if (success) {
        // tslint:disable-next-line: no-debugger
        debugger;
        this.router.navigate(['search']);
      }
    });
  }

}
