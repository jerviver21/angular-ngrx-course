import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CoursesService } from "./services/courses.service";
import { CourseActionTypes, FetchCourse, CourseLoaded } from "./course.action";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class CourseEffects{

    @Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<FetchCourse>(CourseActionTypes.FETCH_COURSE),
        mergeMap(action => this.service.findCourseById(action.payload.courseId)),
        map(course => new CourseLoaded({course}))
    );

    constructor(private actions$:Actions, private service:CoursesService){}
}