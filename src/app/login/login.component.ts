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
  constructor(private authService: AuthService) {
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.callLogin(this.loginModel);
  }

}
