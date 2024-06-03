import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { MatIcon } from "@angular/material/icon";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetPwComponent } from "./auth/reset-pw/reset-pw.component";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabGroup, MatTab, MatIcon, MatTabLabel, LoginComponent, RegisterComponent, ResetPwComponent, MatCard, MatCardHeader, MatCardContent, MatCardActions],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monsterlessons-angular-auth';
}
