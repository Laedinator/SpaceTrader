import { Component, Input } from '@angular/core';
import { Ship } from '../../../_interface/ship';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { ShipStorageService } from '../../../_service/ship/ship-storage.service';

@Component({
  selector: 'app-ship-overview-item',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './ship-overview-item.component.html',
  styleUrl: './ship-overview-item.component.scss',
})
export class ShipOverviewItemComponent {
  @Input() ship!: Ship;

  constructor(private shipStorageService: ShipStorageService) {}

  setActiveShip(ship: Ship) {
    this.shipStorageService.activeShip = ship;
    console.log(ship);
  }
}
