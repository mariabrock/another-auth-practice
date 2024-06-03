import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";

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

  public  loginGroup: FormGroup;

  constructor() {
    this.loginGroup = new FormGroup<any>({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
    });
  }

  public login() {
    console.log("You've logged in.")
    this.router.navigate(['/landing']).then()
  }
}
