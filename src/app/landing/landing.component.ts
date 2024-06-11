import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { AuthService } from "../auth/auth.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgIf
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  authService = inject(AuthService);

  logout() {
    console.log('logout')
  }
}
