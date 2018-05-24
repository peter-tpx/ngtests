import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewChecked,
  AfterContentChecked
} from '@angular/core';
import { DxRangeSliderModule } from 'devextreme-angular';
import { RangeSliderFilter } from './range-slider-filter.model';


@Component({
  selector: 'app-devext01',
  templateUrl: './devext01.component.html',
  styleUrls: ['./devext01.component.css']
})
export class Devext01Component
  implements OnInit, AfterViewChecked, AfterContentChecked {
  // label: any;
  // tooltip: any;
  // tooltipEnabled: any;

  selectedValue = [];
  rangeSliderYield: any;

  filterBinding = {
    yield: { start: 0, end: 0 }
  };

  constructor(private cdr: ChangeDetectorRef) {}

  //    this.initFilters();

  initFilters() {

    this.rangeSliderYield = {
      min: 1,
      max: 100,
      start: 12,
      end: 75,
      //            start: GetMinRange('yield') + 1,
      // end: GetMaxRange('yield') - 1,
      showRange: true,

      value: [],

      // step: 1,
      label: {
        visible: true,
        format: function(value) {
          return value + '%';
        },
        position: 'bottom'
      },

      tooltip: {
        enabled: false,
        format: function(value) {
          return value;
        },
        showMode: 'always',
        position: 'bottom'
      },

      onValueChanged: function(e: any) {
        const x = 1;

        this.selectedValue = [e.value[0], e.value[1]];
        // this.filterBinding.filterItems('yield');
        // this.RefreshFilterBar();
      }
    };
  }

  ngOnInit() {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.

    this.initFilters();
  }
}
