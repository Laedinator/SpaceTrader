import { Component, HostBinding } from '@angular/core';
import { SidenavLinkComponent } from '../sidenav-link/sidenav-link.component';
import { SidenavService } from './sidenav.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SidenavLinkComponent, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  constructor(public sidenavService: SidenavService) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }
}
