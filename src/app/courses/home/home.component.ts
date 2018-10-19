import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {filter, map, tap, withLatestFrom, first} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import { selectAllCourses, selectPromoTotal, selectAdvancedCources, selectBegineerCourses } from '../course.selector';
import { FetchAllCourses } from '../course.action';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.store.dispatch(new FetchAllCourses());
        
        this.beginnerCourses$ = this.store.pipe( select(selectBegineerCourses) );

        this.advancedCourses$ = this.store.pipe( select(selectAdvancedCources) );

        this.promoTotal$ = this.store.pipe( select(selectPromoTotal) );

    }

}
