import { ListServiceService } from './../list-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.css']
})
export class Test02Component implements OnInit {
  @Input() data: any;

  filterFlag = false;

  constructor(public ls: ListServiceService) {}

  ngOnInit() {}

  addFilter(ev) {

    // const inputData = [
    //   { name: 'Joe', id: 1 },
    //   { name: 'Karl', id: 2 },
    //   { name: 'William', id: 3 },
    // ];

    // this.data = inputData;

    this.ls.filterData01();

  }

  addItem(ev) {
    this.data.push({ name: 'Carol', id: '-5' });
  }
}

