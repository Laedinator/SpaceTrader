import { Injectable } from '@angular/core';
import { Ship } from '../../_interface/ship';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShipService } from './ship.service';

@Injectable({
  providedIn: 'root',
})
export class ShipStorageService {
  private readonly _ships: BehaviorSubject<Ship[]>;
  public activeShip: Ship | undefined;

  constructor(private shipService: ShipService) {
    this._ships = new BehaviorSubject<Ship[]>([]);
    this.updateAllShips();
  }

  updateAllShips() {
    this.shipService.getAllShips().subscribe({
      next: (response: any) => {
        this._ships.next(response.data);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getAllShips(): Observable<Ship[]> {
    return this._ships;
  }

  getActiveShip() {
    return this.activeShip;
  }
}
