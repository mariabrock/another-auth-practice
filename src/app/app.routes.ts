import { Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetPwComponent } from "./auth/reset-pw/reset-pw.component";
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: ResetPwComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  }
];
