import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { MatIcon } from "@angular/material/icon";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ResetPwComponent } from "./auth/reset-pw/reset-pw.component";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { AuthService } from "./auth/auth.service";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { User } from "./user/user";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabGroup, MatTab, MatIcon, MatTabLabel, LoginComponent, RegisterComponent, ResetPwComponent, MatCard, MatCardHeader, MatCardContent, MatCardActions, MatButton, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get<{user: User}> ('https://api.realword.io/api/user')
        .subscribe({
          next: (response) => {
        console.log('response', response)
          this.authService.currentUserSignal.set(response.user);
      },
        error: () => {
        this.authService.currentUserSignal.set(null);
      },
    });
  }

  logout() {
    console.log('logout app');
    localStorage.setItem('token', '');
    this.authService.currentUserSignal.set(null);
  }
}
