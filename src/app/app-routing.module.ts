import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppartementsComponent } from './appartements/appartements.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';

const routes: Routes = [
  {
    path:
      "appartements",component: AppartementsComponent
  },
  {
    path:
      "add-appartements",component: AddAppartementComponent
  },
  { path: "", redirectTo: "appartements", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
