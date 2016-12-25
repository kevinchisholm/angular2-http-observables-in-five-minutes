import {Package} from './package';
import {Injectable} from '@angular/core';
import {Http, Headers, BaseRequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PackageService {
	packageData: Subject<Array<Package>> = new BehaviorSubject<Array<Package>>([]);

	constructor(private http: Http) {

	}
	
	loadAllPackages () {
		this.http
		.get('https://api.myjson.com/bins/1g87r')
		.map((res: any) => {
			return res.json();
		})
		.subscribe (
			(data: any) => {
				this.packageData.next(data);
			},
			(err: any) => console.error("loadAllPackages: ERROR"),
			() => console.log("loadAllPackages: always")
		);
	}

}
