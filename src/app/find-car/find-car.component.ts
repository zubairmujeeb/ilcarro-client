import { IlcarroService } from './../service/ilcarro.service';
import { SearchFilters } from './../models/search-filters';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

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
    $.getScript('/assets/js/main.js');
  }

  onSubmit(): void {

    this.router.navigate(['../search-results'], { state: { data: { filters: this.filters } } });
  }

}
