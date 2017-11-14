import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class TablrService {

	sortSubject: ReplaySubject<any>;
	sortObservable: Observable<any>;

	draggingSubject: ReplaySubject<any>;
	draggingObservable: Observable<any>;

	constructor() {
		this.sortSubject = <ReplaySubject<any>>new ReplaySubject();
		this.sortObservable = this.sortSubject.asObservable();
		this.draggingSubject = <ReplaySubject<any>>new ReplaySubject();
		this.draggingObservable = this.draggingSubject.asObservable();
	}
	getSortObservable() {
		return this.sortObservable;
	}
	getDraggingObservable() {
		return this.draggingObservable;
	}
	updateSort(key: string, sortOrder: number) {
		this.sortSubject.next({ 'key': key, 'sortOrder': sortOrder });
	}
	dragging(state: number) {
		// 0 - not dragging, 1 - dragging
		this.draggingSubject.next(state);
	}
}
