import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DateTimeService } from "../../date-time.service";

import { IFilter } from "../i-filter";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent {
  @Input() Filter: IFilter;
  @Output() FilterChange = new EventEmitter<IFilter>();

  constructor(private dateTimeService: DateTimeService) { }

  OnClear(): void {
    this.Filter = {
      lastName: "",
      phone: "",
      city: "",
      dateFrom: new FormControl(),
      dateTo: new FormControl()
    };

    this.FilterChange.emit(this.Filter);
  }
}
