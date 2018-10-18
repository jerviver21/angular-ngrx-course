import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LOGIN_ACTION = 'LOGIN_ACTION',
  LOGOUT_ACTION = 'LOGOUT_ACTION',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN_ACTION;
  constructor(public payload:User){

  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT_ACTION;
}

export type AuthActions = Login | Logout;
