import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {

   @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
