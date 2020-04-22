import { IlcarroService } from './../service/ilcarro.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  title: string;
  user: User;

  constructor(private ilcarroService: IlcarroService, private router: Router) {
    this.title = 'Registration';
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ilcarroService.register(this.user).subscribe(data => {
      this.router.navigate(['login']);
    }, err => {
      // tslint:disable-next-line: no-debugger
      debugger;
      alert(err);
    });
  }

}
