import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { RouterLink } from "@angular/router";

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
		RouterLink
	],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
