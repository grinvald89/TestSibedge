import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FiltersComponent } from './container/filters/filters.component';
import { PaginatorComponent } from './container/paginator/paginator.component';
import { TableComponent } from './container/table/table.component';

import { DataService } from './data.service';
import { DateTimeService } from './date-time.service';

import { FilterTablePipe } from './pipes/filter-table.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FiltersComponent,
    PaginatorComponent,
    TableComponent,
    FilterTablePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    DateTimeService,
    FilterTablePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
