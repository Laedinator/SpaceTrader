import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { UserDetailService } from '../_service/user/userDetail.service';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    AgentDetailsComponent,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SpaceTrader';

  isLoggedin() {
    this.userDetailService.isLoggedIn();
  }

  constructor(private userDetailService: UserDetailService) {}
}
