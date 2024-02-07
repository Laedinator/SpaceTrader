import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ShipStorageService } from '../../_service/ship/ship-storage.service';
import { ShipOverviewItemComponent } from './ship-overview-item/ship-overview-item.component';
import { Ship } from '../../_interface/ship';
import { NgFor, NgIf } from '@angular/common';
import { ShipDetailOverviewComponent } from './ship-detail-overview/ship-detail-overview.component';

@Component({
  selector: 'app-ship-overview',
  standalone: true,
  imports: [
    MatListModule,
    ShipOverviewItemComponent,
    ShipDetailOverviewComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './ship-overview.component.html',
  styleUrl: './ship-overview.component.scss',
})
export class ShipOverviewComponent {
  ships: Ship[] = [];
  activeShip!: Ship;

  constructor(private shipStorageService: ShipStorageService) {}

  ngOnInit() {
    this.shipStorageService.updateAllShips();
    this.shipStorageService
      .getAllShips()
      .subscribe((data: Ship[]) => (this.ships = data));
  }

  getActiveShip() {
    if (this.shipStorageService.activeShip) {
      this.activeShip = this.shipStorageService.activeShip;
      return true;
    }
    return false;
  }
}
