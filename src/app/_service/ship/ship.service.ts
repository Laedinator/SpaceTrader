import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Ship } from '../../_interface/ship';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  shipInformationUrl: string = environment.apiUrl + 'my/ships';

  options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private http: HttpClient) {}

  getAllShips() {
    return this.http.get<Ship[]>(this.shipInformationUrl, this.options);
  }
}
