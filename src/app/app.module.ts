import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";

import { initializer } from "./app-init";

import { AppComponent } from "./app.component";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [BrowserModule, FormsModule, KeycloakAngularModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
