export interface ShipEngine {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  speed: number;
  requirements: {
    power: number;
    crew: number;
    slots: number;
  };
}
