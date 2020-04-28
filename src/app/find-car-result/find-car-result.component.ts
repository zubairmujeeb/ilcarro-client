import { IlcarroService } from './../service/ilcarro.service';
import { SearchFilters } from './../models/search-filters';
import { Component, OnInit, AfterViewInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-find-car-result',
  templateUrl: './find-car-result.component.html',
  styleUrls: ['./find-car-result.component.scss', './find-car-result.component.css']
})
export class FindCarResultComponent implements OnInit, AfterViewInit {

  filters: SearchFilters;
  cars: any;

  @ViewChild('mapContainer') public gmap: ElementRef;

  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  constructor(private router: Router, private ilcarroService: IlcarroService, private ngZone: NgZone) {
    this.filters = new SearchFilters();
  }

  ngOnInit(): void {
    $.getScript('/assets/js/main.js');
    const ANGULAR_COMPONENT_REF = 'angularComponentReference';
    window[ANGULAR_COMPONENT_REF] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.search() };

    const data = history.state.data;
    if (data !== undefined) {
      this.filters = data.filters;
      this.search();
    }
  }

  ngAfterViewInit(): void {

    this.mapInitializer();
  }


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }

  setSortDirectionAsc(): void {
    this.filters.ascending = true;
    this.search();
  }

  setSortDirectionDec(): void {
    this.filters.ascending = false;
    this.search();
  }

  search(): void {

    if (this.filters.city === undefined || this.filters.startDate === undefined || this.filters.endDate === undefined) {
      this.cars = [];
      return;
    }
    this.ilcarroService.search(this.filters).subscribe(data => {
      this.cars = data.content;
    }, err => {
      alert(err);
      this.cars = [];
    });
  }

  searchByFilters(): void {

    // tslint:disable-next-line: max-line-length
    if (this.filters.make === undefined || this.filters.model === undefined || this.filters.year === undefined || this.filters.transmission === undefined || this.filters.fuelconsumption === undefined || this.filters.engine === undefined || this.filters.fuel === undefined) {
      this.cars = [];
      return;
    }

    this.ilcarroService.searchByFilters(this.filters).subscribe(data => {
      this.cars = data;
    }, err => {
      this.cars = [];
      alert(err);
    });
  }

}
