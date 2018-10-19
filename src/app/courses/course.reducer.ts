
import { CourseActionTypes, CourseActions } from './course.action';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Course } from './model/course';


export interface CoursesState extends EntityState<Course> {
}

export const adapter:EntityAdapter<Course> = createEntityAdapter();

export const initialState : CoursesState = adapter.getInitialState();

export function courseReducer(state = initialState,
                              action: CourseActions): CoursesState {
  switch (action.type) {

    case CourseActionTypes.COURSE_LOADED:
      return adapter.addOne(action.payload.course, state);
    default:
      return state;
  }
}
