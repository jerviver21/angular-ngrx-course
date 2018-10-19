
import { CourseActionTypes, CourseActions } from './course.action';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Course } from './model/course';


export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded : boolean;
}

export const adapter:EntityAdapter<Course> = createEntityAdapter();

export const initialState : CoursesState = adapter.getInitialState({allCoursesLoaded:false});

export function courseReducer(state = initialState,
                              action: CourseActions): CoursesState {
  switch (action.type) {

    case CourseActionTypes.COURSE_LOADED:
      return adapter.addOne(action.payload.course, state);
    case CourseActionTypes.ALL_COURSES_LOADED:
      return adapter.addAll(action.payload.courses, {...state, allCoursesLoaded:true});
    case CourseActionTypes.SAVE_COURSE:
      return adapter.updateOne(action.payload.course, state);
    default:
      return state;
  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();