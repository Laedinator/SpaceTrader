import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../_interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private userService: UserService) {}

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('agent')) {
      return true;
    }
    return false;
  }

  fetchDetails(): void {
    this.userService.getAgent().subscribe({
      next: (response) => {
        console.log(response);

        this.createLocalUser(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createLocalUser(response: any) {
    const newUser: User = {
      accountId: response.data.accountId,
      symbol: response.data.symbol,
      headquarters: response.data.headquarters,
      credits: response.data.credits,
      startingFaction: response.data.startingFaction,
      shipCount: response.data.shipCount,
    };
    sessionStorage.setItem('agent', JSON.stringify(newUser));
  }

  getUser(): User {
    const value = sessionStorage.getItem('agent');
    let user;
    if (typeof value === 'string') {
      user = JSON.parse(value);
    }
    return user;
  }
}
