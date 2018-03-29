import { FormControl } from '@angular/forms';

export interface IFilter {
    lastName: string;
    phone: string;
    city: string;
    dateFrom: FormControl;
    dateTo: FormControl;
}