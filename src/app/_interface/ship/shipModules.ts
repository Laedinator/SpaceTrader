export interface ShipModules {
  symbol: string;
  capacity: number;
  range: number;
  name: string;
  description: string;
  requirements: {
    power: number;
    crew: number;
    slots: number;
  };
}
