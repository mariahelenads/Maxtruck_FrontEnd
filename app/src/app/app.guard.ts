import { inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";


export const authGuard  = () => {
    const auth = inject(AuthService)
    const route = inject(Router)
    if(auth.isLoggedIn()){
        return true
    }
    route.navigate([''])
    return false
};