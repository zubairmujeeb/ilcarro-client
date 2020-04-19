import { IlcarroService } from './../service/ilcarro.service';
import { SearchFilters } from './../models/search-filters';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.scss']
})
export class FindCarComponent implements OnInit {

  filters: SearchFilters;
  constructor(private ilcarroService: IlcarroService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.filters = new SearchFilters();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.ilcarroService.search(this.filters).subscribe(data => {
      // tslint:disable-next-line: no-debugger
      debugger;
      // navigate to search-results
      // tslint:disable-next-line: max-line-length
      this.router.navigate(['../search-results'], { state: { data: { filters: this.filters, cars: data.content } } });
    }, err => {
      // tslint:disable-next-line: no-debugger
      debugger;
      alert(err);
    });
  }

}
