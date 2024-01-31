import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { UserDetailService } from '../_service/user/userDetail.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    LandingPageComponent,
    AgentDetailsComponent,
    NgIf,
    NavbarComponent,
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
