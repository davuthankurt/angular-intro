import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ShibesComponent } from './shibes/shibes.component';

const routes: Routes = [
  {path: "login",component: LoginComponent},
  {path: "signup",component: SignupComponent},
  {path: "", pathMatch: 'full', component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "shibes", component: ShibesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
