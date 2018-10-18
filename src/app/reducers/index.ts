import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, authReducer } from '../auth/auth.reducer';
import {storeFreeze} from 'ngrx-store-freeze';



export interface AppState {
  auth:AuthState
}


export const reducers: ActionReducerMap<AppState> = {
    auth:authReducer
};



export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
