
  import { User } from '../model/user.model';
  import { AuthActionTypes } from '../auth/auth.actions';
  
  export type AuthState = {
    loggedIn: boolean,
    user: User
  }
  
  const initialAuthState:AuthState = {
    loggedIn: false,
    user: undefined
  }
  
  export function authReducer(state: AuthState = initialAuthState, action):AuthState  {
    switch(action.type){
      case AuthActionTypes.LOGIN_ACTION:
        console.log("Reducer");
        return {
          loggedIn: true,
          user:action.payload
        }
      case AuthActionTypes.LOGOUT_ACTION:
        console.log("Reducer");
        return{
          loggedIn:false,
          user:undefined
        }
      default:
        return state;
    }
  }
  
  
  