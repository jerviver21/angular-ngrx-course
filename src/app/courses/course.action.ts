import { Action } from '@ngrx/store';
import { Course } from './model/course';

export enum CourseActionTypes {
    FETCH_COURSE = '[View Course Page] FETCH_COURSE',

    COURSE_LOADED = "[Course API] COURSE_LOADED"
}

export class FetchCourse implements Action {

  readonly type = CourseActionTypes.FETCH_COURSE;

  constructor(public payload: {courseId:number}) {

  }
}

export class CourseLoaded implements Action {

  readonly type = CourseActionTypes.COURSE_LOADED;

  constructor(public payload: {course:Course}) {

  }
}

export type CourseActions = FetchCourse | CourseLoaded;
