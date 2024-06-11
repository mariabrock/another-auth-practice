import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatButton,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatCardActions,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router = inject(Router);
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  loginGroup = new FormGroup<any>({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
  });

  constructor() {}

  public login() {
    console.log(this.loginGroup.getRawValue())
    this.http.post<{user: User}>(
      'https://api.realworld.io/api/users/login',
      {user: this.loginGroup.getRawValue()})
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSignal.set(response.user);
        console.log(this.authService.currentUserSignal)
      })
    this.router.navigate(['/landing']).then()
  }
}
