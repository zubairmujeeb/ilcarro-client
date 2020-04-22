import { Component, OnInit } from '@angular/core';
import { IlcarroService } from '../service/ilcarro.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent implements OnInit {
  topCars: any[];
  constructor(private ilcarroService: IlcarroService) {}

  ngOnInit(): void {
    this.ilcarroService.getMostPopular().subscribe(
      (data) => {
        // tslint:disable-next-line: no-debugger
        debugger;
        this.topCars = data;
      },
      (err) => {
        // tslint:disable-next-line: no-debugger
        // debugger;
        alert(err);
      }
    );
  }
}
