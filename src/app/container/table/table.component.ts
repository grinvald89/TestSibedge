import { Component, Input } from '@angular/core';

import { IUser } from '../i-user';
import { IFilter } from '../i-filter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  @Input() Users: IUser[];
  @Input() Limit: number;
  @Input() Filter: IFilter;
  @Input() PageNumber: number;
}