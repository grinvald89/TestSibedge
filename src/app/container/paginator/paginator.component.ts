import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

const visiblePages: number = 3;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {
  @Input() Limit: number;
  @Output() LimitChange = new EventEmitter<number>();

  @Input() PageNumber: number;
  @Output() PageNumberChange = new EventEmitter<number>();

  @Input() PageCount: number;

  Pages: any[];

  _limitSelected: string;

  get limitSelected(): string {
    return this._limitSelected;
  }

  set limitSelected(value: string) {
    this._limitSelected = value;
    this.LimitChange.emit(parseInt(this.limitSelected));
    this.pageNumberSelected = 1;
  }


  _pageNumberSelected: number;

  get pageNumberSelected(): number {
    return this._pageNumberSelected;
  }

  set pageNumberSelected(value: number) {
    this._pageNumberSelected = value;
    this.PageNumberChange.emit(this.pageNumberSelected);
  }

  
  IsVisiblePage(Index: number): boolean {
    const maxVisiblePages: number = 5,
          diff: number = (maxVisiblePages - 1) / 2;

    if (this.pageNumberSelected <= diff)
      return Index <= maxVisiblePages;

    else if (this.pageNumberSelected + diff >= this.Pages.length)
      return Index > this.Pages.length - maxVisiblePages;

    else
      return Index <= this.pageNumberSelected + diff && Index >= this.pageNumberSelected - diff;
  }


  ngOnInit(): void {
    this._limitSelected = this.Limit.toString();
    this._pageNumberSelected = this.PageNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.Pages = [];

    for(let i = 0; i < this.PageCount; i++)
      this.Pages.push({ "page": i + 1 });
  }
}