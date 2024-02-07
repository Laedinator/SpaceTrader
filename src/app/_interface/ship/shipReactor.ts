export interface ShipReactor {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  powerOutput: number;
  requirements: {
    power: number;
    crew: number;
    slots: number;
  };
}
