import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../_interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfoUrl: string = environment.apiUrl + 'my/agent';

  options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private http: HttpClient) {}

  getAgent() {
    return this.http.get(this.userInfoUrl, this.options);
  }
}
