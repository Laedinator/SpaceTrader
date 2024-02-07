export interface ShipFrame {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  requirements: {
    power: number;
    crew: number;
    slots: number;
  };
}
