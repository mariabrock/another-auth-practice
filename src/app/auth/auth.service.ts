import { Injectable, signal } from '@angular/core';
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // signal to notify all components of user
  // don't know = undefined, not logged in = null, logged in = User
  currentUserSignal = signal<User | undefined | null>(undefined)

  constructor() { }
}
