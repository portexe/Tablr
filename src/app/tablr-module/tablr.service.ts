import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TablrService {

	sortSubject: Subject<any>;
	sortObservable: Observable<any>;

	draggingSubject: Subject<any>;
	draggingObservable: Observable<any>;

	constructor() {
		this.sortSubject = new Subject();
		this.sortObservable = this.sortSubject.asObservable();
		this.draggingSubject = new Subject();
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
