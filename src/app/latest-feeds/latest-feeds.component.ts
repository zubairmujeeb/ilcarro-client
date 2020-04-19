import { UserComment } from './../models/user-comment';
import { Component, OnInit } from '@angular/core';
import { IlcarroService } from '../service/ilcarro.service';

@Component({
  selector: 'app-latest-feeds',
  templateUrl: './latest-feeds.component.html',
  styleUrls: ['./latest-feeds.component.scss'],
})
export class LatestFeedsComponent implements OnInit {

  comments: any[];
  constructor(private ilcarroService: IlcarroService) { }

  ngOnInit(): void {
    this.ilcarroService.getLatestFeeds().subscribe(data => {
      // tslint:disable-next-line: no-debugger
      debugger;
      this.comments = data;
    }, err => {
      // tslint:disable-next-line: no-debugger
      debugger;
      alert(err);
    });
  }

}
