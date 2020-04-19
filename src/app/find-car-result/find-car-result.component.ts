import { SearchFilters } from './../models/search-filters';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
@Component({
  selector: 'app-find-car-result',
  templateUrl: './find-car-result.component.html',
  styleUrls: ['./find-car-result.component.scss']
})
export class FindCarResultComponent implements OnInit {

  filters: SearchFilters;
  cars: any;
  routerSubscription: any;

  constructor(private router: Router) {
    this.filters = new SearchFilters();
  }

  ngOnInit(): void {

    $.getScript('/assets/js/main.js');
    const data = history.state.data;
    if (data !== undefined) {
      this.filters = data.filters;
      this.cars = data.cars;
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(this.cars);
    }
  }

  recallJsFuntions() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        // tslint:disable-next-line: no-debugger
        debugger;
        $.getScript('/assets/js/main.js');
      });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
