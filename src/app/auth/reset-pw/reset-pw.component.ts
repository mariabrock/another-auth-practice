import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-pw',
  standalone: true,
	imports: [
		FormsModule,
		MatButton,
		MatCard,
		MatCardContent,
		MatCardHeader,
		MatFormField,
		MatInput,
		MatLabel,
		ReactiveFormsModule
	],
  templateUrl: './reset-pw.component.html',
  styleUrl: './reset-pw.component.scss'
})
export class ResetPwComponent {

  private router = inject(Router);

  public  resetGroup: FormGroup;

  constructor() {
    this.resetGroup = new FormGroup<any>({
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
    });
  }

  public reset() {
    console.log("You've reset your password.")
    this.router.navigate(['/login']).then()
  }

}
