import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./course.reducer";
import * as fromCourse from "./course.reducer";

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectCourseById = (courseId:number) => createSelector(
    selectCoursesState,
    coursesState => coursesState.entities[courseId]
);

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourse.selectAll
);

export const selectBegineerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCources =  createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
);

export const allCoursesLoaded = createSelector(
    selectCoursesState,
    coursesState => coursesState.allCoursesLoaded
);