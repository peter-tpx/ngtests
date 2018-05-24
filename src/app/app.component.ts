import { ListServiceService } from './list-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  data: any;

  constructor(public ls: ListServiceService) {
    this.data = ls.dataService;
   }

ngOnInit(): void {

  // const inputData = [
  //   { name: 'Joe', id: 1 },
  //   { name: 'Karl', id: 2 },
  //   { name: 'William', id: 3 },
  //   { name: 'Samantha', id: 4 },
  //   { name: 'Joe', id: 2 }
  // ];

  // this.data = inputData;

}

  addFilter(ev) {
    this.data = this.data.filter((e, i, arr) => e.id < 3);
  }




}
