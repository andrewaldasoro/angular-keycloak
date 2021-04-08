import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements KeycloakAuthGuard {
  constructor(
    protected router: Router,
    protected keycloakAngular: KeycloakService
  ) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        resolve(false);
        return;
      }
      const requiredRoles = route.data.roles;
      let granted = false;
      if (!requiredRoles || requiredRoles.length === 0) {
        granted = true;
      } else {
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            break;
          }
        }
      }

      if (!granted) {
        resolve(false);
      }
      resolve(true);
    });
  }
}
