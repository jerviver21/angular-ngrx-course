import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CoursesService } from "./services/courses.service";
import { CourseActionTypes, FetchCourse, CourseLoaded, FetchAllCourses, AllCoursesLoaded } from "./course.action";
import { mergeMap, map, tap, withLatestFrom, filter } from "rxjs/operators";
import { AppState } from "../reducers";
import { Store, select } from "@ngrx/store";
import { allCoursesLoaded } from "./course.selector";

@Injectable()
export class CourseEffects{

    @Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<FetchCourse>(CourseActionTypes.FETCH_COURSE),
        mergeMap(action => this.service.findCourseById(action.payload.courseId)),
        map(course => new CourseLoaded({course}))
    );

    @Effect()
    loadAllCourses$ = this.actions$.pipe(
        ofType<FetchAllCourses>(CourseActionTypes.FETCH_ALL_COURSES),
        withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
        filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
        mergeMap(action => this.service.findAllCourses()),
        map(courses => new AllCoursesLoaded({courses}))
    );

    constructor(private actions$:Actions, 
                private service:CoursesService,
                private store:Store<AppState>){}
}