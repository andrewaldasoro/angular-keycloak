import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  getLoggedUser() {
    try {
      const userDetails = this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
      console.log("UserDetails", userDetails);
      console.log("UserRoles", this.keycloakService.getUserRoles());
      return userDetails;
    } catch (e) {
      console.error("getLoggedUser Exception", e);
      return undefined;
    }
  }

  logout() {
    this.keycloakService.logout();
  }

  redirectToProfile() {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}
