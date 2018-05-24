import { IItem } from './item';
import { ListServiceService } from './list-service.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'order01'
})
export class Order01Pipe implements PipeTransform {
  constructor(private ls: ListServiceService) {}
  transform(items: IItem[], flag: boolean): IItem[] {
    if  (flag) {
      items.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
      //items.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0  );
    }
    return items;
  }
}
