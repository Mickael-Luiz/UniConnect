import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

export function roleGuard(allowedRoles: ('PF' | 'PJ')[]): CanActivateChildFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const userType = auth.getUserType();
    if(userType && allowedRoles.includes(userType)) {
      return true;
    }

    router.navigate(['/login'])
    return false;
  }
}