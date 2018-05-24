import { Component, OnInit, AfterContentChecked } from '@angular/core';

// ENABLE if an external jquery is used
declare var $: any;

@Component({
  selector: 'app-foundation01',
  templateUrl: './foundation01.component.html',
  styleUrls: ['./foundation01.component.css']
})
export class Foundation01Component implements OnInit, AfterContentChecked {


  datalist = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() {}

  ngOnInit() {
    $('#foundationTest').foundation();
  }

  ngAfterContentChecked() {

  }
}
