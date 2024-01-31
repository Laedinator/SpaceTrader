import { Component } from '@angular/core';
import { UserDetailService } from '../../_service/user/userDetail.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { User } from '../../_interface/user';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-agent-details',
  standalone: true,
  imports: [MatButtonModule, NgIf, MatGridListModule],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.scss',
})
export class AgentDetailsComponent {
  user: User = this.userDetailService.getUser();

  constructor(private userDetailService: UserDetailService) {}

  ngOninit() {
    this.updateDetails();
  }

  updateDetails() {
    this.userDetailService.fetchDetails();
    this.user = this.userDetailService.getUser();
  }

  isLoggedIn(): boolean {
    return this.userDetailService.isLoggedIn();
  }
}
