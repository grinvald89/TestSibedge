import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from './container/i-user';
import { IResponse } from './i-response';

@Injectable()
export class DataService {
	constructor(private http: Http) { }

	getUsers(): Observable<IResponse> {
		// return this.http.get("http://jsteam.sibedge.com/raw/task/users.json")
		return this.http.get("assets/data/users.json")
			.map(res => res.json() as IResponse);
	}
}