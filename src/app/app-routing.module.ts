import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ADMIN", "USER"] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
