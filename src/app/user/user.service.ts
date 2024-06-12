import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser$ = new BehaviorSubject<{id: string; email: string} | null | undefined>(undefined);

  constructor() { }

  setCurrentUser() {}
}
