import { CargoItem } from './cargoItem';

export interface ShipCargo {
  capacity: number;
  units: number;
  inventory: [CargoItem];
}
