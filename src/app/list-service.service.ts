import { Injectable } from '@angular/core';

@Injectable()
export class ListServiceService {

  dataService: any;

  constructor() {


    const inputData = [
      { name: 'Joe', id: 1 },
      { name: 'Karl', id: 6 },
      { name: 'William', id: 4 },
      { name: 'Samantha', id: 3 },
      { name: 'Joe', id: 0 }
    ];

    this.dataService = inputData;
   }

   filterData01() {
     this.dataService = this.dataService.filter((e, i, arr) => e.id < 3);
   }



}
