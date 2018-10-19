import { Action } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

export enum CourseActionTypes {
    FETCH_COURSE = '[View Course Page] FETCH_COURSE',

    COURSE_LOADED = "[Course API] COURSE_LOADED",

    FETCH_ALL_COURSES = "[Home Page] FETCH_ALL_COURSES",

    ALL_COURSES_LOADED = "[Course API] ALL_COURSES_LOADED",

    SAVE_COURSE = "[Edit Page] SAVE_COURSE"
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

export class FetchAllCourses implements Action {

  readonly type = CourseActionTypes.FETCH_ALL_COURSES;

}

export class AllCoursesLoaded implements Action {

  readonly type = CourseActionTypes.ALL_COURSES_LOADED;

  constructor(public payload: {courses:Course[]}) {

  }
}

export class SaveCourse implements Action {

  readonly type = CourseActionTypes.SAVE_COURSE;

  constructor(public payload: {course:Update<Course>}) {

  }
}

export type CourseActions = FetchCourse | CourseLoaded | FetchAllCourses | AllCoursesLoaded | SaveCourse;
