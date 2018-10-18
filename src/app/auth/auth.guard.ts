import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selector";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{

    constructor(private store:Store<AppState>, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        return this.store.pipe(
            select(isLoggedIn),
            tap(
                loggedIn => {
                    if(!loggedIn){
                        this.router.navigate(['/'], {});
                    }
                    return loggedIn;
                }
            )
        );
    }
}