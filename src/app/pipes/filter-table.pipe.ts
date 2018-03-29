import { Pipe, PipeTransform } from '@angular/core';

import { IUser } from "../container/i-user";
import { IFilter } from "../container/i-filter";

import { DateTimeService } from "../date-time.service";

@Pipe({
  name: 'filterTable',
  pure: false
})

export class FilterTablePipe implements PipeTransform {
  constructor(private dateTimeService: DateTimeService) {}

  transform(items: IUser[], filter: IFilter): IUser[] | null {
    if (!items)
      return null;

    if (!filter)
      return items;

    if (filter.lastName)
      items = items.filter(x => this.FindText(x.name.last, filter.lastName));

    if (filter.phone)
      items = items.filter(x => this.FindText(x.phone, filter.phone));

    if (filter.city)
      items = items.filter(x => this.FindText(x.location.city, filter.city));

    if (filter.dateFrom.value)
      items = items.filter(x => this.CompareDate(x.dob, filter.dateFrom.value, true));

    if (filter.dateTo.value)
      items = items.filter(x => this.CompareDate(x.dob, filter.dateTo.value, false));

    return items;
  }

  private FindText(Sourse: string, Find: string): boolean {
    return Sourse.toUpperCase().indexOf(Find.toUpperCase()) !=  -1;
  }

  private CompareDate(Date1: string, Date2: Date, More: boolean): boolean {
    let time1 = this.dateTimeService.StringToDateTime(Date1).getTime(),
        time2 = Date2.getTime();

    return More ? time1 >= time2 : time1 <= time2
  }
}
