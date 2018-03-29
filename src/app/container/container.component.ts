import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from "../data.service";

import { IUser } from "./i-user";
import { IFilter } from "./i-filter";
import { IResponse } from "../i-response";

import { FilterTablePipe } from "../pipes/filter-table.pipe";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
  users: IUser[] = [];
  limit: number = 10;
  pageNumber: number = 1;
  pageCount: number = 1;

  _filter: IFilter = {
    lastName: "",
    phone: "",
    city: "",
    dateFrom: new FormControl(),
    dateTo: new FormControl()
  };

  get filter(): IFilter {
    return this._filter;
  }

  set filter(value: IFilter) {
    this._filter = value;
    this.pageNumber = 1;
  }

  constructor(
    private dataService: DataService,
    private filterTablePipe: FilterTablePipe
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe((res: IResponse) => this.users = res.results);
  }

  ngAfterContentChecked(): void {
    this.pageCount = Math.ceil(this.filterTablePipe.transform(this.users, this.filter).length / this.limit);
  }
}